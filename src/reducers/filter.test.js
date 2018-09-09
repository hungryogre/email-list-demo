import filter from './filter'
import { EDIT_FILTER, TOGGLE_REGEX, CLEAR_FILTER } from '../actions/filter'

test('Test initial state', () => {
    let state
    state = filter(undefined, {})
    expect(state).toEqual({ text: '', regex: false })
})

test('EDIT_FILTER should only change the filter text', () => {
    let state
    state = filter({ text: '', regex: false }, { type: EDIT_FILTER, payload: 'jacob' })
    expect(state).toEqual({ text: 'jacob', regex: false })
})

test('TOGGLE_REGEX should change regex from false to true', () => {
    let state
    state = filter({ text: 'jacob', regex: false }, { type: TOGGLE_REGEX })
    expect(state).toEqual({ text: 'jacob', regex: true })
})

test('TOGGLE_REGEX should change regex from true to false', () => {
    let state
    state = filter({ text: 'jacob', regex: true }, { type: TOGGLE_REGEX })
    expect(state).toEqual({ text: 'jacob', regex: false })
})

test('CLEAR_FILTER should return initial state', () => {
    let state
    state = filter({ text: 'jacob', regex: true }, { type: CLEAR_FILTER })
    expect(state).toEqual({ text: '', regex: false })
})
