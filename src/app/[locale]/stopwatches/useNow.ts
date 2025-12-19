import dayjs from 'dayjs'
import { useState, useEffect } from 'react'

export function useNow() {
  const [now, setNow] = useState(dayjs())

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(dayjs())
    }, 500)
    return () => clearInterval(interval)
  }, [])

  return now
}
