'use client'

import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import { stopwatchStore } from './store'
import { StopwatchView } from './StopwatchView'

dayjs.extend(utc)

export default function StopwatchesPage() {
  const state = stopwatchStore((state) => state)

  const addStopwatch = () => {
    state.add()
  }

  return (
    <div className='flex h-screen flex-col items-center justify-center p-4'>
      <div className='glass-effect p-4'>
        <div className='flex justify-between mb-10'>
            <div>Stopwatches</div>
            <button className='cursor-pointer' onClick={addStopwatch}>Add</button>
        </div>
        <div className='grid grid-cols-[auto_1fr_auto_auto_auto] items-center gap-4 '>
            {Array.from(state.list.values()).map((sw) => (
                <StopwatchView key={sw.id} sw={sw} />
            ))}
        </div>
      </div>
    </div>
  )
}
