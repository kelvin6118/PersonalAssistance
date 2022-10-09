import { configureStore } from '@reduxjs/toolkit'
import paReducer from './createFormSlice'
// ...

export const store = configureStore({
  reducer: {
    pa: paReducer
  },
})
