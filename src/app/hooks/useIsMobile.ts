import { useEffect, useState } from 'react'

export const useWindowSize = () => {
  const [size, setSize] = useState(0)

  useEffect(() => {
    const controller = new AbortController()
    setSize(window.innerWidth)
    window.addEventListener(
      'resize',
      () => {
        setSize(window.innerWidth)
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
