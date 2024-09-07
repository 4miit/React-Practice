import { configureStore } from '@reduxjs/toolkit'

import counterRd from './Counter/CounterSlice'

// Set up the Redux store with an empty reducer (you can add reducers here later)
const store = configureStore({
  reducer: {
    counterrrr : counterRd
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
