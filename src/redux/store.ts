import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import artifactSlice from './features/artifact/artifactSlice'

export const store = configureStore({
  reducer: {
    artifact: artifactSlice.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export const useAppDispatch: () => typeof store.dispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
