'use client'

import { Link } from '@/i18n/navigation'
import { TechTag, TechTagType } from '@/types'
import { css } from '@/util'
import { useTranslations } from 'next-intl'
import { FC } from 'react'

export type Project = {
  name: string
  image: FC<{ className?: string }>
  description: string
  url: string
  tags: TechTag[]
}

function filterAndSortTags(tags: TechTag[], type: TechTagType) {
  return tags.filter((tag) => tag.type === type).sort((a, b) => a.name.localeCompare(b.name))
}

type Props = {
  project: Project
}
export default function ProjectItem({ project }: Props) {
  const t = useTranslations('HomePage')
  const languageTags = filterAndSortTags(project.tags, TechTagType.LANGUAGE)
  const frameworkTags = filterAndSortTags(project.tags, TechTagType.FRAMEWORK)
  const platformTags = filterAndSortTags(project.tags, TechTagType.PLATFORM)
  const toolTags = filterAndSortTags(project.tags, TechTagType.TOOL)

  const renderTags = (title: string, tags: TechTag[]) =>
    tags.length > 0 && (
      <div className='flex items-center gap-2'>
        <div className='h2'>{title}:</div>
        <div className='flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <span key={tag.name} className={css('rounded-full px-4 py-2', tag.className)}>
              {tag.name}
            </span>
          ))}
        </div>
      </div>
    )

  return (
    <section className='flex flex-col gap-4 p-4'>
      <div>{project.name}</div>
      <div className='flex flex-col items-center gap-4 lg:flex-row'>
        <Link href={project.url} target='_blank' className='flex flex-col items-center gap-2'>
          <project.image className='w-96 rounded-xl' />
          <div>{t('project.visit')}</div>
        </Link>
        <div className='flex flex-col gap-2'>
          <div className='body'>{project.description}</div>
          {renderTags(t('project.languages'), languageTags)}
          {renderTags(t('project.frameworks'), frameworkTags)}
          {renderTags(t('project.platforms'), platformTags)}
          {renderTags(t('project.tools'), toolTags)}
        </div>
      </div>
    </section>
  )
}
