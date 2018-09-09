import settings from './settings'

test('Test initial state', () => {
    let state
    state = settings(undefined, {})
    expect(state).toEqual({ userName: '', password: '', server: 'localhost', options: { encrypt: false } })
})

test('EDIT_USERNAME should change just the userName', () => {
    let state
    state = settings({ userName: '', password: '', server: 'localhost', options: { encrypt: false } }, { type: 'EDIT_USERNAME', payload: 'john' })
    expect(state).toEqual({ userName: 'john', password: '', server: 'localhost', options: { encrypt: false } })
})

test('EDIT_PASSWORD should change just the password', () => {
    let state
    state = settings({ userName: 'john', password: '', server: 'localhost', options: { encrypt: false } }, { type: 'EDIT_PASSWORD', payload: 'secretPassword' })
    expect(state).toEqual({ userName: 'john', password: 'secretPassword', server: 'localhost', options: { encrypt: false } })
})

test('EDIT_HOSTNAME should change just the hostname', () => {
    let state
    state = settings({ userName: 'john', password: 'secretPassword', server: 'localhost', options: { encrypt: false } }, { type: 'EDIT_HOSTNAME', payload: 'my.sqlserver.com' })
    expect(state).toEqual({ userName: 'john', password: 'secretPassword', server: 'my.sqlserver.com', options: { encrypt: false } })
})

test('TOGGLE_ENCRYPT should change option from false to true', () => {
    let state
    state = settings({ userName: 'john', password: 'secretPassword', server: 'my.sqlserver.com', options: { encrypt: false } }, { type: 'TOGGLE_ENCRYPT' })
    expect(state).toEqual({ userName: 'john', password: 'secretPassword', server: 'my.sqlserver.com', options: { encrypt: true } })
})

test('TOGGLE_ENCRYPT should change option from true to false', () => {
    let state
    state = settings({ userName: 'john', password: 'secretPassword', server: 'my.sqlserver.com', options: { encrypt: true } }, { type: 'TOGGLE_ENCRYPT' })
    expect(state).toEqual({ userName: 'john', password: 'secretPassword', server: 'my.sqlserver.com', options: { encrypt: false } })
})