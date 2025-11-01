'use client'

import ironman from 'assets/ironman.gif'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'

const dampeningFactor = 0.05
const initialPos = { x: 0, y: 0 }
const initialAngle = -45

export default function IronMan() {
  const [angle, setAngle] = useState(initialAngle)
  const [position, setPosition] = useState(initialPos)
  const [scale, setScale] = useState(1)
  const [isMovingLeft, setIsMovingLeft] = useState(false)
  const targetPosition = useRef(initialPos)
  const previousPosition = useRef(initialPos)
  const targetAngle = useRef(initialAngle)

  // Function to normalize angle difference
  const normalizeAngleDiff = (diff: number) => {
    while (diff > 180) diff -= 360
    while (diff < -180) diff += 360
    return diff
  }

  useEffect(() => {
    const controller = new AbortController()

    const animate = () => {
      if (controller.signal.aborted) return
      
      setPosition((current) => {
        const newPosition = {
          x: current.x + (targetPosition.current.x - current.x) * dampeningFactor,
          y: current.y + (targetPosition.current.y - current.y) * dampeningFactor,
        }
        
        // Calculate target angle based on movement direction
        const deltaX = newPosition.x - previousPosition.current.x
        const deltaY = newPosition.y - previousPosition.current.y
        
        if (Math.abs(deltaX) > 0.1 || Math.abs(deltaY) > 0.1) {
          const baseAngle = Math.atan2(deltaY, deltaX) * (180 / Math.PI)
          
          // When moving left, we need to flip the angle horizontally
          targetAngle.current = deltaX < 0 ? -(baseAngle - 180) : baseAngle
          
          const normalizedAngle = ((baseAngle % 360) + 360) % 360
          const isSignificantlyLeft = normalizedAngle > 95 && normalizedAngle < 265
          const isSignificantlyRight = normalizedAngle < 85 || normalizedAngle > 275
          
          if (isSignificantlyLeft) {
            setIsMovingLeft(true)
          } else if (isSignificantlyRight) {
            setIsMovingLeft(false)
          }
        }
        
        const distance = Math.hypot(targetPosition.current.x - current.x, targetPosition.current.y - current.y)
        if (distance < 20) {
          targetAngle.current = -45
        }

        previousPosition.current = newPosition
        return newPosition
      })
      
      // Smooth angle interpolation
      setAngle(currentAngle => {
        const angleDiff = normalizeAngleDiff(targetAngle.current - currentAngle)
        return currentAngle + angleDiff * 0.1
      })
      
      requestAnimationFrame(animate)
    }

    window.addEventListener(
      'mousemove',
      (e: MouseEvent) => {
        targetPosition.current = { x: e.clientX, y: e.clientY }
        
        // Calculate scale based on distance from right and bottom edges
        const windowWidth = window.innerWidth
        const windowHeight = window.innerHeight
        
        const distanceFromRight = windowWidth - e.clientX
        const distanceFromBottom = windowHeight - e.clientY
        
        let scaleX = 1
        let scaleY = 1
        const size = 80 
        
        // Scale down when within size px of right edge
        if (distanceFromRight <= size) {
          scaleX = distanceFromRight / size
        }
        
        // Scale down when within size px of bottom edge
        if (distanceFromBottom <= size) {
          scaleY = distanceFromBottom / size
        }
        
        // Use the minimum scale (closest edge determines size)
        const newScale = Math.min(scaleX, scaleY)
        setScale(Math.max(0, newScale))
      },
      controller,
    )

    animate()

    return () => {
      controller.abort()
    }
  }, [])

  return (
    <Image
      src={ironman}
      alt='Iron Man'
      className='absolute -z-10 h-20 w-20 object-cover'
      style={{ 
        top: position.y, 
        left: position.x,
        transform: `translate(-50%, 30%) scaleX(${isMovingLeft ? -1 : 1}) rotate(${angle + 45}deg) scale(${scale})`,
      }}
    />
  )
}
