import filter from './filter'
import { EDIT_FILTER, TOGGLE_REGEX, CLEAR_FILTER } from '../actions/filter'

test('Test initial state', () => {
    let state
    state = filter(undefined, {})
    expect(state).toEqual({ filter: '', regex: false })
})

test('EDIT_FILTER should only change the filter text', () => {
    let state
    state = filter({ filter: '', regex: false }, { type: EDIT_FILTER, payload: 'jacob' })
    expect(state).toEqual({ filter: 'jacob', regex: false })
})

test('TOGGLE_REGEX should change regex from false to true', () => {
    let state
    state = filter({ filter: 'jacob', regex: false }, { type: TOGGLE_REGEX })
    expect(state).toEqual({ filter: 'jacob', regex: true })
})

test('TOGGLE_REGEX should change regex from true to false', () => {
    let state
    state = filter({ filter: 'jacob', regex: true }, { type: TOGGLE_REGEX })
    expect(state).toEqual({ filter: 'jacob', regex: false })
})

test('CLEAR_FILTER should return initial state', () => {
    let state
    state = filter({ filter: 'jacob', regex: true }, { type: CLEAR_FILTER })
    expect(state).toEqual({ filter: '', regex: false })
})
