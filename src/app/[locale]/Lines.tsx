'use client'

import { animate, motion, Transition, useMotionTemplate, useMotionValue, useTransform } from 'framer-motion'
import { Fragment, use, useEffect } from 'react'

const transition = { duration: 4, repeat: Infinity, ease: 'linear' } satisfies Transition

type Fruit = { title: string; subtitle: string }
type Props = { branches?: Fruit[] }
export default function Lines({
  branches = [
    { title: 'Fruit 1', subtitle: 'Subtitle 1' },
    { title: 'Fruit 2', subtitle: 'Subtitle 2' },
    { title: 'Fruit 3', subtitle: 'Subtitle 3' },
    { title: 'Fruit 4', subtitle: 'Subtitle 4' },
    { title: 'Fruit 5', subtitle: 'Subtitle 5' },
  ],
}: Props) {
  const width = 500
  const height = 650
  const rootCount = 10
  const rootHeight = 200
  const centerX = width / 2
  const trunkWidth = 10 // Width of the trunk area
  const branchCount = branches.length

  const postHeight = 60
  const postWidth = 130

  const minHeight = 50
  const heightStep = 80
  const branchWidth = 200

  const tipH = 30

  const generateCustomBranch = (startX, startY, endX, endY) => {
    startY = height - startY
    endY = height - endY
    const deltaX = endX - startX
    const deltaY = endY - startY

    const controlX1 = startX + deltaX * 0.1
    const controlY1 = startY + deltaY * 1
    const controlX2 = startX + deltaX * 1
    const controlY2 = startY + deltaY * 0.1

    return `M ${startX} ${startY} C ${controlX1} ${controlY1} ${controlX2} ${controlY2} ${endX} ${endY}`
  }

  // Function to get point on cubic bezier curve
  const getPointOnCubicBezier = (t, startX, startY, endX, endY) => {
    t = 1 - t
    const deltaX = endX - startX
    const deltaY = endY - startY

    const controlX1 = startX + deltaX * 0.1
    const controlY1 = startY + deltaY * 1
    const controlX2 = startX + deltaX * 1
    const controlY2 = startY + deltaY * 0.1

    const x =
      Math.pow(1 - t, 3) * startX +
      3 * Math.pow(1 - t, 2) * t * controlX1 +
      3 * (1 - t) * Math.pow(t, 2) * controlX2 +
      Math.pow(t, 3) * endX
    const y =
      Math.pow(1 - t, 3) * startY +
      3 * Math.pow(1 - t, 2) * t * controlY1 +
      3 * (1 - t) * Math.pow(t, 2) * controlY2 +
      Math.pow(t, 3) * endY

    return { x, y }
  }

  const noise = useMotionValue(0)

  useEffect(() => {
    const controls = animate(noise, [5, -5, 5], {
      type: 'linear',
      duration: 2,
      repeat: Infinity,
      times: [0, 0.5, 1],
    })

    return () => controls.stop()
  }, [])

  const posts = branches.map((_, i) => {
    const x1 = i % 2 == 0 ? 50 : width - 50
    const y1 = 250 + i * heightStep
    const x2 = (width + trunkWidth) / 2 - 5
    const y2 = 200 + i * heightStep

    return { x: x1 + (i % 2 == 0 ? 0 : -postWidth), y: height - (y1 + y2) / 2 - postHeight * 1.5 }
  })

  return (
    <div className='relative w-full'>
      <svg
        width='100%'
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio='xMidYMid meet'
        // style={{ background: 'white' }}
      >
        <defs>
          <mask id='curveMask'>
            {Array.from({ length: branchCount }).map((_, i) => {
              const x1 = i % 2 == 0 ? 50 : width - 50
              const y1 = 250 + i * heightStep
              const x2 = (width + trunkWidth) / 2 - 5
              const y2 = 200 + i * heightStep

              return (
                <motion.path
                  key={i}
                  d={useTransform(noise, (noiseValue) =>
                    generateCustomBranch(x1, y1 - noiseValue, x2, y2 + noiseValue / 2),
                  )}
                  stroke='white'
                  strokeWidth='2'
                  fill='none'
                />
              )
            })}
            <rect //
              x={centerX - trunkWidth / 2}
              y={tipH}
              width={trunkWidth}
              height={height - rootHeight}
              fill='white'
            />
            <g>
              {/* Rounded top part */}
              <rect x={centerX - trunkWidth / 2} y={0} width={trunkWidth} height={10} fill='white' rx='10' />
              {/* Rectangular bottom part */}
              <rect x={centerX - trunkWidth / 2} y={5} width={trunkWidth} height={tipH - 5} fill='white' />
            </g>
            {/* <polygon
            points={`
              ${centerX},0 
              ${centerX - trunkWidth / 2},${tipH} 
              ${centerX + trunkWidth / 2},${tipH}`}
            fill='white'
          /> */}
            {Array.from({ length: rootCount }).map((_, i) => {
              const x = i * ((width - 150) / (rootCount - 1)) + 75
              // Calculate end position within trunk width
              const trunkLeft = centerX - trunkWidth / 2 + 2
              const trunkRight = centerX + trunkWidth / 2 - 1
              const endX = trunkLeft + (i / (rootCount - 1)) * (trunkWidth - 4)

              return (
                <path
                  key={i}
                  d={`
                    M${x},${height} 
                    C${x},${height - rootHeight + 50 * (rootHeight / 200)} 
                    ${endX},${height - rootHeight + 125 * (rootHeight / 200)} 
                    ${endX},${height - rootHeight}
                  `}
                  stroke='white'
                  strokeWidth='1.5'
                  fill='none'
                />
              )
            })}
            {/* <rect width={width} height={height} x='0' y='0' fill='white' /> */}
          </mask>
          <linearGradient id='gradient' x1='0' x2='0' y1='1' y2='0'>
            <motion.stop stopColor='rgba(0,0,0,0.5)' animate={{ offset: ['-150%', '100%'] }} transition={transition} />
            <motion.stop stopColor='transparent' animate={{ offset: ['-20%', '100%'] }} transition={transition} />
            <motion.stop stopColor='#a78bfa' animate={{ offset: ['-12%', '108%'] }} transition={transition} />
            <motion.stop stopColor='rgba(0,0,0,0.5)' animate={{ offset: ['-8%', '112%'] }} transition={transition} />
          </linearGradient>
        </defs>
        <g mask='url(#curveMask)'>
          <rect x='0' y='0' width={width} height={height} fill='#ccc' />
          <rect x='0' y='0' width={width} height={height} fill='url(#gradient)' />
        </g>
        {posts.map((post, i) => (
          <Fragment key={i}>
            <motion.rect
              key={i}
              x={post.x}
              y={useTransform(noise, (noiseValue) => post.y + noiseValue)}
              width={postWidth}
              height={postHeight}
              fill='#7c3aed'
              rx={5}
              cursor='pointer'
            />
            <motion.text
              x={post.x + postWidth / 2} // Center horizontally (rect width / 2)
              y={useTransform(noise, (noiseValue) => post.y + noiseValue + postHeight / 2 - 5)} // Center vertically (rect height / 2 + a bit for baseline)
              textAnchor='middle'
              dominantBaseline='middle'
              fill='white'
              fontSize='12'
              fontFamily='Arial'
            >
              {branches[i].title}
            </motion.text>
            <motion.text
              x={post.x + postWidth / 2} // Center horizontally (rect width / 2)
              y={useTransform(noise, (noiseValue) => post.y + noiseValue + postHeight / 2 + 10)} // Center vertically (rect height / 2 + a bit for baseline)
              textAnchor='middle'
              dominantBaseline='middle'
              fill='white'
              fontSize='10'
              fontFamily='Arial'
            >
              {branches[i].subtitle}
            </motion.text>
          </Fragment>
        ))}
      </svg>
    </div>
  )
}
