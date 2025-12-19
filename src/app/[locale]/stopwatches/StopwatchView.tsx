'use client'

import dayjs from 'dayjs'
import { FC } from 'react'
import { Stopwatch, stopwatchStore } from './store'
import { useNow } from './useNow'
import { css } from '@/util'

export const StopwatchView: FC<{ sw: Stopwatch }> = ({ sw }) => {
  const state = stopwatchStore((state) => state)
  const now = useNow()
  const paused = state.isPaused(sw.id)

  const duration = sw.stops
    .map((s) => dayjs(s).millisecond(0))
    .reduce((acc, curr, i, arr) => {
      if (i % 2 === 0) {
        const end = arr[i + 1] ?? now
        return acc + end.diff(curr, 'millisecond')
      }
      return acc
    }, 0)
  const formattedDuration = dayjs.utc(duration).format('HH:mm:ss')

  const onRemove = () => {
    state.remove(sw.id)
  }

  const onTimeClick = () => {
    const hours = duration / (1000 * 60 * 60)
    const roundedHours = Math.round(hours * 100) / 100
    navigator.clipboard.writeText(roundedHours.toString())
  }

  return (
    <>
      <div className={css('h-4 w-4 rounded-full', paused ? 'bg-gray-400' : 'bg-green-400')} />
      <input maxLength={32} value={sw.label} onChange={(e) => state.update(sw.id, e.target.value)} />
      <div className='w-24 cursor-pointer' onClick={onTimeClick}>
        {formattedDuration}
      </div>
      <button className='cursor-pointer' onClick={() => state.togglePause(sw.id)}>
        {paused ? 'Start' : 'Pause'}
      </button>
      <button className='h-8 w-8 cursor-pointer rounded-full border border-red-400 text-red-400' onClick={onRemove}>
        X
      </button>
    </>
  )
}
