import { useQuery } from "react-query"
import { readSearch } from "../services/searches"
import { useAppSelector } from "./useStore"

export const useReadSearch = (queryParameter: string) => {
  return useQuery(["searches", queryParameter], () => readSearch(queryParameter))
}

export const useReadSearchByAlbum = () => {
  const search = useAppSelector(state => state.search.search)
  return useQuery(["searches", search], () => readSearch(`album:"${search}"`))
}
