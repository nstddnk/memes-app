import { configureStore } from '@reduxjs/toolkit'
import memesReducer from './slices/memesSlice'

export const store = configureStore({
  reducer: {
    memes: memesReducer,
  },
})

export type RootStateType = ReturnType<typeof store.getState>
export type AppDispatchType = typeof store.dispatch
