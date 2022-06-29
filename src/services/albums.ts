import axs from "./api"
import { Artist } from "./artists"
import { Genre } from "./genres"
import { Track } from "./tracks"

export interface Album {
  id: number
  title: string
  upc: string
  link: string
  share: string
  cover: string
  cover_small: string
  cover_medium: string
  cover_big: string
  cover_xl: string
  md5_image: string
  genre_id: number
  genres: { data: Genre[] }
  label: string
  nb_tracks: number
  duration: number
  fans: number
  release_date: string
  record_type: string
  available: boolean
  tracklist: string
  explicit_lyrics: boolean
  explicit_content_lyrics: number
  explicit_content_cover: number
  contributors: Artist[]
  artist: Artist
  type: string
  tracks: { data: Track[] }
}

export const readAlbum = async (albumId: number) => {
  const { data } = await axs.get<Album>(`album/${albumId}`)

  return data
}
