import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootStateType } from '../store'
import { MemeType } from '@/interfaces/meme.interace.ts'

const memes = [
  {
    id: 1,
    name: 'Me going from ✨mysterious✨ to full-blown chaos in 0.2s',
    likes: 12,
    link: 'https://i.pinimg.com/736x/34/e5/dd/34e5ddf86edcc9bc3b4e84df522ca302.jpg',
  },
  {
    id: 2,
    name: 'At Leime, we don’t onboard. We memeboard.',
    likes: 78,
    link: 'https://i.pinimg.com/736x/db/45/4b/db454bf812fda2c5018b06ff266d7ef0.jpg',
  },
  {
    id: 3,
    name: 'My brain after telling me to do the thing, then judging me for doing it',
    likes: 69,
    link: 'https://i.pinimg.com/736x/38/43/f8/3843f8f58b4d7bc571f9ab3a4b399059.jpg',
  },
  {
    id: 4,
    name: 'Choose your fighter: Soft Punch of Destiny',
    likes: 55,
    link: 'https://i.pinimg.com/736x/27/da/d1/27dad10ed06b5f755dde21a4cbab1bba.jpg',
  },
  {
    id: 5,
    name: 'Started a paragraph, ended up diagnosing myself on Google',
    likes: 36,
    link: 'https://i.pinimg.com/736x/c0/25/38/c025385ac6ae41af2ceac08a9824f928.jpg',
  },
  {
    id: 6,
    name: 'Alone but not lonely. Efficient.',
    likes: 90,
    link: 'https://i.pinimg.com/736x/d2/29/7c/d2297c051dd7952ded02f3e1da2cee62.jpg',
  },
  {
    id: 7,
    name: 'How’s life? Me: incoherent gargling noises',
    likes: 93,
    link: 'https://i.pinimg.com/736x/53/65/b2/5365b2e20be6a7dc55a7658f89fb38d7.jpg',
  },
  {
    id: 8,
    name: 'My inner voice: wise.My actual decisions: chaotic neutral.',
    likes: 67,
    link: 'https://i.pinimg.com/736x/5b/cf/30/5bcf30b4bbad619bd8f8f4e9f5d02609.jpg',
  },
  {
    id: 9,
    name: 'Brain: Remember that one thing from 7 years ago? Me: I do now.',
    likes: 84,
    link: 'https://i.pinimg.com/736x/44/7d/35/447d35376004d85e0f3c25cb9aeb9700.jpg',
  },
  {
    id: 10,
    name: 'Lana Del Rey’s next album cover',
    likes: 48,
    link: 'https://i.pinimg.com/736x/bb/b8/32/bbb83255cd26dcd6456f36041e5f5b80.jpg',
  },
]

interface MemesStateInterface {
  byId: Record<string, MemeType>
}

const initialState: MemesStateInterface = {
  byId: memes.reduce(
    (acc, meme) => {
      return {
        ...acc,
        [meme.id]: meme,
      }
    },
    {} as Record<string, MemeType>,
  ),
}

export const memesSlice = createSlice({
  name: 'memes',
  initialState,
  reducers: {
    updateMeme: (state, action: PayloadAction<MemeType>) => {
      state.byId[action.payload.id] = action.payload
    },
  },
})

export const { updateMeme } = memesSlice.actions

export default memesSlice.reducer

export const getMemesById = (state: RootStateType) => state.memes.byId
export const getMemesListIds = (state: RootStateType) => Object.keys(getMemesById(state))
