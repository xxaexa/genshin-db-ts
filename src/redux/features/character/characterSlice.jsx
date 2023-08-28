import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  characters: [],
  isLoading: true,
  name: '',
  star: '',
  vision: '',
  reset: '',
  id: '',
}

export const getCharacter = createAsyncThunk('/character', async (_, thunkAPI) => {
  const { name, star, vision } = thunkAPI.getState().character

  let url = `https://gidb-backend.vercel.app/api/genshin/character?star=${star}&vision=${vision}`

  if (name) {
    url = url + `?star=${name}`
  }

  try {
    const response = await axios.get(url)
    return response.data
  } catch (error) {
    console.log(thunkAPI(error))
  }
})

const characterSlice = createSlice({
  name: 'character',
  initialState,
  reducers: {
    filterByName: (state, action) => {
      state.name = action.payload
    },
    filterByStar: (state, action) => {
      state.star = action.payload
    },
    filterByVision: (state, action) => {
      state.vision = action.payload
    },
    resetFilter: (state, action) => {
      state.reset = ''
      state.star = ''
      state.vision = ''
    },
    getOneCharacter: (state, action) => {
      state.id = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCharacter.pending, (state, action) => {
        state.isLoading = true
      })
      .addCase(getCharacter.fulfilled, (state, { payload }) => {
        state.totalPage = payload.totalPage
        state.page = payload.page
        state.characters = payload.character
        state.isLoading = false
      })
      .addCase(getCharacter.rejected, (state, { payload }) => {})
  },
})

export const { filterByName, filterByStar, filterByVision, resetFilter } = characterSlice.actions

export default characterSlice
