import { combineReducers } from "redux";
import counter, { counterSaga } from './counter';
import todos from './todos';
import { all } from 'redux-saga/effects';

const rootReducer = combineReducers({
    counter,
    todos,
});

export function* rootSaga() {
    yield all([counterSaga()]);
}

export default rootReducer;