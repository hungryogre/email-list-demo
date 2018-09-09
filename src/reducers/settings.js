import { createReducer } from './createReducer'

import { EDIT_USERNAME, EDIT_PASSWORD, EDIT_HOSTNAME } from '../actions/settings'

const initialState = {
    userName: '',
    password: '',
    server: 'localhost',
    options: { encrypt: false }
}

const handlers = {
    [EDIT_USERNAME]: (state, action) => { userName: action.payload },
    [EDIT_PASSWORD]: (state, action) => { password: action.payload },
    [EDIT_HOSTNAME]: (state, action) => { seerver: action.payload }
}

export default createReducer(initialState, handlers)