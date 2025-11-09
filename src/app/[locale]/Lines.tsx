'use client'

import bear from 'assets/bear.png'
import ignitix from 'assets/ignitix.png'
import nano from 'assets/nano.jpg'
import ocean from 'assets/ocean.png'
import { animate, motion, useMotionValue, useTransform } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { useIsMobile } from '../hooks/useIsMobile'
import { Fruit, FruitView } from './FruitView'

const postHeight = 100
const postWidth = 400

const height = 900
const rootHeight = 100
const trunkWidth = 6
const trunkHeight = height - rootHeight - 70

type Props = { branches?: Fruit[] }
export default function Lines({
  branches = [
    { icon: ocean, company: 'Ocean', position: 'Web Developer', dateStart: '2019-01-01', dateEnd: '2020-03-01' },
    {
      icon: bear,
      company: 'BearFitness',
      position: 'iOS Developer',
      dateStart: '2020-06-01',
      dateEnd: '2021-12-31',
    },
    { icon: nano, company: 'Nano', position: 'Mobile + Web Developer', dateStart: '2022-01-01', dateEnd: '2023-04-01' },
    {
      icon: ignitix,
      company: 'Ignitix',
      position: 'Android + Web Developer',
      dateStart: '2023-06-01',
      dateEnd: '2024-11-01',
    },
    true,
  ],
}: Props) {
  const isMobile = useIsMobile()
  const width = isMobile ? 500 : 800
  const centerX = width / 2
  const current = branches.at(-1)
  branches = branches.slice(0, -1)

  const minHeight = 50
  const heightStep = 150

  const tipH = 30

  const posts = branches.map((_, i) => {
    const x1 = centerX - postWidth / 2
    const y1 = minHeight + 50 + i * heightStep
    const y2 = minHeight + i * heightStep

    return {
      x: x1,
      y: height - (y1 + y2) / 2 - postHeight * 1.5,
    }
  })

  // Add these inside your component
  const pathRef = useRef<SVGPathElement>(null)

  // Convert polyline points to path format
  const generateTrunkPathAsPath = () => {
    const points = []
    points.push(`${centerX},${postHeight + tipH}`)

    posts
      .concat()
      .reverse()
      .forEach((post, i) => {
        const stroke = 25
        const w = postWidth / 2 + 25
        points.push(`${centerX},${post.y - stroke}`)
        points.push(`${centerX + w * (i % 2 === 0 ? 1 : -1)},${post.y - 25}`)
        points.push(`${centerX + w * (i % 2 === 0 ? 1 : -1)},${post.y + postHeight + 25}`)
        points.push(`${centerX},${post.y + postHeight + stroke}`)
      })

    points.push(`${centerX},${postHeight + tipH + trunkHeight}`)

    // Convert to path format
    const coords = points.map((point) => point.split(',').map(Number))
    let pathD = `M ${coords[0][0]} ${coords[0][1]}`
    for (let i = 1; i < coords.length; i++) {
      pathD += ` L ${coords[i][0]} ${coords[i][1]}`
    }
    return pathD
  }
  const trailProgress = useMotionValue(0)

  useEffect(() => {
    const controls = animate(trailProgress, [0, 1.1], {
      duration: 9,
      repeat: Infinity,
      ease: 'linear',
    })
    return () => controls.stop()
  }, [])

  return (
    <div className='relative w-full'>
      <svg width='100%' viewBox={`0 0 ${width} ${height}`} preserveAspectRatio='xMidYMid meet'>
        <g>
          <path
            ref={pathRef}
            d={generateTrunkPathAsPath()}
            strokeLinejoin='round'
            stroke='#404047'
            strokeWidth={trunkWidth}
            fill='none'
            strokeLinecap='round'
          />

          {/* Purple trail that follows behind */}
          <motion.path
            d={generateTrunkPathAsPath()}
            strokeLinejoin='round'
            stroke='#a78bfa'
            strokeWidth={trunkWidth}
            fill='none'
            opacity='0.8'
            strokeDasharray={useTransform(trailProgress, () => {
              if (pathRef.current) {
                const pathLength = pathRef.current.getTotalLength()
                const trailLength = pathLength * 0.1
                return `${trailLength} ${pathLength}`
              }
              return '0 0'
            })}
            strokeDashoffset={useTransform(trailProgress, (p) => {
              if (pathRef.current) {
                const pathLength = pathRef.current.getTotalLength()
                const trailLength = pathLength * 0.1
                return p * pathLength + trailLength
              }
              return 0
            })}
            filter='drop-shadow(0 0 8px #a78bfa)'
          />
        </g>
        {current != null && (
          <FruitView
            i={0}
            fruit={current}
            trailProgress={trailProgress}
            post={{ x: centerX - postWidth / 2, y: 10 }}
            postWidth={postWidth}
            postHeight={postHeight}
          />
        )}
        {posts.map((post, i) => (
          <FruitView
            key={i}
            i={i}
            fruit={branches[i]}
            post={post}
            postWidth={postWidth}
            postHeight={postHeight}
            trailProgress={trailProgress}
          />
        ))}
        <motion.circle
          cx={centerX}
          cy={postHeight + 20}
          r={trunkWidth / 2}
          animate={{
            fill: ['#00000000', '#22c55e'], // Only two states
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
        />
        <motion.circle
          cx={centerX}
          cy={height - 30}
          r={trunkWidth / 2}
          animate={{
            fill: ['#00000000', '#ff0000'], // Only two states
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
        />
      </svg>
    </div>
  )
}
