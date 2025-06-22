import { css } from '@/util'
import { useEffect, useState } from 'react'

const speed = 50
const duration = 800
const steps = duration / speed

type Props = {
  targetValue: number
  label: string
}
export default function NumberView({ targetValue, label }: Props) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    let stop = false
    let step = 0
    const run = () => {
      if (stop || steps < step) return
      setValue((targetValue / steps) * step++)
      setTimeout(run, speed)
    }
    run()

    return () => {
      stop = true
    }
  }, [targetValue])

  return (
    <div className='flex justify-around'>
      <div
        className={css(
          'flex items-center justify-between gap-4',
          'rounded-2xl border border-gray-400 bg-white p-8',
          'transition hover:scale-110 hover:shadow-lg',
        )}
        style={{ textWrap: 'stable' }}
      >
        <div className='h1 font !text-7xl font-bold'>{Math.round(value)}</div>
        <div className='h3 w-[150px] break-words'>{label}</div>
      </div>
    </div>
  )
}
