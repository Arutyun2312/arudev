'use client'

import bear from 'assets/bear.png'
import ignitix from 'assets/ignitix.png'
import nano from 'assets/nano.jpg'
import ocean from 'assets/ocean.png'
import dayjs from 'dayjs'
import { animate, motion, useMotionValue, useTransform } from 'framer-motion'
import { FC, useCallback, useEffect, useRef } from 'react'
import { useIsMobile } from '../hooks/useIsMobile'

type Fruit = { icon: string; company: string; position: string; dateStart: string; dateEnd?: string }
type Props = { branches?: Fruit[] }
export default function Lines({
  branches = [
    { icon: ocean.src, company: 'Ocean', position: 'Web Developer', dateStart: '2022-01-01', dateEnd: '2022-12-31' },
    {
      icon: bear.src,
      company: 'BearFitness',
      position: 'iOS Developer',
      dateStart: '2022-01-01',
      dateEnd: '2022-12-31',
    },
    { icon: nano.src, company: 'Nano', position: 'Mobile Deveveloper', dateStart: '2022-01-01' },
    { icon: ignitix.src, company: 'Ignitix', position: 'Android + Web', dateStart: '2022-01-01' },
  ],
}: Props) {
  const postHeight = 100
  const postWidth = 400

  const width = 600
  const height = 850
  const rootCount = 10
  const rootHeight = 100
  const centerX = width / 2
  const trunkWidth = 6
  const trunkHeight = height - rootHeight - 70
  const current = branches.at(-1)
  branches = branches.slice(0, -1)
  const branchCount = branches.length

  const minHeight = 165
  const heightStep = 150
  const branchWidth = 200

  const tipH = 30

  const FruitView: FC<{ fruit: Fruit; post: { x: number; y: number }; disableAnim?: boolean }> = useCallback(
    ({ fruit, post, disableAnim }) => {
      const fontSize = 20
      const padding = -5
      return (
        <>
          <motion.rect
            x={post.x + padding}
            y={disableAnim ? post.y + padding : useTransform(noise, (noiseValue) => post.y + noiseValue / 3 + padding)}
            width={postWidth}
            height={postHeight + 10}
            // fill='#7c3aed'
            rx={5}
            cursor='pointer'
            // animate={!disableAnim ? {} : { scale: [1, 1.1] }}
            transition={{
              duration: 1,
              ease: 'linear',
              repeatType: 'reverse',
              repeat: Infinity,
            }}
            fill='color-mix(in srgb, var(--color-base-2nd) 60%, transparent)'
            stroke='color-mix(in srgb, var(--color-highlight) 40%, transparent)'
            strokeWidth='2'
          />
          <motion.image
            href={fruit.icon}
            x={post.x}
            y={disableAnim ? post.y : useTransform(noise, (noiseValue) => post.y + noiseValue / 3)}
            width={postWidth / 3}
            height={postHeight}
            preserveAspectRatio='xMidYMid meet'
          />
          <motion.text
            x={post.x + postWidth / 3 + 10}
            y={
              disableAnim
                ? post.y + postHeight / 2 - 20
                : useTransform(noise, (noiseValue) => post.y + noiseValue / 3 + postHeight / 2 - 20)
            }
            textAnchor='start'
            dominantBaseline='middle'
            fill='white'
            fontSize={fontSize}
            fontFamily='Arial'
          >
            {fruit.position}
          </motion.text>
          <motion.text
            x={post.x + postWidth / 3 + 10}
            y={
              disableAnim
                ? post.y + postHeight / 2 + 5
                : useTransform(noise, (noiseValue) => post.y + noiseValue / 3 + postHeight / 2 + 5)
            }
            textAnchor='start'
            dominantBaseline='middle'
            fill='white'
            fontSize={fontSize - 4}
            fontFamily='Arial'
          >
            {fruit.company}
          </motion.text>
          <motion.text
            x={post.x + postWidth / 3 + 10}
            y={
              disableAnim
                ? post.y + postHeight / 2 + 30
                : useTransform(noise, (noiseValue) => post.y + noiseValue / 3 + postHeight / 2 + 30)
            }
            textAnchor='start'
            dominantBaseline='middle'
            fill='white'
            fontSize={fontSize - 6}
            fontFamily='Arial'
          >
            {`${dayjs(fruit.dateStart).format('MMM YYYY')} - ${fruit.dateEnd ? dayjs(fruit.dateEnd).format('MMM YYYY') : 'Present'}`}
          </motion.text>
        </>
      )
    },
    [],
  )

  const isMobile = useIsMobile()

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
    const x1 = centerX - postWidth / 2
    const y1 = 220 + i * heightStep
    const y2 = 170 + i * heightStep

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
      duration: 6,
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
          />

          {/* Purple trail that follows behind */}
          <motion.path
            d={generateTrunkPathAsPath()}
            strokeLinejoin='round'
            stroke='#a78bfa'
            strokeWidth={trunkWidth}
            fill='none'
            opacity='0.8'
            strokeDasharray={useTransform(trailProgress, (p) => {
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
        {current != null && <FruitView fruit={current} post={{ x: centerX - postWidth / 2, y: 10 }} disableAnim />}
        {posts.map((post, i) => (
          <FruitView key={i} fruit={branches[i]} post={post} />
        ))}
        <motion.circle
          cx={centerX}
          cy={postHeight + 20}
          r={trunkWidth / 2}
          animate={{
            fill: ['#00000000', '#22c55e'], // Only two states
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
        />
      </svg>
    </div>
  )
}
