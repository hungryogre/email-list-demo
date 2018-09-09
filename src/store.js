import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import root from './reducers'

const sagaMiddleware = createSagaMiddleware()
//export default compose(applyMiddleware(sagaMiddleware))(createStore)(root)
export default createStore(root, undefined,
    typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())