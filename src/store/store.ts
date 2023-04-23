import { createStore, applyMiddleware, Middleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { SongsState } from './songs/types'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootSaga, { rootReducer } from './root'

const sagaMiddleware = createSagaMiddleware()

const middlewares: Middleware[] = [sagaMiddleware]

const composeEnhancer = composeWithDevTools(applyMiddleware(...middlewares))

export const store = createStore(rootReducer, composeEnhancer)

sagaMiddleware.run(rootSaga)

export interface SimpleAction {
  type: string
  payload: any
}

export interface State {
  songs: SongsState
}
