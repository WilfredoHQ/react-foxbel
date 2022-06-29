import { useReadSearchByAlbum } from "../../hooks/useSearches"
import Album from "../Album"
import s from "./Results.module.css"

const Results = () => {
  const { data } = useReadSearchByAlbum()

  return (
    <section>
      {data ? (
        <>
          <h6 className={s.title}>Resultados</h6>
          <div className={s.container}>
            {data.data.map((track, index) => (
              <Album key={index} albumId={track.album.id} />
            ))}
          </div>
        </>
      ) : (
        "Cargando..."
      )}
    </section>
  )
}

export default Results
