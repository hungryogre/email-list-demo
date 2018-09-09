import { createReducer } from './createReducer'

import { EDIT_FILTER, TOGGLE_REGEX, CLEAR_FILTER } from '../actions/filter'

const initialState = {
    filter: '',
    regex: false
}

const handlers = {
    [EDIT_FILTER]: (state, action) => { return { filter: action.payload } },
    [TOGGLE_REGEX]: (state, action) => { return { regex: !state.regex } },
    [CLEAR_FILTER]: (state, action) => initialState,
}

export default createReducer(initialState, handlers)
