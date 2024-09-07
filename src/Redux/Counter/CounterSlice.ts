import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Define the state type
interface CounterState {
  value: number;
}

// Initial state
const initialState: CounterState = {
  value: 0
}

// Create the slice with reducers, adding type annotations
export const counterSlice = createSlice({
  name: 'counterrrr',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    multiply: (state) => {
      state.value *= 2
    },
    divide: (state) => {
      state.value /= 2
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { increment, decrement,multiply,divide, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer
