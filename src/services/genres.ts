import axs from "./api"

export interface Genre {
  id: number
  name: string
  picture: string
  picture_small: string
  picture_medium: string
  picture_big: string
  picture_xl: string
  type: string
}

export const readGenre = async (genreId: number) => {
  const { data } = await axs.get<Genre>(`genre/${genreId}`)

  return data
}
