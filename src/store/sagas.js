import { put, takeEvery } from 'redux-saga/effects'
import axios from 'axios'
import { GET_TODO_LIST } from './actionTypes'
import { initListAction } from './actionCreators'

function* fetchTodoList() {
  try {
    const res =  yield axios.get('https://www.easy-mock.com/mock/5de3c2458739b22f6b171962/example/api/todolist')
    const action = initListAction(res.data)
    yield put(action)
  } catch (err) {
    console.log(err)
  }
}

function* mySaga() {
  yield takeEvery(GET_TODO_LIST, fetchTodoList)
}

export default mySaga