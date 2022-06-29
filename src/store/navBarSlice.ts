import { createSlice } from "@reduxjs/toolkit"

export interface NavBarState {
  isOpen: boolean
}

const initialState: NavBarState = {
  isOpen: false,
}

export const navBarSlice = createSlice({
  name: "navBar",
  initialState,
  reducers: {
    open: state => {
      state.isOpen = true
    },
    close: state => {
      state.isOpen = false
    },
  },
})

export const { open, close } = navBarSlice.actions

export default navBarSlice.reducer
