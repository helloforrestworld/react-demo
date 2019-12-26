import React, { useState, useEffect, useRef, memo } from 'react'
import * as actions from './actions'
import reducer from './reducer'
import './App.css'

function bindActionCreators(actionCreators, dispatch) {
  const ret = {}

  for (let key in actionCreators) {
    ret[key] = function (...args) {
      const actionCreator = actionCreators[key]
      const action = actionCreator(...args)
      dispatch(action)
    }
  }

  return ret
}

const Controls = memo(function Controls(props) {
  const { addTodo } = props
  const inputRef = useRef()

  const onSubmit = (e) => {
    e.preventDefault()

    const newText = inputRef.current.value.trim()

    if (newText.length === 0) {
      return
    }

    addTodo(newText)

    inputRef.current.value = ''
  }

  return (
    <div className="control">
      <h1>
        todos
      </h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          ref={inputRef}
          className="new-todo"
          placeholder="What needs to be done ?" />
      </form>
    </div>
  )
})

const TodoItem = memo(function TodoItem(props) {
  const {
    todo: {
      id,
      complete,
      text
    },
    removeTodo,
    toggleTodo,
  } = props

  const onChange = () => {
    toggleTodo(id)
  }

  const onRemove = () => {
    removeTodo(id)
  }

  return (
    <li className="todo-item">
      <input
        type="checkbox"
        checked={complete}
        onChange={onChange}
      />
      <label className={complete ? 'complete' : ''}>{text}</label>
      <button onClick={onRemove}>X</button>
    </li>
  )
})

const Todos = memo(function Todos(props) {
  const { todos, removeTodo, toggleTodo } = props
  return (
    <ul className="todos">
      {
        todos.map(todo => {
          return (
            <TodoItem
              key={todo.id}
              todo={todo}
              removeTodo={removeTodo}
              toggleTodo={toggleTodo}
            >
            </TodoItem>
          )
        })
      }
    </ul>
  )
})

const LS_KEY = '_$-todos_'

let store = {
  todos: [],
  incrementCount: 0
}

function App() {
  const [todos, setTodos] = useState([])
  const [incrementCount, setIncrementCount] = useState(0)

  const dispatch = (action) => {
    const setters = {
      todos: setTodos,
      incrementCount: setIncrementCount
    }

    if ('function' === typeof action) {
      action(dispatch, () => store)
      return
    }

    const newState = reducer(store, action)

    for(let key in newState) {
      setters[key](newState[key])
    }
  }

  useEffect(() => {
    Object.assign(store, {
      todos,
      incrementCount
    })
  }, [todos, incrementCount])

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem(LS_KEY) || '[]')
    dispatch(actions.createSet(todos))
  }, [])

  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(todos))
  }, [todos])

  return (
    <div className="todo-list">
      <Controls
        {
          ...bindActionCreators({ addTodo: actions.createAdd }, dispatch)
        }
      />
      <Todos
        {
          ...bindActionCreators({
            removeTodo: actions.createRemove,
            toggleTodo: actions.createToggle
          }, dispatch)
        }
        todos={todos}
      />
    </div>
  )
}

export default App
