import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ListItem, ListInfo } from '../style'

class List extends Component {
  render() {
    return (
      <div>
        {
          this.props.list.map(item => {
            return (
              <ListItem key={item.get('id')}>
                <ListInfo>
                  <h3 className='title'>{item.get('title')}</h3>
                  <p className='abstract'>
                    {item.get('desc')}
                  </p>
                </ListInfo>
                <img className='pic' src={item.get('imgUrl')} alt="" />
              </ListItem>
            )
          })
        }
      </div>
    )
  }
}

const mapState = (state) => {
  return {
    list: state.getIn(['home', 'articleList'])
  }
}

export default connect(mapState, null)(List)