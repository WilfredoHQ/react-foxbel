import { useForm } from "react-hook-form"
import { SearchIcon } from "../../assets/icon"
import { useAppDispatch } from "../../hooks/useStore"
import { search } from "../../store/musicSlice"
import s from "./Search.module.css"

interface FormData {
  search: string
}

const Search = () => {
  const { register, handleSubmit } = useForm<FormData>()
  const dispatch = useAppDispatch()

  const onSubmit = handleSubmit(data => {
    dispatch(search(data.search))
  })

  return (
    <form onSubmit={onSubmit} className={s.root}>
      <input
        type="text"
        placeholder="Buscar"
        className={s.search}
        {...register("search")}
      />
      <button type="submit">
        <SearchIcon className={s.searchIcon} />
      </button>
    </form>
  )
}

export default Search
