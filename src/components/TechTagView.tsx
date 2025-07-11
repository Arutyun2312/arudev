import { Icons } from '@/projects'
import { TechTag } from '@/types'
import { css } from '@/util'
import React from 'react'

type Props = { tag: TechTag; className?: string }
export default function TechTagView({ tag, className }: Props) {
  const Icon = Icons[tag.key]
  return (
    <span key={tag.name} className={css('body rounded-full px-3 py-1', 'flex items-center gap-1', className)}>
      {React.isValidElement(Icon) &&
        React.cloneElement(Icon, {
          style: {
            width: '1rem',
            height: '1rem',
            objectFit: 'contain',
          },
        })}
      {tag.name}
    </span>
  )
}
