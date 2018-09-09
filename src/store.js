import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import root from './reducers'

const sagaMiddleware = createSagaMiddleware()
//export default compose(applyMiddleware(sagaMiddleware))(createStore)(root)
export default createStore(root)