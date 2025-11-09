'use client'

import { css } from '@/util'
import * as Dialog from '@radix-ui/react-dialog'
import dayjs from 'dayjs'
import { motion, MotionValue, useTransform } from 'framer-motion'
import Image, { StaticImageData } from 'next/image'
import { FC } from 'react'

export type Fruit =
  | {
      icon?: StaticImageData
      company: string
      position: string
      dateStart?: string
      dateEnd?: string
      description?: string
      technologies?: string[]
    }
  | true
type FruitProps = {
  i: number
  fruit: Fruit
  post: { x: number; y: number }
  trailProgress: MotionValue<number>
  postWidth: number
  postHeight: number
}
export const FruitView: FC<FruitProps> = ({ fruit, post, postWidth, postHeight, i, trailProgress }) => {
  const shift = fruit == true ? 0.9 : i * 0.24
  const shineOpacity = useTransform(trailProgress, [0.1 + shift, 0.15 + shift, 0.2 + shift], [0, 1, 0])
  return (
    <>
      <foreignObject x={post.x} y={post.y} width={postWidth} height={postHeight}>
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <div className='flex h-full w-full items-center justify-center'>
              <motion.div
                className={css(
                  'bg-base-2nd fade-in glass-effect h-[calc(100%-16px)] w-[calc(100%-16px)] cursor-pointer rounded-md',
                  fruit == true ? 'flex items-center justify-center p-3' : 'p-2',
                )}
                style={{
                  boxShadow: useTransform(shineOpacity, (opacity) =>
                    fruit === true ? `0 0 ${30 * opacity + 1}px #22c55e` : `0 0 ${30 * opacity + 1}px #a78bfa`,
                  ),
                }}
              >
                {fruit == true ? (
                  <div className='text-center text-3xl'>Open To Work</div>
                ) : (
                  <div className='flex h-full items-center'>
                    {fruit.icon && (
                      <Image
                        src={fruit.icon}
                        alt={fruit.company}
                        className='mr-4 h-20 w-20 rounded-lg object-contain'
                      />
                    )}
                    <div className='flex-1 text-white'>
                      <h3 className='text-lg font-semibold'>{fruit.position}</h3>
                      <p className='text-sm'>{fruit.company}</p>
                      {fruit.dateStart != null && (
                        <p className='text-xs'>
                          {`${dayjs(fruit.dateStart).format('MMM YYYY')} - ${fruit.dateEnd ? dayjs(fruit.dateEnd).format('MMM YYYY') : 'Present'}`}
                        </p>
                      )}
                    </div>
                  </div>
                )}
              </motion.div>
            </div>
          </Dialog.Trigger>

          {fruit != true && (
            <Dialog.Portal>
              <Dialog.Overlay className='fixed inset-0 z-80 bg-black/50 backdrop-blur-sm' />
              <Dialog.Content className='bg-base-2nd glass-effect fixed top-1/2 left-1/2 z-90 w-[90vw] max-w-md -translate-x-1/2 -translate-y-1/2 transform rounded-lg p-6'>
                <Dialog.Title className='mb-4 flex items-center text-xl font-bold text-white'>
                  {fruit.icon && (
                    <Image src={fruit.icon} alt={fruit.company} className='mr-3 h-12 w-12 rounded-lg object-contain' />
                  )}
                  <div>
                    <div>{fruit.position}</div>
                    <div className='text-sm font-normal text-gray-300'>{fruit.company}</div>
                  </div>
                </Dialog.Title>

                <div className='space-y-4 text-white'>
                  <div>
                    <h4 className='text-sm font-semibold text-gray-300'>Duration</h4>
                    <p className='text-sm'>
                      {`${dayjs(fruit.dateStart).format('MMM YYYY')} - ${fruit.dateEnd ? dayjs(fruit.dateEnd).format('MMM YYYY') : 'Present'}`}
                    </p>
                  </div>

                  {fruit.description && (
                    <div>
                      <h4 className='text-sm font-semibold text-gray-300'>Description</h4>
                      <p className='text-sm'>{fruit.description}</p>
                    </div>
                  )}

                  {fruit.technologies && fruit.technologies.length > 0 && (
                    <div>
                      <h4 className='text-sm font-semibold text-gray-300'>Technologies</h4>
                      <div className='mt-2 flex flex-wrap gap-2'>
                        {fruit.technologies.map((tech, index) => (
                          <span key={index} className='rounded bg-purple-500/20 px-2 py-1 text-xs'>
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <Dialog.Close asChild>
                  <button className='absolute top-4 right-4 text-gray-400 transition-colors hover:text-white'>X</button>
                </Dialog.Close>
              </Dialog.Content>
            </Dialog.Portal>
          )}
        </Dialog.Root>
      </foreignObject>
    </>
  )
}
