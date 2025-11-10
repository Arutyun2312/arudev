import { animate, motion, MotionValue, useTransform } from 'framer-motion'
import { useEffect, useMemo, useRef } from 'react'
import { svgPathProperties } from 'svg-path-properties'

type Props = {
  d: string
  trailProgress: MotionValue<number>
  strokeWidth: number
  trailColor: string
  baseColor: string
  trailRatio?: number
  count?: number
}
export default function TracePath(props: Props) {
  const { d, trailProgress, strokeWidth, trailColor, baseColor, trailRatio = 0.1, count = 2 } = props

  const [strokeDasharray, actualLength, trailLength] = useMemo(() => {
    const properties = new svgPathProperties(d)
    const pathLength = properties.getTotalLength()
    const trailLength = pathLength * trailRatio
    const strokeDasharray = Array.from({ length: count }, () => `${trailLength} ${pathLength / count}`).join(' ')
    const actualLength = trailLength * count + pathLength
    return [strokeDasharray, actualLength, trailLength] as const
  }, [])

  const motionstrokeDashoffset = useTransform(trailProgress, (p) => actualLength * p + trailLength)

  return (
    <g>
      <path
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
        strokeDashoffset={motionstrokeDashoffset}
        filter={`drop-shadow(0 0 8px ${trailColor})`}
      />
    </g>
  )
}
