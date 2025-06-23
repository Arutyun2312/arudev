import DownloadView from '@/components/DownloadView'
import TechTagsView from '@/components/TechTagsView'
import { Link } from '@/i18n/navigation'
import { Project } from '@/projects'
import { TechTag, TechTagType } from '@/types'
import { css } from '@/util'
import dayjs from 'dayjs'
import flow from 'lodash/flow'
import groupBy from 'lodash/groupBy'
import mapValues from 'lodash/mapValues'
import sortBy from 'lodash/sortBy'
import { useTranslations } from 'next-intl'

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

  const renderDate = (date: string | undefined, top: boolean) => {
    const [part1, part2] = dayjs(date).format('MMM YYYY').split(' ')
    return (
      date != null && (
        <div
          className={css(
            'body absolute right-full bottom-0 mr-2 w-fit !text-base text-nowrap uppercase',
            top ? 'top-0' : 'bottom-0',
            'flex flex-col gap-1 lg:flex-row',
          )}
        >
          <div>{part1}</div>
          <div>{part2}</div>
        </div>
      )
    )
  }

  return (
    <section className='border-primary-dark relative ml-10 flex flex-col gap-8 border-l-2 p-4 lg:flex-row'>
      {isLast && <div className='triangle bg-primary-dark absolute -top-7 -left-2 h-6 w-3 transition-colors' />}
      {renderDate(project.endDate, true)}
      {renderDate(project.startDate, false)}
      <div className='flex w-full flex-col gap-4'>
        <div>
          <div className='h2 font-bold'>{t(`projects.${project.name}.name`)}</div>
        </div>
        <div className='flex flex-col items-center gap-8 lg:flex-row'>
          <div className='flex flex-col items-center gap-4 lg:flex-[2]'>
            <Link href={project.url} target='_blank' className='threeD-span flex flex-col items-center gap-4'>
              <div className='bg-primary flex rounded-xl'>
                <span className='inline-block'>
                  <project.image alt={t(`projects.${project.name}.name`)} className='rounded-xl shadow-lg' />
                </span>
              </div>
              <div className='bg-primary rounded-full'>
                <span className='button body flex items-center justify-center uppercase'>
                  <div className='loading-text font-bold'>{t(`project.visit.${project.type}`)}</div>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth='1.5'
                    stroke='black'
                    aria-hidden='true'
                    data-slot='icon'
                    className='inline h-5'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25'
                    />
                  </svg>
                </span>
              </div>
            </Link>
            {project.recommendation != null && (
              <DownloadView href={project.recommendation} label={t('aru.recommendations')} />
            )}
          </div>
          <div className='flex flex-1 flex-col gap-4 lg:flex-[3]'>
            {t.rich(`projects.${project.name}.description`, {
              em: (chunks) => <div className='body border-l px-1 italic'>{chunks}</div>,
              ul: (chunks) => <ul className='body list-disc space-y-4 pl-4'>{chunks}</ul>,
              li: (chunks) => <li className='list-item'>{chunks}</li>,
              strong: (chunks) => <strong className='font-bold'>{chunks}</strong>,
            })}
            <div className=''>
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
