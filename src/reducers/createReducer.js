//Returns a reducer function (state, action) => {state}
//that returns the next state based on the action.type
export function createReducer(initialState, handlers) {
    return (state = initialState, action) => {
        const handler = handlers[action.type]
        if (!handler)
            return state
        return { ...state, ...handler(state, action) }
    }
}