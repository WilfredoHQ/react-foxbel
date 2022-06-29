import { configureStore } from "@reduxjs/toolkit"
import navBarReducer from "./navBarSlice"
import musicReducer from "./musicSlice"

export const store = configureStore({
  reducer: {
    navBar: navBarReducer,
    search: musicReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
