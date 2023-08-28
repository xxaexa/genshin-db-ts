import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { ArtifactsState } from './../../../types/index'

const initialState: ArtifactsState = {
  artifacts: [],
  isLoading: true,
  name: '',
  star: '',
  reset: '',
  vision: '',
}

export const getArtifact = createAsyncThunk(
  '/artifact',
  async (_, thunkAPI) => {
    let url = `https://gidb-backend.vercel.app/api/genshin/artifact?star`
    try {
      const response = await axios.get(url)
      return response.data
    } catch (error) {
      console.log(error)
    }
  }
)

const artifactSlice = createSlice({
  name: 'artifact',
  initialState,
  reducers: {
    filterByName: (state, action: PayloadAction<string>) => {
      state.name = action.payload
    },
    filterByStar: (state, action: PayloadAction<string>) => {
      state.star = action.payload
    },
    resetFilter: (state) => {
      state.reset = ''
      state.star = ''
      state.vision = ''
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getArtifact.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getArtifact.fulfilled, (state, { payload }) => {
        state.artifacts = payload.artifact
        state.isLoading = false
      })
      .addCase(getArtifact.rejected, (state, { payload }) => {
        console.log(payload)
      })
  },
})

export const { filterByName, filterByStar, resetFilter } = artifactSlice.actions
export default artifactSlice
