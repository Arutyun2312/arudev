'use client'

import { Link } from '@/i18n/navigation'
import { TechTag, TechTagType } from '@/types'
import flow from 'lodash/flow'
import groupBy from 'lodash/groupBy'
import mapValues from 'lodash/mapValues'
import sortBy from 'lodash/sortBy'
import { useTranslations } from 'next-intl'
import TechTagsView from '../../components/TechTagsView'
import linkIcon from '@assets/link.svg'
import Image from 'next/image'
import { Project } from '@/hooks/useProjectsData'
import dayjs from 'dayjs'
import { css } from '@/util'

type Props = {
  project: Project
  isLast?: boolean
}
export default function ProjectItem({ project, isLast }: Props) {
  const t = useTranslations('HomePage')
  const tagOrder: [string, TechTagType][] = [
    [t('project.languages'), TechTagType.LANGUAGE],
    [t('project.frontend'), TechTagType.FRONTEND],
    [t('project.backend'), TechTagType.BACKEND],
    [t('project.services'), TechTagType.SERVICE],
  ]
  const group = flow(
    (tags: TechTag[]) => groupBy(tags, (tag) => tag.type),
    (grouped) => mapValues(grouped, (tags) => sortBy(tags)),
  )(project.tags)

  const renderDate = (date: string | undefined, top: boolean) =>
    date && (
      <div className={css('absolute right-full bottom-0 mr-2 w-fit text-nowrap', top ? 'top-0' : 'bottom-0')}>
        {dayjs(date).format('MMM YYYY')}
      </div>
    )

  return (
    <section className='mx-10 flex flex-col gap-4 p-4 lg:flex-row'>
      <div className='relative w-3 rounded-full bg-gray-300'>
        {isLast && <div className='triangle absolute -top-7 -right-1/2 -left-1/2 h-6 bg-gray-300' />}
        {renderDate(project.endDate, true)}
        {renderDate(project.startDate, false)}
      </div>
      <div className='flex flex-col gap-4'>
        <div className='h2 font-bold'>{`(${t(`project.${project.type}`)}) ` + project.name}</div>
        <div className='flex flex-col items-center gap-2 lg:flex-row'>
          <Link href={project.url} target='_blank' className='threeD-span flex flex-col items-center gap-4'>
            <project.image className='w-96 rounded-xl' />
            <div className='bg-primary rounded-full'>
              <span className='button'>
                {t(`project.visit.${project.type}`)}
                <Image src={linkIcon} alt='link icon' />
              </span>
            </div>
          </Link>
          <div className='flex flex-1 flex-col gap-4'>
            <div className='body'>{project.description}</div>
            <div className='grid grid-cols-2 gap-4'>
              {tagOrder.map(([title, type]) => (
                <TechTagsView key={type} title={title} tags={group[type]} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
