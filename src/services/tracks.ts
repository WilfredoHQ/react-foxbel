import { Album } from "./albums"
import axs from "./api"
import { Artist } from "./artists"

export interface Track {
  id: number
  readable: boolean
  title: string
  title_short: string
  title_version: string
  link: string
  duration: number
  rank: number
  explicit_lyrics: boolean
  explicit_content_lyrics: number
  explicit_content_cover: number
  preview: string
  md5_image: string
  artist: Artist
  album: Album
  type: string
}

export const readTrack = async (trackId: number) => {
  const { data } = await axs.get<Track>(`track/${trackId}`)

  return data
}
