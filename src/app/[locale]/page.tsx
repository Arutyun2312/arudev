'use client'

import FooterView from '@/components/FooterView'
import GreetDialog from '@/components/GreetDialog'
import NavBar from '@/components/NavBar'
import NumberView from '@/components/NumberView'
import TechTagView from '@/components/TechTagView'
import { useProjectsData } from '@/hooks/useProjectsData'
import { TechTag } from '@/types'
import profilePic from '@assets/me.png'
import dayjs from 'dayjs'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Marquee from 'react-fast-marquee'
import ProjectHistory from './ProjectHistory'

const firstJob = dayjs('2019-01-01')
const teams = 4
const projectsDone = 9

export default function HomePage() {
  const t = useTranslations('HomePage')
  const projects = useProjectsData()

  return (
    <div className='flex flex-col gap-24 [&>*]:mx-4 [&>*]:lg:mx-[10%]'>
      <NavBar />
      <main className='flex max-w-screen flex-col items-center justify-center gap-4 lg:flex-row'>
        <div className='flex flex-[2] flex-col gap-4'>
          <div className='h1'>
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
            })}
          </div>
          <div className='w-fit'>
            <a
              className='threeD-span bg-primary-dark border-primary-dark bg block rounded-full border'
              href={'/cv.pdf'}
              download
            >
              <span className='button threeD-button !bg-primary block !px-10 text-white'>{t('aru.download_cv')}</span>
            </a>
          </div>
        </div>
        <div className='my-image-container flex flex-1 justify-center'>
          <Image src={profilePic} alt='aru' className='my-image size-96 rounded-full object-cover' />
        </div>
      </main>
      <section className='my-8 grid grid-cols-2 justify-between gap-4 lg:grid-cols-4'>
        <NumberView targetValue={projectsDone} label={t('aru.projects_done')} />
        <NumberView targetValue={dayjs().diff(firstJob, 'y')} label={t('aru.experience_years')} />
        <NumberView targetValue={teams} label={t('aru.teams_count')} />
        <NumberView
          targetValue={projects.filter((p) => p.type == 'freelance').length + 1}
          label={t('aru.clients_count')}
        />
        <div className='relative col-span-full mt-6 w-full'>
          <TechTagView className='invisible' tag={TechTag.android} />
          <Marquee pauseOnHover className='!absolute inset-0'>
            {Object.values(TechTag).map((tag, i) => (
              <TechTagView key={i} tag={tag} />
            ))}
          </Marquee>
        </div>
      </section>
      {/* <Contacts /> */}
      <div className='bg-primary h-0.5 w-1/3 rounded-full' />
      <ProjectHistory />
      <GreetDialog />
      <FooterView />
    </div>
  )
}
