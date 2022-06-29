import clsx from "clsx"
import { MoreIcon } from "../../assets/icon"
import { useReadAlbum } from "../../hooks/useAlbums"
import { useReadArtist } from "../../hooks/useArtists"
import { useReadSearchByAlbum } from "../../hooks/useSearches"
import { useAppDispatch } from "../../hooks/useStore"
import { Track } from "../../services/tracks"
import { tracks } from "../../store/musicSlice"
import s from "./Banner.module.css"

const Banner = () => {
  const { data } = useReadSearchByAlbum()

  const firstAlbum = data?.data[0]

  const { data: album } = useReadAlbum(firstAlbum?.album.id || 192713382)
  const { data: artist } = useReadArtist(firstAlbum?.artist.id || 75798)

  const dispatch = useAppDispatch()

  const handleTracks = (trackList: Track[]) => {
    dispatch(tracks(trackList))
  }

  return (
    <section className={s.root}>
      {firstAlbum && album && artist ? (
        <>
          <picture className={s.picture}>
            <img src={firstAlbum.album.cover_medium} alt={firstAlbum.album.title} />
          </picture>
          <div className={s.info}>
            <h3 className={s.title}>
              {firstAlbum.artist.name + " " + firstAlbum.album.title}
            </h3>
            <p>
              Lo mejor de {firstAlbum.artist.name}{" "}
              <span className={s.followers}>{artist.nb_fan} Seguidores</span>
            </p>
            <div className={s.actions}>
              <button
                onClick={() => handleTracks(album.tracks.data)}
                className={clsx(s.action, s.play)}
              >
                Reproducir
              </button>
              <button className={clsx(s.action, s.follow)}>Seguir</button>
              <button className={s.more}>
                <MoreIcon />
              </button>
            </div>
          </div>
        </>
      ) : (
        "Cargando..."
      )}
    </section>
  )
}

export default Banner
