import clsx from "clsx"
import { MenuIcon } from "../../assets/icon"
import Banner from "../../components/Banner"
import Results from "../../components/Results"
import Search from "../../components/Search"
import { useAppDispatch } from "../../hooks/useStore"
import { open } from "../../store/navBarSlice"
import s from "./Home.module.css"

const Home = () => {
  const dispatch = useAppDispatch()

  return (
    <div>
      <section className={s.searchSection}>
        <button onClick={() => dispatch(open())} className={clsx(s.menuIcon)}>
          <MenuIcon />
        </button>
        <Search />
      </section>
      <Banner />
      <Results />
    </div>
  )
}

export default Home
