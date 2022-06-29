import { CSSProperties, forwardRef, InputHTMLAttributes, Ref } from "react"
import s from "./Slider.module.css"

interface SlideProps extends InputHTMLAttributes<HTMLInputElement> {
  min: number
  max: number
  value: number
}

const Slider = (
  { min, max, value, ...rest }: SlideProps,
  ref: Ref<HTMLInputElement>
) => {
  return (
    <div
      className={s.track}
      style={
        {
          "--progress-width": `${((value - min) / (max - min)) * 100}%`,
        } as CSSProperties
      }
    >
      <div className={s.progress}>
        <div className={s.thumb}></div>
      </div>
      <input
        type="range"
        value={value}
        className={s.input}
        min={min}
        max={max}
        ref={ref}
        {...rest}
      />
    </div>
  )
}

export default forwardRef(Slider)
