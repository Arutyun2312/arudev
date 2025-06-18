'use client'

import { Link } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'
import { FC } from 'react'

export type Project = {
  name: string
  image: FC<{ className?: string }>
  description: string
  url: string
}

type Props = {
  project: Project
}
export default function ProjectItem({ project }: Props) {
  const t = useTranslations('HomePage')
  return (
    <section className='flex flex-col gap-4 p-4'>
      <div>{project.name}</div>
      <div className='flex flex-col items-center gap-4 lg:flex-row'>
        <Link href={project.url} target='_blank' className='flex flex-col items-center gap-2'>
          <project.image className='w-96 rounded-xl' />
          <div>{t('project.visit')}</div>
        </Link>
        <div className='body'>{project.description}</div>
      </div>
    </section>
  )
}
