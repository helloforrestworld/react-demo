import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import {
  DetailWrapper,
  Header,
  Content
} from './style'

class Detail extends Component {
  render() {
    console.log('id: ', this.props.match.params.id)
    return (
      <DetailWrapper>
        <Header>{this.props.title}</Header>
        <Content dangerouslySetInnerHTML={{__html: this.props.content}}></Content>
      </DetailWrapper>
    )
  }

  componentDidMount() {
    this.props.getDetail()
  }
}

const mapState = (state) => ({
  title: state.getIn(['detail', 'title']),
  content: state.getIn(['detail', 'content'])
})

const mapDispatch = (dispatch) => {
  return {
    getDetail() {
      dispatch(actionCreators.getDetail())
    }
  }
}

export default connect(mapState, mapDispatch)(Detail)