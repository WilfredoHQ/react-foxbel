import { useQuery } from "react-query"
import { readArtist } from "../services/artists"

export const useReadArtist = (artistId: number) => {
  return useQuery(["artist", artistId], () => readArtist(artistId))
}
