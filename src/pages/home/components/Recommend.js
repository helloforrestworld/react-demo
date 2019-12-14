import React, { Component } from 'react'
import { connect } from 'react-redux'
import { RecommendWrapper, RecommendItem } from '../style'
import rec1 from '../../../static/rec1.png'
import rec2 from '../../../static/rec2.png'
import rec3 from '../../../static/rec3.png'
import rec4 from '../../../static/rec4.png'


class Recommend extends Component {
  render() {
    return (
      <RecommendWrapper>
        <RecommendItem imgUrl={rec1}></RecommendItem>
        <RecommendItem imgUrl={rec2}></RecommendItem>
        <RecommendItem imgUrl={rec3}></RecommendItem>
        <RecommendItem imgUrl={rec4}></RecommendItem>
      </RecommendWrapper>
    )
  }
}

const mapState = (state) => ({

})

export default connect(mapState, null)(Recommend)