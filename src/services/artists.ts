import axs from "./api"

export interface Artist {
  id: number
  name: string
  link: string
  share: string
  picture: string
  picture_small: string
  picture_medium: string
  picture_big: string
  picture_xl: string
  nb_album: number
  nb_fan: number
  radio: boolean
  tracklist: string
  type: string
}

export const readArtist = async (artistId: number) => {
  const { data } = await axs.get<Artist>(`artist/${artistId}`)

  return data
}
