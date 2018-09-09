import { createReducer } from './createReducer'

const initialState = {
    list: [
        { id: 1, address: 'john@standard.com' },
        { id: 2, address: 'jacob@jenkleheimerschmidt.com' },
        { id: 3, address: 'bobby@devnull.com' },
        { id: 4, address: 'whom@ever.com' },
        { id: 5, address: 'ignoreme@silentasthegrave.org' },
    ]
}

const handlers = {

}

export default createReducer(initialState, handlers)