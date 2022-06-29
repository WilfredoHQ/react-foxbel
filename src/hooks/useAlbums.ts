import { useQuery } from "react-query"
import { readAlbum } from "../services/albums"

export const useReadAlbum = (albumId: number) => {
  return useQuery(["album", albumId], () => readAlbum(albumId))
}
