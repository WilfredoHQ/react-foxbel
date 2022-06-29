import { MoreIcon, PlayIcon } from "../../assets/icon"
import { useReadAlbum } from "../../hooks/useAlbums"
import { useAppDispatch } from "../../hooks/useStore"
import { Track } from "../../services/tracks"
import { tracks } from "../../store/musicSlice"
import s from "./Album.module.css"

export interface AlbumProps {
  albumId: number
}

const Album = ({ albumId }: AlbumProps) => {
  const { data: album } = useReadAlbum(albumId)
  const dispatch = useAppDispatch()

  const handleTracks = (trackList: Track[]) => {
    dispatch(tracks(trackList))
  }

  return (
    <article>
      {album ? (
        <>
          <picture className={s.picture}>
            <img src={album.cover_medium} alt={album.title} className={s.image} />
            <button
              onClick={() => handleTracks(album?.tracks.data)}
              className={s.action}
            >
              <PlayIcon className={s.playIcon} />
            </button>
            <MoreIcon className={s.moreIcon} />
          </picture>
          <h6 className={s.title}>{album.title}</h6>
          <p>{album.artist.name}</p>
        </>
      ) : (
        "Cargando..."
      )}
    </article>
  )
}

export default Album
