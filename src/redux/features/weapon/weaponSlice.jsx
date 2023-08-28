import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  weapon: [],
  isLoading: true,
  name: '',
  star: '',
  reset: '',
}

export const getWeapon = createAsyncThunk('/weapon', async (_, thunkAPI) => {
  const { name, star } = thunkAPI.getState().weapon

  let url = `https://gidb-backend.vercel.app/api/genshin/weapon?star=${star}`

  if (name) {
    url = url + `&name=${name}`
  }
  try {
    const response = await axios.get(url)
    return response.data
  } catch (error) {
    console.log(thunkAPI(error))
  }
})

const weaponSlice = createSlice({
  name: 'weapon',
  initialState,
  reducers: {
    filterByName: (state, action) => {
      state.name = action.payload
    },
    filterByStar: (state, action) => {
      state.star = action.payload
    },
    resetFilter: (state, action) => {
      state.reset = ''
      state.star = ''
      state.vision = ''
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getWeapon.pending, (state, action) => {
        state.isLoading = true
      })
      .addCase(getWeapon.fulfilled, (state, { payload }) => {
        state.weapon = payload.weapon
        state.isLoading = false
      })
      .addCase(getWeapon.rejected, (state, { payload }) => {
        console.log(error)
      })
  },
})

export const { filterByName, filterByStar, resetFilter } = weaponSlice.actions

export default weaponSlice
