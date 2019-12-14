import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { ListItem, ListInfo, LoadMore } from '../style'
import { actionCreators } from '../store'

class List extends PureComponent {
  render() {
    return (
      <div>
        {
          this.props.list.map((item, index) => {
            return (
              <ListItem key={index}>
                <ListInfo>
                  <h3 className='title'>
                    <Link to={'/detail/' + item.get('id')}>
                      {item.get('title')}
                    </Link>
                  </h3>
                  <p className='abstract'>
                    {item.get('desc')}
                  </p>
                </ListInfo>
                <img className='pic' src={item.get('imgUrl')} alt="" />
              </ListItem>
            )
          })
        }
        <LoadMore onClick={() => this.props.loadMore(this.props.page)}>加载更多</LoadMore>
      </div>
    )
  }
}

const mapState = (state) => {
  return {
    list: state.getIn(['home', 'articleList']),
    page: state.getIn(['home', 'page'])
  }
}

const mapDispatch = (dispatch) => {
  return {
    loadMore(page) {
      const action = actionCreators.getMoreArticle(page)
      dispatch(action)
    }
  }
}

export default connect(mapState, mapDispatch)(List)