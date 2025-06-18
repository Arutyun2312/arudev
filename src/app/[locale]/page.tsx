'use client'

import NavBar from '@/components/NavBar'
import profilePic from '@/public/me.png'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import ProjectHistory from './ProjectHistory'

export default function HomePage() {
  const t = useTranslations('HomePage')

  return (
    <div className='lg:mx-[10%]'>
      <NavBar />
      <main className='flex flex-col items-center justify-center gap-4 lg:flex-row'>
        <Image src={profilePic} alt='me' className='w-96 rounded-xl' />
        <div>
          <div className='h1'>{t('aru.title')}</div>
          <div className='h2'>{t('aru.description')}</div>
        </div>
      </main>
      <ProjectHistory />
    </div>
  )
}
