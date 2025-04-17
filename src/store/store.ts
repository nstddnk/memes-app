import { configureStore } from '@reduxjs/toolkit'
import memesReducer from './slices/memesSlice'

export const store = configureStore({
  reducer: {
    memes: memesReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
