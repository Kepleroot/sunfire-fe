import {createStore, applyMiddleware, combineReducers, Middleware, compose} from 'redux'
import { songsReducer } from './songs/reducers';
import createSagaMiddleware from 'redux-saga';
import all  from 'redux-saga'
import { SongsState } from './songs/types';
import { composeWithDevTools } from 'redux-devtools-extension'

const rootReducer = combineReducers({
  songs: songsReducer
});

//function* rootSaga() {
//  yield all
//} 

// const sagaMiddleware = createSagaMiddleware();

// const middlewares: Middleware[] = [sagaMiddleware];

const composeEnhancer = composeWithDevTools(
  applyMiddleware()
)

export const store = createStore(rootReducer, composeEnhancer)

//sagaMiddleware.run(rootSaga)

export interface SimpleAction {
  type: string;
  payload: any;
}

export interface State {
  songs: SongsState
}