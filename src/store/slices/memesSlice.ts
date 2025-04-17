import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

const initialState = {
  byId: {},
}

export const memesSlice = createSlice({
  name: 'memes',
  initialState,
  reducers: {
    updateMeme: (state, action: PayloadAction<any>) => {
      state.byId[action.payload.id] = action.payload
    },
  },
})

export const { updateMeme } = memesSlice.actions

export default memesSlice.reducer

// export const getTasksById = (state: RootState) => state.tasks.byId
// export const getTaskListIds = (state: RootState) => Object.keys(getTasksById(state))
