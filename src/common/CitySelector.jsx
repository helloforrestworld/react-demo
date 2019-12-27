import React, {
  useState,
  useMemo,
  useEffect,
  useCallback,
  memo
} from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import './CitySelector.css'

const CityItem = memo(function CityItem(props) {
  const {
    name,
    onSelect
  } = props

  return (
    <li
      className="city-li"
      onClick={() => { onSelect(name) }}
    >
      { name }
    </li>
  )
})
CityItem.propTypes = {
  name: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
}

const CitySection = memo(function CitySection(props) {
  const {
    section,
    onSelect
  } = props

  const { citys = [], title } = section

  return (
    <ul className="city-ul">
      <li
        data-cate={title}
        className="city-li"
        key={title}
      >{title}</li>
      {
        citys.map(city => {
          return (
            <CityItem
              key={city.name}
              name={city.name}
              onSelect={onSelect}
            />
          )
        })
      }
    </ul>
  )
})
CitySection.propTypes = {
  section: PropTypes.object.isRequired,
  onSelect: PropTypes.func.isRequired
}

const AlphaIndex = memo(function AlphaIndex(props) {
  const {
    index,
    onClick
  } = props

  return (
    <i className="city-index-item" onClick={() => { onClick(index) }}>
      { index }
    </i>
  )
})

AlphaIndex.propTypes = {
  index: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

const alphaTable = Array.from(new Array(26), (ele, index) => {
  return String.fromCharCode(65 + index)
})

const CityList = memo(function CityList(props) {
  const {
    cityList,
    onSelect,
    toAlpha
  } = props

  return (
    <div className="city-list">
      <div className="city-cate">
        {
          cityList.map(section => {
            return (
              <CitySection
                key={section.title}
                section={section}
                onSelect={onSelect}
              />
            )
          })
        }
      </div>
      <div className="city-index">
        {
          alphaTable.map(alpha => {
            return (
              <AlphaIndex
                key={alpha}
                index={alpha}
                onClick={toAlpha}
              />
            )
          })
        }
      </div>
    </div>
  )
})
CityList.propTypes = {
  cityList: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired
}

const CitySelector = memo(function CitySelector(props) {
  const {
    show,
    cityData,
    isLoadingCityData,
    fetchCityData,
    onBack,
    onSelect
  } = props

  const [searchKey, setSearchKey] = useState('')

  const key = useMemo(() => searchKey.trim(), [searchKey])

  const toAlpha = useCallback((alpha) => {
    document.querySelector(`[data-cate='${alpha}']`)
      .scrollIntoView()
  }, [])

  const outputCitySections = () => {
    if (isLoadingCityData) {
      return <div>loading</div>
    }

    if (cityData) {
      return (
      <CityList
        cityList={cityData.cityList}
        onSelect={onSelect}
        toAlpha={toAlpha}
      />
      )
    }

    return <div>error</div>
  }

  useEffect(() => {
    if (!show || cityData || isLoadingCityData) {
      return
    }
    fetchCityData()
  }, [show, cityData, isLoadingCityData, fetchCityData])

  return (
    <div className={classnames('city-selector', { 'hidden': !show })}>
      <div className="city-search">
        <div className="search-back" onClick={onBack}>
          <svg width="42" height="42">
            <polyline
              points="25,13 16,21 25,29"
              stroke="#fff"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </div>
        <div className="search-input-wrapper">
          <input
            type="text"
            className="search-input"
            placeholder="城市、车站的中文或拼音"
            value={searchKey}
            onChange={(e) => { setSearchKey(e.target.value) }}
          />
        </div>
        <i
          className={classnames('search-clean', {
            'hidden': key.length === 0
          })}
          onClick={() => { setSearchKey('') }}
        >
          &#xf063;
        </i>
      </div>

      {
        outputCitySections()
      }
    </div>
  );
})

CitySelector.propTypes = {
  show: PropTypes.bool.isRequired,
  cityData: PropTypes.object,
  isLoadingCityData: PropTypes.bool.isRequired,
  fetchCityData: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired
}

export default CitySelector
