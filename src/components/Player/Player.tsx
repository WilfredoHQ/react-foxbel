import clsx from "clsx"
import { ChangeEvent, useEffect, useRef, useState } from "react"
import { useQueryClient } from "react-query"
import { NextIcon, PauseIcon, PlayIcon, PrevIcon, SoundIcon } from "../../assets/icon"
import { useAppSelector } from "../../hooks/useStore"
import { Album } from "../../services/albums"
import Slider from "../Slider"
import s from "./Player.module.css"

const Player = () => {
  const [volume, setVolume] = useState(50)
  const [isShowVolumeSlider, setIsShowVolumeSlider] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [trackIndex, setTrackIndex] = useState(0)
  const tracks = useAppSelector(state => state.search.tracks)
  const queryClient = useQueryClient()

  const audio = useRef<HTMLAudioElement>(null)

  const handlePlay = () => {
    if (audio.current) {
      audio.current.play()
      setIsPlaying(true)
    }
  }

  const handlePause = () => {
    if (audio.current) {
      audio.current.pause()
      setIsPlaying(false)
    }
  }

  const handlePrev = () => {
    if (trackIndex > 0) {
      setTrackIndex(prev => prev - 1)
    } else {
      handlePause()
    }
  }

  const handleNext = () => {
    if (trackIndex < tracks.length - 1) {
      setTrackIndex(prev => prev + 1)
    } else {
      handlePause()
    }
  }

  const handleVolume = (e: ChangeEvent<HTMLInputElement>) => {
    if (audio.current) {
      audio.current.volume = parseInt(e.target.value) / 100
      setVolume(parseInt(e.target.value))
    }
  }

  useEffect(() => {
    setTrackIndex(0)
    if (tracks.length > 0) {
      handlePlay()
    }
  }, [tracks])

  if (tracks.length === 0) {
    return null
  }

  return (
    <footer className={s.root}>
      <picture className={s.info}>
        <img
          src={
            queryClient.getQueryData<Album>(["album", tracks[trackIndex]?.album.id])
              ?.cover_small
          }
          alt={tracks[trackIndex]?.album.title}
          className={s.image}
        />
        <figcaption className={s.description}>
          <span className={s.name}>{tracks[trackIndex]?.title}</span>
          <br />
          {tracks[trackIndex]?.artist.name + " - " + tracks[trackIndex]?.album.title}
        </figcaption>
      </picture>
      <div className={clsx(s.controls, !isShowVolumeSlider && s.isShow)}>
        <button onClick={handlePrev} className={s.control}>
          <PrevIcon className={s.controlIcon} />
        </button>
        <button onClick={isPlaying ? handlePause : handlePlay} className={s.control}>
          {!isPlaying ? (
            <PlayIcon className={s.controlIcon} />
          ) : (
            <PauseIcon className={s.controlIcon} />
          )}
        </button>
        <button onClick={handleNext} className={s.control}>
          <NextIcon className={s.controlIcon} />
        </button>
      </div>
      <div className={s.volume}>
        <span className={clsx(s.volumeSlider, isShowVolumeSlider && s.isShow)}>
          <Slider min={0} max={100} value={volume} onChange={handleVolume} />
        </span>
        <button
          onClick={() => {
            setIsShowVolumeSlider(prev => !prev)
          }}
        >
          <SoundIcon />
        </button>
        <span>
          <audio
            onCanPlay={handlePlay}
            onEnded={handleNext}
            ref={audio}
            src={tracks[trackIndex]?.preview || ""}
          ></audio>
        </span>
      </div>
    </footer>
  )
}

export default Player
