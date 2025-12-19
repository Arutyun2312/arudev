import { css } from '@/util'
import { motion, MotionValue, useTransform } from 'framer-motion'
import { PropsWithChildren, useId } from 'react'

type Props = PropsWithChildren<{
  x: number
  y: number
  ticksX: number
  ticksY: number
  shimmer: MotionValue<number>

  ignoreBottom?: number[]
  ignoreTop?: number[]
  ignoreRight?: number[]
  ignoreLeft?: number[]
}>
export default function Chip(props: Props) {
  const {
    x,
    y,
    ticksX,
    ticksY,
    shimmer,
    ignoreBottom = [],
    ignoreTop = [],
    ignoreRight = [],
    ignoreLeft = [],
    children,
  } = props

  const uniqueId = useId()
  const curveMaskId = `curveMask-${uniqueId}`
  const edgeMaskId = `edgeMask-${uniqueId}`
  const gradientIds = [1, 2, 3, 4].map((i) => `gradient${i}-${uniqueId}`)

  const unitHeight = 20
  const tickHeight = 8 // tick width is always equal to unitWidth, skip
  const sideTicks = Array.from({ length: ticksY })
  const edgeTicks = Array.from({ length: ticksX })
  const innerWidth = unitHeight * (edgeTicks.length - 1)
  const innerHeight = unitHeight * (sideTicks.length - 1)
  const chipWidth = innerWidth + unitHeight * 3
  const chipHeight = innerHeight + unitHeight * 3

  const offset1 = useTransform(shimmer, [0, 1], ['-150%', '100%'])
  const offset2 = useTransform(shimmer, [0, 1], ['-20%', '100%'])
  const offset3 = useTransform(shimmer, [0, 1], ['-12%', '108%'])
  const offset4 = useTransform(shimmer, [0, 1], ['-8%', '112%'])
  const borderColor = useTransform(shimmer, [0, 0.7, 0.9, 1], ['#a78bfa66', '#7FFFD4', '#7FFFD4', '#a78bfa66'])

  const f = (i: number) => (i + 1) * unitHeight + (unitHeight - tickHeight) / 2
  const m = 4
  return (
    <svg x={x} y={y} width={chipWidth} height={chipHeight}>
      <defs>
        <mask id={curveMaskId}>
          {sideTicks.map((_, i) =>
            ignoreLeft.includes(i) ? null : (
              <rect key={i} x={0} y={f(i)} width={unitHeight} height={tickHeight} rx={tickHeight / 2} fill='white' />
            ),
          )}
          {sideTicks.map((_, i) =>
            ignoreRight.includes(i) ? null : (
              <rect
                key={i}
                x={innerWidth + unitHeight * 2}
                y={f(i)}
                width={unitHeight}
                height={tickHeight}
                rx={tickHeight / 2}
                fill='white'
              />
            ),
          )}
        </mask>
        <mask id={edgeMaskId}>
          {edgeTicks.map((_, i) =>
            ignoreTop.includes(i) ? null : (
              <rect key={i} x={f(i)} y={0} width={tickHeight} height={unitHeight} rx={tickHeight / 2} fill='white' />
            ),
          )}
          {edgeTicks.map((_, i) =>
            ignoreBottom.includes(i) ? null : (
              <rect
                key={i}
                x={f(i)}
                y={innerHeight + unitHeight * 2}
                width={tickHeight}
                height={unitHeight}
                rx={tickHeight / 2}
                fill='white'
              />
            ),
          )}
        </mask>
        {['x2', 'x1', 'y2', 'y1'].map((key, i) => (
          <linearGradient key={i} id={gradientIds[i]} x1='0' x2='0' y1='0' y2='0' {...{ [key]: 1 }}>
            <motion.stop stopColor='rgba(0,0,0,0.5)' offset={offset1} />
            <motion.stop stopColor='transparent' offset={offset2} />
            <motion.stop stopColor='aquamarine' offset={offset3} />
            <motion.stop stopColor='rgba(0,0,0,0.5)' offset={offset4} />
          </linearGradient>
        ))}
      </defs>
      <g mask={`url(#${curveMaskId})`}>
        <rect x='0' y='0' width={chipWidth} height={chipHeight} fill='#333' />
        <rect x='0' y='0' width={chipWidth / 4} height={chipHeight} fill={`url(#${gradientIds[0]})`} />
        <rect
          x={chipWidth * (3 / 4)}
          y='0'
          width={chipWidth / 4}
          height={chipHeight}
          fill={`url(#${gradientIds[1]})`}
        />
      </g>
      <g mask={`url(#${edgeMaskId})`}>
        <rect x='0' y='0' width={chipWidth} height={chipHeight} fill='#333' />
        <rect x='0' y='0' width={chipWidth} height={chipHeight / 4} fill={`url(#${gradientIds[2]})`} />
        <rect
          x='0'
          y={chipHeight * (3 / 4)}
          width={chipWidth}
          height={chipHeight / 4}
          fill={`url(#${gradientIds[3]})`}
        />
      </g>
      <foreignObject
        x={unitHeight + m}
        y={unitHeight + m}
        width={chipWidth - unitHeight * 2 - m * 2}
        height={chipHeight - unitHeight * 2 - m * 2}
      >
        <motion.div
          className={css('glass-effect h-full w-full', 'flex flex-col items-center justify-center gap-6')}
          style={{ borderColor, borderWidth: 1, borderStyle: 'solid', borderRadius: 12 }}
        >
          {children}
        </motion.div>
      </foreignObject>
    </svg>
  )
}
