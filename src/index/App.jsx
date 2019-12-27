import React, { useCallback, useMemo } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Header from '../common/Header.jsx'
import Journey from './Journey.jsx'
import DepartDate from './DepartDate.jsx'
import HighSpeed from './HighSpeed.jsx'
import Submit from './Submit.jsx'
import {
  exchangeFromTo,
  showCitySelector,
  hideCitySelector,
} from './actions'
import './App.css'

function App(props) {
  const {
    from,
    to,
    dispatch
  } = props

  const onBack = useCallback(() => {
    window.history.back()
  }, [])

  const cbs = useMemo(() => {
    return bindActionCreators({
      exchangeFromTo,
      showCitySelector,
      hideCitySelector
    }, dispatch)
  }, [dispatch])

  return (
    <div>
      <div className="header-wrapper">
        <Header title="火车票" onBack={onBack} />
      </div>
      <form className="form">
        <Journey
          from={from}
          to={to}
          {...cbs}
        />
        <DepartDate />
        <Submit />
        <HighSpeed />
      </form>
    </div>
  )
}

export default connect(
  function mapStateToProps(state) {
    return state
  },
  function mapDispatchToProps(dispatch) {
    return {
      dispatch
    }
  }
)(App)