import { useQuery } from "react-query"
import { readGenre } from "../services/genres"

export const useReadGenre = (genreId: number) => {
  return useQuery(["genre", genreId], () => readGenre(genreId))
}
