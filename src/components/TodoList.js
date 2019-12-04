import React from 'react'
import { connect } from 'react-redux'
import Todo from './Todo'
import { FILTERS } from '../const'

const TodoList = ({ list = [] }) => {
  return (
    <ul className="todo-list">
      {
        list.map((todo, id) => {
          return (
            <Todo todo={todo} key={"todo-item-" + id} />
          )
        })
      }
    </ul>
  )
}

const mapStateToProps = ({ todos, filter }) => {
  const { allIds, byIds } = todos
  let list = allIds.map(id => {
    return { ...byIds[id], id}
  })
  switch (filter) {
    case FILTERS.COMPLETED: {
      list = list.filter(item => item.completed)
      break
    }
    case FILTERS.INCOMPLETE: {
      list = list.filter(item => !item.completed)
      break
    }
    case FILTERS.ALL:
    default:
      break
  }

  return {
    list
  }
}

export default connect(mapStateToProps, null)(TodoList)