import { Projects } from '@/projects'
import { TechTag } from '@/types'
import { useTranslations } from 'next-intl'
import { FC, Fragment } from 'react'
import ProjectItem from './ProjectItem'

export type Project = {
  name: string
  image: FC<{ className?: string }>
  description: string
  url: string
  startDate: string
  endDate?: string
  tags: TechTag[]
}

export default function ProjectHistory() {
  const t = useTranslations('HomePage')

  return (
    <div>
      <div className='h1 mx-auto mb-16 text-center text-balance break-all'>{t('project.title')}</div>
      <div className='flex flex-col gap-0 divide-gray-300'>
        {Projects.map((project, index, arr) => (
          <Fragment key={index}>
            <ProjectItem project={project} isLast={index == 0} />
            {index != arr.length - 1 && <div className='my-4 h-0.25 w-1/2 bg-gray-300/40' />}
          </Fragment>
        ))}
      </div>
    </div>
  )
}
