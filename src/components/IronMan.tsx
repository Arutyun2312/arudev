'use client'

import ironman from 'assets/ironman.gif'
import Image from 'next/image'
import { useEffect, useRef } from 'react'

const dampeningFactor = 0.05
const size = 80

export default function IronMan() {
  const ref = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const controller = new AbortController()

    const normalizeAngleDiff = (diff: number) => {
      while (diff > 180) diff -= 360
      while (diff < -180) diff += 360
      return diff
    }
    const updateView = (x: number, y: number, angle: number, isMovingLeft: boolean, scale: number) => {
      if (!ref.current) return
      ref.current.style.left = `${x}px`
      ref.current.style.top = `${y}px`
      ref.current.style.transform = `
        scaleX(${isMovingLeft ? -1 : 1}) 
        rotate(${angle + 45}deg) 
        scale(${scale})
      `
    }

    let scale = 1
    let isMovingLeft = false
    let position = { x: 0, y: 0 }
    let targetPosition = position
    let angle = -45
    let targetAngle = angle

    const animate = () => {
      if (controller.signal.aborted) return

      const current = position
      const newPosition = {
        x: current.x + (targetPosition.x - current.x) * dampeningFactor,
        y: current.y + (targetPosition.y - current.y) * dampeningFactor,
      }

      // Calculate target angle based on movement direction
      const deltaX = newPosition.x - position.x
      const deltaY = newPosition.y - position.y

      if (Math.abs(deltaX) > 0.1 || Math.abs(deltaY) > 0.1) {
        const baseAngle = Math.atan2(deltaY, deltaX) * (180 / Math.PI)

        // When moving left, we need to flip the angle horizontally
        targetAngle = deltaX < 0 ? -(baseAngle - 180) : baseAngle

        const normalizedAngle = ((baseAngle % 360) + 360) % 360
        const isSignificantlyLeft = normalizedAngle > 95 && normalizedAngle < 265
        const isSignificantlyRight = normalizedAngle < 85 || normalizedAngle > 275

        if (isSignificantlyLeft) {
          isMovingLeft = true
        } else if (isSignificantlyRight) {
          isMovingLeft = false
        }
      }

      const distance = Math.hypot(targetPosition.x - current.x, targetPosition.y - current.y)
      if (distance < 20) {
        targetAngle = -45
      }

      position = newPosition

      angle += normalizeAngleDiff(targetAngle - angle) * 0.1

      {
        const distanceFromRight = window.innerWidth - position.x
        const distanceFromBottom = window.innerHeight - position.y

        const scaleX = distanceFromRight / size
        const scaleY = distanceFromBottom / size - 1
        scale = Math.max(0, Math.min(scaleX, scaleY, 1))
      }

      updateView(position.x, position.y, angle, isMovingLeft, scale)
      requestAnimationFrame(animate)
    }

    window.addEventListener(
      'mousemove',
      (e: MouseEvent) => (targetPosition = { x: e.clientX, y: e.clientY }),
      controller,
    )

    animate()

    return () => {
      controller.abort()
    }
  }, [])

  return (
    <Image
      ref={ref}
      src={ironman}
      alt='Iron Man'
      className='absolute -z-10 h-20 w-20 -translate-x-1/2 translate-y-1/3 object-cover'
    />
  )
}
