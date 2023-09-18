import { createReducer } from '@reduxjs/toolkit';
import * as actions from './conunter.actions';

const initialState = { count: 0};

export const oldCounterReducer = createReducer(
    initialState,
    (builder) => {
        builder.addCase(actions.increment, (state, {payload}) => {state.count+=payload}),
        builder.addCase(actions.decrement, (state, {payload}) => {state.count-=payload}),
        builder.addCase(actions.clear, (state) => {state.count=0})
    }
)