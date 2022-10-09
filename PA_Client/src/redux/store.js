
import { configureStore } from '@reduxjs/toolkit'
import paReducer from './paSlice'

export const store = configureStore({
  reducer: {
    pa: paReducer
  }
})

