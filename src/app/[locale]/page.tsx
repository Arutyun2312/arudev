'use client'

import FooterView from '@/components/FooterView'
import NavBar from '@/components/NavBar'
import NumberView from '@/components/NumberView'
import TechTagView from '@/components/TechTagView'
import { Projects } from '@/projects'
import { TechTag } from '@/types'
import profilePic from '@assets/me.png'
import dayjs from 'dayjs'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Marquee from 'react-fast-marquee'
import ProjectHistory from './ProjectHistory'
import DownloadView from '@/components/DownloadView'

const firstJob = dayjs('2019-01-01')
const teams = 4
const projectsDone = 9

export default function HomePage() {
  const t = useTranslations('HomePage')

  return (
    <div className='flex flex-col gap-6 lg:gap-24 [&>*]:mx-4 [&>*]:lg:mx-[6%]'>
      <NavBar />
      <main className='flex max-w-screen flex-col-reverse items-center justify-center gap-4 lg:flex-row'>
        <div className='flex flex-[2] flex-col gap-4'>
          <div className='h1 text-balance'>
            {t.rich('aru.title', { p: (chunks) => <span className='h1 !text-primary-dark'>{chunks}</span> })}
          </div>
          <div className='h2 red'>{t('aru.subtitle')}</div>
          <div className='body'>
            {t.rich('aru.description', {
              p: (chunks) => <p className='my-2'>{chunks}</p>,
              uni: (chunks) => (
                <a
                  href='https://www.modul.ac.at/programs/bachelor-programs/bsc-applied-data-science'
                  target='_blank'
                  className='text-primary underline'
                >
                  {chunks}
                </a>
              ),
              email: (chunks) => (
                <a
                  href='mailto:arutyunef@gmail.com'
                  target='_blank'
                  className='text-primary cursor-pointer font-bold underline'
                >
                  {chunks}
                </a>
              ),
              linkedin: (chunks) => (
                <a
                  href='https://www.linkedin.com/in/aru-e-1a312a13b/'
                  target='_blank'
                  className='text-primary cursor-pointer font-bold underline'
                >
                  {chunks}
                </a>
              ),
            })}
          </div>
          <div />
          <div className='w-fit'>
            <DownloadView href='/cv.pdf' label={t('aru.download_cv')} />
          </div>
          <div className='flex w-fit flex-col gap-2 font-bold'>
            {t('aru.download_recommendations')}:
            <div className='flex gap-2 font-normal'>
              <DownloadView href='/ignitix.pdf' label={t('aru.download_ignitix')} />
              <DownloadView href='/nano.pdf' label={t('aru.download_nano')} />
            </div>
          </div>
        </div>
        <div className='my-image-container flex flex-1 justify-center'>
          <Image
            src={profilePic}
            alt='aru'
            className='my-image max-w-72 rounded-full object-cover lg:max-w-96'
            loading='eager'
          />
        </div>
      </main>
      <section className='my-8 flex flex-col gap-4'>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4'>
          <NumberView targetValue={projectsDone} label={t('aru.projects_done')} />
          <NumberView targetValue={dayjs().diff(firstJob, 'y')} label={t('aru.experience_years')} />
          <NumberView targetValue={teams} label={t('aru.teams_count')} />
          <NumberView
            targetValue={Projects.filter((p) => p.type == 'freelance').length + 1}
            label={t('aru.clients_count')}
          />
        </div>
        <div className='relative mt-6 w-full'>
          <TechTagView className='invisible' tag={TechTag.android} />
          <Marquee pauseOnHover className='!absolute inset-0'>
            {Object.values(TechTag).map((tag, i) => (
              <TechTagView key={i} tag={tag} />
            ))}
          </Marquee>
        </div>
      </section>
      {/* <Contacts /> */}
      <div id='projects' className='bg-primary h-0.5 w-1/3 rounded-full' />
      <ProjectHistory />
      {/* <GreetDialog /> */}
      <FooterView />
    </div>
  )
}
