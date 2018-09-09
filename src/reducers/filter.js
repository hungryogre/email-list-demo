import { createReducer } from './createReducer'

import { EDIT_FILTER, TOGGLE_REGEX, CLEAR_FILTER } from '../actions/filter'

const initialState = {
    text: '',
    regex: false
}

const handlers = {
    [EDIT_FILTER]: (state, action) => { return { text: action.payload } },
    [TOGGLE_REGEX]: (state, action) => { return { regex: !state.regex } },
    [CLEAR_FILTER]: (state, action) => initialState,
}

export default createReducer(initialState, handlers)
