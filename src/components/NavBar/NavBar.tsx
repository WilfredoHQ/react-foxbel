import clsx from "clsx"
import { MouseEvent } from "react"
import { MenuIcon } from "../../assets/icon"
import FoxbelMusic from "../../assets/image/foxbel-music.png"
import { useAppDispatch, useAppSelector } from "../../hooks/useStore"
import { close } from "../../store/navBarSlice"
import s from "./NavBar.module.css"

const NavBar = () => {
  const isOpenNavBar = useAppSelector(state => state.navBar.isOpen)
  const dispatch = useAppDispatch()

  const handleCloseNavBar = (e: MouseEvent) => {
    if (e.target === e.currentTarget) {
      dispatch(close())
    }
  }

  return (
    <div
      className={clsx(s.root, isOpenNavBar && s.isOpen)}
      onClick={e => handleCloseNavBar(e)}
    >
      <nav className={s.nav}>
        <picture className={s.logo}>
          <img src={FoxbelMusic} alt="Foxbel" className={s.image} />
          <button onClick={() => dispatch(close())} className={s.menuButton}>
            <MenuIcon />
          </button>
        </picture>
        <p className={s.menuTitle}>Mi Librería</p>
        <ul className={s.menuList}>
          <li>
            <a href="" className={clsx(s.menuLink, s.isActive)}>
              Recientes
            </a>
          </li>
          <li>
            <a href="" className={clsx(s.menuLink)}>
              Artistas
            </a>
          </li>
          <li>
            <a href="" className={clsx(s.menuLink)}>
              Álbums
            </a>
          </li>
          <li>
            <a href="" className={clsx(s.menuLink)}>
              Canciones
            </a>
          </li>
          <li>
            <a href="" className={clsx(s.menuLink)}>
              Estaciones
            </a>
          </li>
        </ul>
        <p className={s.menuTitle}>Playlist</p>
        <ul className={s.menuList}>
          <li>
            <a href="" className={clsx(s.menuLink)}>
              Meta
            </a>
          </li>
          <li>
            <a href="" className={clsx(s.menuLink)}>
              Para bailar
            </a>
          </li>
          <li>
            <a href="" className={clsx(s.menuLink)}>
              Rock 90s
            </a>
          </li>
          <li>
            <a href="" className={clsx(s.menuLink)}>
              Baladas
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar
