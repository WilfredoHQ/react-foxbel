import axs from "./api"
import { Track } from "./tracks"

export interface Search {
  data: Track[]
  total: number
  next: string
}

export const readSearch = async (queryParameter: string) => {
  const { data } = await axs.get<Search>(`search?q=${queryParameter}`)

  return data
}
