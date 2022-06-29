import { Outlet } from "react-router-dom"
import NavBar from "../../NavBar"
import Player from "../../Player"
import s from "./Layout.module.css"

const Layout = () => {
  return (
    <div className={s.root}>
      <NavBar />
      <main className={s.main}>
        <Outlet />
      </main>
      <Player />
    </div>
  )
}

export default Layout
