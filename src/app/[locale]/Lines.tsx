'use client'

import { Icons } from '@/projects'
import { TechTagKeys } from '@/types'
import { polylineToPath } from '@/util'
import bear from 'assets/bear.png'
import ignitix from 'assets/ignitix.png'
import nano from 'assets/nano.jpg'
import ocean from 'assets/ocean.png'
import Passion from 'assets/passion.svg'
import { animate, motion, useMotionValue } from 'framer-motion'
import { useCallback, useEffect, useMemo, useRef } from 'react'
import Chip from './ChipView'
import { Fruit, FruitView } from './FruitView'
import TracePath from './TracePath'

const postHeight = 100
const postWidth = 400

const height = 900
const rootHeight = 100
const trunkWidth = 6
const trunkHeight = height - rootHeight - 70

const branches: Fruit[] = [
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
]
const current: Fruit | null = null

export default function Lines() {
  const width = 500
  const centerX = width / 2

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

  // Convert polyline points to path format
  const d = useMemo(() => {
    const points = []
    points.push(`${centerX},${postHeight + tipH}`)

    posts
      .concat()
      .reverse()
      .forEach((post, i) => {
        const d = 25
        const stroke = 25
        const w = postWidth / 2 + 25
        points.push(`${centerX},${post.y - stroke}`)
        points.push(`${centerX + w * (i % 2 === 0 ? 1 : -1)},${post.y - d}`)
        points.push(`${centerX + w * (i % 2 === 0 ? 1 : -1)},${post.y + postHeight + d}`)
        points.push(`${centerX},${post.y + postHeight + stroke}`)
      })

    points.push(`${centerX},${postHeight + tipH + trunkHeight}`)

    // Convert to path format
    return polylineToPath(points)
  }, [centerX, posts])

  const renderChipLabel = useCallback(
    (name: string, cols: number, icons: TechTagKeys[]) => (
      <>
        <div className='h3 w-full border-b border-white pb-2 text-center uppercase'>{name}</div>
        <div
          className='grid w-full justify-items-center gap-6 px-4'
          style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}
        >
          {icons.slice(0, Math.floor(icons.length / cols) * cols).map((icon) => {
            const IconComponent = Icons[icon]
            return <IconComponent key={icon} className='h-6 w-6 object-contain' />
          })}
          {icons.length % cols > 0 && (
            <div
              className='col-span-2 flex w-full justify-around'
              style={{ gridColumn: `span ${cols} / span ${cols}` }}
            >
              {icons.slice(-(icons.length % cols)).map((icon) => {
                const IconComponent = Icons[icon]
                return <IconComponent key={icon} className='h-6 w-6 object-contain' />
              })}
            </div>
          )}
        </div>
      </>
    ),
    [],
  )

  const offsetX = 50
  const offsetY = 20

  const heart = useMotionValue(0)
  const heartRef = useRef<SVGRectElement>(null)
  useEffect(() => {
    const controls = animate(heart, [0, 0.3], {
      duration: 2,
      repeat: Infinity,
      ease: 'linear',
      repeatType: 'reverse',
    })
    return () => controls.stop()
  }, [])
  useEffect(() => {
    const unsubscribe = heart.on('change', (latest) => {
      latest = (latest + 1) * 40
      if (heartRef.current) {
        heartRef.current.setAttribute('width', latest + 'px')
        heartRef.current.setAttribute('height', latest + 'px')
        heartRef.current.setAttribute('x', centerX - latest / 2 + 'px')
        heartRef.current.setAttribute('y', height + 500 + offsetY + 20 * 6 - latest / 2 + 'px')
      }
    })
    return unsubscribe
  }, [heart])

  const heartTrace1 = useMemo(() => {
    const points: string[] = []
    points.push(`${centerX},${height + 500 + offsetY + 20 * 6 - 32 - 145}`)
    points.push(`${centerX},${height + 500 + offsetY + 20 * 6 - 32 - 10}`)
    return polylineToPath(points)
  }, [])
  const heartTrace2 = useMemo(() => {
    const points: string[] = []
    points.push(`${centerX + 32 + 10},${height + 500 + offsetY + 20 * 6 - 32 / 2 + 10}`)
    points.push(`${centerX + 240},${height + 500 + offsetY + 20 * 6 - 32 / 2 + 10}`)
    points.push(`${centerX + 240},${height + 130}`)
    points.push(`${centerX + 215},${height + 130}`)
    return polylineToPath(points.reverse())
  }, [])
  const heartTrace3 = useMemo(() => {
    const points: string[] = []
    points.push(`${centerX - 32 - 10},${height + 500 + offsetY + 20 * 6 - 32 / 2 + 10}`)
    points.push(`${centerX - 240},${height + 500 + offsetY + 20 * 6 - 32 / 2 + 10}`)
    points.push(`${centerX - 240},${height + 130}`)
    points.push(`${centerX - 215},${height + 130}`)
    return polylineToPath(points.reverse())
  }, [])

  const chipTrace1 = useMemo(() => {
    const points: string[] = []
    points.push(`${centerX},${height + offsetY + 295}`)
    points.push(`${centerX},${height - 20}`)
    return polylineToPath(points.reverse())
  }, [])
  const chipTrace2 = useMemo(() => {
    const points: string[] = []
    points.push(`${centerX + 10},${height + offsetY - 50}`)
    points.push(`${centerX + 140},${height + offsetY - 50}`)
    points.push(`${centerX + 140},${height + offsetY + 15}`)
    return polylineToPath(points)
  }, [])
  const chipTrace3 = useMemo(() => {
    const points: string[] = []
    points.push(`${centerX - 10},${height + offsetY - 50}`)
    points.push(`${centerX - 140},${height + offsetY - 50}`)
    points.push(`${centerX - 140},${height + offsetY + 15}`)
    return polylineToPath(points)
  }, [])

  const expTrail = useMotionValue(0)

  useEffect(() => {
    const controls = animate(expTrail, 1, {
      duration: 8,
      repeat: Infinity,
      ease: 'linear',
    })
    return () => controls.stop()
  }, [])

  const trailProgress = useMotionValue(0)

  useEffect(() => {
    const controls = animate(trailProgress, 1, {
      duration: 8,
      repeat: Infinity,
      ease: 'linear',
    })
    return () => controls.stop()
  }, [])

  const shimmer = useMotionValue(0)

  useEffect(() => {
    const controls = animate(shimmer, 1, {
      duration: 4,
      repeat: Infinity,
      ease: 'linear',
      delay: 2,
    })

    return () => controls.stop()
  }, [])

  return (
    <div className='relative mx-auto w-full' style={{ maxWidth: width }}>
      <svg width='100%' viewBox={`0 0 ${width} ${height + 800}`} preserveAspectRatio='xMidYMid meet'>
        <TracePath
          d={d}
          trailProgress={expTrail}
          strokeWidth={trunkWidth}
          count={1}
          trailRatio={0.1}
          trailColor='#a78bfa'
          baseColor='#404047'
        />
        <Chip
          x={centerX + offsetX}
          y={height + offsetY}
          ticksX={7}
          ticksY={9}
          shimmer={shimmer}
          ignoreTop={[3]}
          ignoreRight={[4]}
        >
          {renderChipLabel('Backend', 3, ['nodejs', 'firebase', 'wordpress', 'postgresql', 'php'])}
        </Chip>
        <Chip
          x={centerX - offsetX - 20 * 9}
          y={height + offsetY}
          ticksX={7}
          ticksY={9}
          shimmer={shimmer}
          ignoreTop={[3]}
          ignoreLeft={[4]}
        >
          {renderChipLabel('Frontend', 3, ['react', 'jetpackCompose', 'nextjs', 'android', 'swiftui'])}
        </Chip>
        <Chip
          x={centerX - 20 * 11.5}
          y={height + 280 + offsetY}
          ticksX={21}
          ticksY={7}
          shimmer={shimmer}
          ignoreBottom={[10]}
          ignoreTop={[10]}
        >
          {renderChipLabel('Languages', 6, ['kotlin', 'java', 'javascript', 'typescript', 'python', 'swift'])}
        </Chip>
        <Passion ref={heartRef} viewBox='0 0 32 32' />
        <TracePath
          d={heartTrace1}
          trailProgress={trailProgress}
          strokeWidth={trunkWidth}
          trailRatio={0.3}
          count={2}
          trailColor='red'
          baseColor='#404047'
        />
        <TracePath
          d={heartTrace2}
          trailProgress={trailProgress}
          strokeWidth={trunkWidth}
          trailRatio={0.3}
          count={2}
          trailColor='red'
          baseColor='#404047'
        />
        <TracePath
          d={heartTrace3}
          trailProgress={trailProgress}
          strokeWidth={trunkWidth}
          trailRatio={0.3}
          count={2}
          trailColor='red'
          baseColor='#404047'
        />
        <TracePath
          d={chipTrace1}
          trailProgress={trailProgress}
          strokeWidth={trunkWidth}
          trailRatio={0.1}
          trailColor='aquamarine'
          baseColor='#404047'
        />
        <TracePath
          d={chipTrace2}
          trailProgress={trailProgress}
          strokeWidth={trunkWidth}
          trailRatio={0.1}
          trailColor='aquamarine'
          baseColor='#404047'
        />
        <TracePath
          d={chipTrace3}
          trailProgress={trailProgress}
          strokeWidth={trunkWidth}
          trailRatio={0.1}
          trailColor='aquamarine'
          baseColor='#404047'
        />
        <circle
          cx={centerX}
          cy={height + 500 + offsetY + 20 * 6}
          r={32}
          fill='transparent'
          stroke='red'
          strokeWidth={2}
        />
        {current == null && (
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
            fill: ['#00000000', '#22c55e'],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.circle
          cx={centerX}
          cy={height - 30}
          r={trunkWidth / 2}
          initial={{ fill: '#ff0000' }}
          animate={{ fill: ['#00000000', '#ff0000'] }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </svg>
    </div>
  )
}
