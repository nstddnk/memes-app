import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootStateType } from '../store'
import { MemeType } from '@/interfaces/meme.interace.ts'

const initialMemes = [
  {
    id: 'c09f35d47b6b4f5a',
    name: 'You miss 100% of the breakdowns you don’t have.',
    likes: 12,
    link: 'https://i.pinimg.com/736x/34/e5/dd/34e5ddf86edcc9bc3b4e84df522ca302.jpg',
  },
  {
    id: 'bf2b5d4e003f4e39',
    name: 'At Leime, we don’t onboard. We memeboard.',
    likes: 78,
    link: 'https://i.pinimg.com/736x/db/45/4b/db454bf812fda2c5018b06ff266d7ef0.jpg',
  },
  {
    id: '611e59cec8544046',
    name: 'My brain after telling me to do the thing, then judging me for doing it',
    likes: 69,
    link: 'https://i.pinimg.com/736x/38/43/f8/3843f8f58b4d7bc571f9ab3a4b399059.jpg',
  },
  {
    id: '289a283a681447ce',
    name: 'Choose your fighter: Soft Punch of Destiny',
    likes: 55,
    link: 'https://i.pinimg.com/736x/27/da/d1/27dad10ed06b5f755dde21a4cbab1bba.jpg',
  },
  {
    id: '92eeb22046134a71',
    name: "Tech support said 'try petting it gently",
    likes: 36,
    link: 'https://assets.techrepublic.com/uploads/2017/03/call-tech-support-my-mouse-is-dead-funny-technology-meme-image.jpg',
  },
  {
    id: 'f8d2c421639b4c9d',
    name: 'Promoted to unpaid manager',
    likes: 90,
    link: 'https://i.pinimg.com/736x/67/33/ac/6733acc182b3ce401801ac5d4df1dad5.jpg',
  },
  {
    id: 'b60dee963caf4314',
    name: 'Mentally I’m in a PDF I can’t close.',
    likes: 93,
    link: 'https://i.pinimg.com/736x/e6/92/66/e69266494e55415d649c51b6675ced03.jpg',
  },
  {
    id: 'a7bf4a57b60a4531',
    name: 'My inner voice: wise.My actual decisions: chaotic neutral.',
    likes: 67,
    link: 'https://i.pinimg.com/736x/5b/cf/30/5bcf30b4bbad619bd8f8f4e9f5d02609.jpg',
  },
  {
    id: 'b7b3cb886cfd4cac',
    name: 'The serotonin enforcer',
    likes: 84,
    link: 'https://i.pinimg.com/736x/9a/77/ff/9a77ff9675687e48c1353bb467a2923e.jpg',
  },
  {
    id: 'fa99280a3cd4459c',
    name: 'Speedrunning the workday with no nutrients',
    likes: 48,
    link: 'https://i.pinimg.com/736x/ef/b8/5f/efb85f37e5eab745cebb7032acbc9bbc.jpg',
  },
]

const LOCAL_STORAGE_KEY = 'memes'

const getMemesFromLocalStorage = (): MemeType[] | null => {
  try {
    const storedMemes = localStorage.getItem(LOCAL_STORAGE_KEY)

    return storedMemes ? (JSON.parse(storedMemes) as MemeType[]) : null
  } catch {
    return null
  }
}

const setMemesToLocalStorage = (memes: MemeType[]): void => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(memes))
}

const storedMemes = getMemesFromLocalStorage()
const memes = storedMemes || initialMemes

if (!storedMemes) {
  setMemesToLocalStorage(initialMemes)
}

const initialState = {
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

      const memes = Object.values(state.byId)
      setMemesToLocalStorage(memes)
    },
  },
})

export const { updateMeme } = memesSlice.actions

export default memesSlice.reducer

export const getMemesById = (state: RootStateType) => state.memes.byId
