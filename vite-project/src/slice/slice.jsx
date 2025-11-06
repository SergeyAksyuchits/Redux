import { createSlice } from "@reduxjs/toolkit";
const slice = createSlice({
    name: 'controlButton',
    initialState: 1,
    reducers: {
        increment: state => {
            return state + 1
        },
        decrement: state => {
            return state - 1
        }
    }
})

const { increment, decrement } = slice.actions

const controlButton = slice.reducer

export { increment, decrement, controlButton }