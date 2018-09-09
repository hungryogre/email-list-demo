export const EDIT_FILTER = 'EDIT_FILTER'
export const TOGGLE_REGEX = 'TOGGLE_REGEX'
export const CLEAR_FILTER = 'CLEAR_FILTER'

export function editFilter(text) {
    return { type: EDIT_FILTER, payload: text }
}

export function toggleRegex() {
    return { type: TOGGLE_REGEX }
}

export function clearFilter() {
    return { type: CLEAR_FILTER }
}