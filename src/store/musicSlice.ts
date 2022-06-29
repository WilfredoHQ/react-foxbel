import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Track } from "../services/tracks"

export interface MusicState {
  search: string
  tracks: Track[]
}

const initialState: MusicState = {
  search: "21",
  tracks: [],
}

export const musicSlice = createSlice({
  name: "music",
  initialState,
  reducers: {
    search: (state, action: PayloadAction<string>) => {
      state.search = action.payload
    },
    tracks: (state, action: PayloadAction<Track[]>) => {
      state.tracks = action.payload
    },
  },
})

export const { search, tracks } = musicSlice.actions

export default musicSlice.reducer
