import createSagaMiddleware from '@redux-saga/core';
import { compose, createStore, applyMiddleware, Middleware } from 'redux';
import logger from 'redux-logger';
import { rootReducer } from './root-reducer';
import { rootSaga } from './root-saga';
import { SongsState } from './song/songs.types';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const middlewares: Middleware[] = [sagaMiddleware];

export const store = createStore(rootReducer, composeEnchancers(applyMiddleware(...middlewares)));

sagaMiddleware.run(rootSaga)

export interface Action {
  type: string;
  payload: any;
}

export interface State {
  songs: SongsState
}