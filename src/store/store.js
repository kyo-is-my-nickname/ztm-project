import {compose,legacy_createStore as createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger'
// import thunk from 'redux-thunk'
import createSagaMiddleware from '@redux-saga/core'
import { rootSaga } from './root-saga'
import { rootReducer } from './root-reducer'
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const composeEnhancer=(process.env.NODE_ENV!=='production' && 
window && 
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || 
compose;
const composedEnhancers=composeEnhancer(applyMiddleware(...middlewares))
const persistConfig={key:'root', storage, whitelist:['cart']}
const sagaMiddleware=createSagaMiddleware()
const middlewares=[process.env.NODE_ENV!=='production' && logger, sagaMiddleware].filter(Boolean)
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store=createStore(persistedReducer, undefined, composedEnhancers)
sagaMiddleware.run(rootSaga)
export const persistor= persistStore(store)