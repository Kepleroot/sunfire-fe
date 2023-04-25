import { createStore, applyMiddleware, Middleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootSaga, { rootReducer } from './root'

const sagaMiddleware = createSagaMiddleware()

const middlewares: Middleware[] = [sagaMiddleware]

const composeEnhancer = composeWithDevTools(applyMiddleware(...middlewares))

export const store = createStore(rootReducer, composeEnhancer)

sagaMiddleware.run(rootSaga)