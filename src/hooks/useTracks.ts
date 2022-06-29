import { useQuery } from "react-query"
import { readTrack } from "../services/tracks"

export const useReadTrack = (trackId: number) => {
  return useQuery(["track", trackId], () => readTrack(trackId))
}
