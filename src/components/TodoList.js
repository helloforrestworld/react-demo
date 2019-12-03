import React from 'react'
import { connect } from 'react-redux'
import Todo from './Todo'

const TodoList = ({ todos = [] }) => {
  return (
    <ul className="todo-list">
      {
        todos.map((todo, id) => {
          return (
            <Todo todo={todo} key={"todo-item-" + id} />
          )
        })
      }
    </ul>
  )
}

const mapStateToProps = state => {
  const { allIds, byIds } = state
  const todos = allIds.map(id => {
    return { ...byIds[id], id}
  })
  return { todos }
}

export default connect(mapStateToProps, null)(TodoList)