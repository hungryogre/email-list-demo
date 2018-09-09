import { combineReducers } from 'redux'

import settings from './settings'
import filter from './filter'
import email from './email'

export default combineReducers({
    settings,
    filter,
    email
})