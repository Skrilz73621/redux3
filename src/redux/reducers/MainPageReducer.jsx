import React, { act } from 'react'
import { types } from '../types'

const initialState = {
    id: 2322,
    name: '',
    age: 45654,
}

export default function MainPageReducer(state = initialState, action) {
    switch (action.type) {
        case types.VALUE:
            return {...state, name: action.payload }
        case types.SUCCESS:
            return {...state, id:action.payload.id, name: action.payload.name, age: action.payload.age}
        default: return state
    }
}
