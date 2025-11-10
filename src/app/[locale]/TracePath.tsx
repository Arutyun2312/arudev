import { animate, motion, MotionValue, useTransform } from 'framer-motion'
import { useEffect, useRef } from 'react'

type Props = {
  d: string
  trailProgress: MotionValue<number>
  strokeWidth: number
  trailColor: string
  baseColor: string
  trailRatio?: number
}
export default function TracePath(props: Props) {
  const { d, trailProgress, strokeWidth, trailColor, baseColor, trailRatio = 0.1 } = props
  const pathRef = useRef<SVGPathElement>(null)

  const pathLength = pathRef.current?.getTotalLength() ?? 0
  const trailLength = pathLength * trailRatio
  const strokeDasharray = `${trailLength} ${pathLength}`
  const strokeDashoffset = useTransform(trailProgress, (p) => pathLength * p + trailLength)

  return (
    <g>
      <path
        ref={pathRef}
        d={d}
        strokeLinejoin='round'
        stroke={baseColor}
        strokeWidth={strokeWidth}
        fill='none'
        strokeLinecap='round'
      />

      <motion.path
        d={d}
        strokeLinejoin='round'
        stroke={trailColor}
        strokeWidth={strokeWidth}
        fill='none'
        opacity='0.8'
        strokeDasharray={strokeDasharray}
        strokeDashoffset={strokeDashoffset}
        filter={`drop-shadow(0 0 8px ${trailColor})`}
      />
    </g>
  )
}
