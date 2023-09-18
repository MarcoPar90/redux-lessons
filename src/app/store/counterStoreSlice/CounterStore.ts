import { createSlice } from '@reduxjs/toolkit';
import { RootReducer } from '..';

const initialState = {
    count: 0
}

const reducerCounter =  createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {state.count += 1},
        decrement: (state) => {state.count -= 1},
        clear: (state) => {state.count=0},
        incrementByAmount: (state, {payload}) => {state.count += payload}
    }
    
});

export const {increment, decrement, clear, incrementByAmount} = reducerCounter.actions;
export default reducerCounter.reducer;

export const selectCounter = (state: RootReducer) => state.counter