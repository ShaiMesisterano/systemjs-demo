import { all, takeEvery, fork } from 'redux-saga/effects';
import {increment} from '../../slices/counter/index';

function* fetchTodo() {
    yield fetch('http://127.0.0.1:3000/todos', {
        method: 'POST',
        headers: {
            contentType: 'application/json'
        },
        body: JSON.stringify({id: new Date(),title: 't1', description: 'd1', assignee: 'a1'}),
    });
}

function* watchTodo() {
    console.log('*** watchTodo');
    yield takeEvery(increment.type, fetchTodo);
}

export default function* rootSaga() {
    yield all([
        fork(watchTodo),
    ])
  }