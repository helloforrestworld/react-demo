export const ACTION_SET_FROM = 'SET_FROM'
export const ACTION_SET_TO = 'SET_TO'
export const ACTION_SET_IS_CITY_SELECTOR_VISIBLE = 'SET_IS_CITY_SELECTOR_VISIBLE'
export const ACTION_SET_CURRENT_SELECTOR_LEFT_CITY = 'SET_CURRENT_SELECTOR_LEFT_CITY'
export const ACTION_SET_CITY_DATA = 'SET_CITY_DATA'
export const ACTION_SET_IS_LOADING_CITY_DATA = 'SET_IS_LOADING_CITY_DATA'
export const ACTION_SET_IS_DATE_SELECTOR_VISIBLE = 'SET_IS_DATE_SELECTOR_VISIBLE'
export const ACTION_SET_HIGH_SPEED = 'SET_HIGH_SPEED'

export function setFrom(from) {
  return {
    type: ACTION_SET_FROM,
    payload: from
  }
}

export function setTo(to) {
  return {
    type: ACTION_SET_TO,
    payload: to
  }
}

export function setIsLoadingCityData(isLoadingCityData) {
  return {
    type: ACTION_SET_IS_LOADING_CITY_DATA,
    payload: isLoadingCityData
  }
}

export function setCityData(cityData) {
  return {
    type: ACTION_SET_CITY_DATA,
    payload: cityData
  }
}

export function toggleHighSpeed() {
  return (dispatch, getState) => {
    const { highSpeed } = getState()
    dispatch({
      type: ACTION_SET_HIGH_SPEED,
      payload: !highSpeed
    })
  }
}

export function showCitySelector(currentSelectingLeftCity) {
  return (dispatch) => {
    dispatch({
      type: ACTION_SET_IS_CITY_SELECTOR_VISIBLE,
      payload: true
    })

    dispatch({
      type: ACTION_SET_CURRENT_SELECTOR_LEFT_CITY,
      payload: currentSelectingLeftCity
    })
  }
}

export function hideCitySelector() {
  return {
    type: ACTION_SET_IS_CITY_SELECTOR_VISIBLE,
    payload: false
  }
}

export function fetchCityData() {
  return (dispatch, getState) => {
    const { isLoadingCityData } = getState()

    if (isLoadingCityData) {
      return
    }

    const city_data_cache = JSON.parse(localStorage.getItem('city_data_cache') || '{}')
    if (Date.now() < city_data_cache.expire) {
      dispatch(setCityData(city_data_cache.data))
      return
    }

    dispatch(setIsLoadingCityData(true))

    fetch('/rest/cities?_' + Date.now())
      .then(res => res.json())
      .then(cityData => {
        dispatch(setCityData(cityData))
        dispatch(setIsLoadingCityData(false))
        localStorage.setItem('city_data_cache', JSON.stringify({
          expire: Date.now() + 60 * 1000,
          data: cityData
        }))
      }).catch((err) => {
        console.log(err)
        dispatch(setIsLoadingCityData(false))
      })
  }
}

export function setSelectedCity(city) {
  return (dispatch, getState) => {
    const { currentSelectorLeftCity } = getState()
    if (currentSelectorLeftCity) {
      dispatch(setFrom(city))
    } else {
      dispatch(setTo(city))
    }
    console.log(getState())
    dispatch(hideCitySelector())
  }
}

export function showDateSelector() {
  return {
    type: ACTION_SET_IS_DATE_SELECTOR_VISIBLE,
    payload: true
  }
}

export function hideDateSelector() {
  return {
    type: ACTION_SET_IS_DATE_SELECTOR_VISIBLE,
    payload: false
  }
}

export function exchangeFromTo() {
  return (dispatch, getState) => {
    const { from, to } = getState()
    dispatch(setFrom(to))
    dispatch(setTo(from))
  }
}