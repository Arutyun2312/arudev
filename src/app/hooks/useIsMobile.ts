import { useEffect, useState } from 'react'

export const useWindowSize = () => {
  const [size, setSize] = useState(innerWidth)

  useEffect(() => {
    const controller = new AbortController()
    window.addEventListener(
      'resize',
      () => {
        setSize(innerWidth)
      },
      controller,
    )
    return () => {
      controller.abort()
    }
  }, [])

  return size
}
export const useIsMobile = () => useWindowSize() < 768
