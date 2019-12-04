import React, { Component } from 'react'
import { connect } from 'react-redux'
import cs from 'classnames'
import { setFilter } from '../redux/actions'
import { FILTERS } from '../const'

class Filter extends Component {
  render() {
    console.log(this.props.activeFilter)
    return (
      <ul className='filter'>
        {
          Object.keys(FILTERS).map(filterKey => {
            const currentFilter = FILTERS[filterKey]
            return (
              <li
                onClick={() => {this.props.setFilter(currentFilter)}}
                className={cs('filter-item', currentFilter === this.props.activeFilter && 'filter-item--active')}
                key={filterKey}
              >{currentFilter}</li>
            )
          })
        }
      </ul>
    )
  }
}

const mapStateToProps = ({ filter }) => {
  return {
    activeFilter: filter
  }
}
export default connect(mapStateToProps, { setFilter })(Filter)