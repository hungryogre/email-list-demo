import { combineReducers } from 'redux'

import settings from './settings'
import filter from './filter'

export default combineReducers({
    settings,
    filter,
})