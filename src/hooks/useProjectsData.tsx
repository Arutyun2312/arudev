import { TechTag, TechTagKeys } from '@/types'
import _400Books from '@assets/400books.png'
import andorran from '@assets/andorran.png'
import ignitix from '@assets/ignitix.png'
import modalLogic from '@assets/modal-logic.png'
import nano from '@assets/nano.jpg'
import rodmap from '@assets/rodmap.png'
import android from '@assets/tech/android.svg'
import firebase from '@assets/tech/firebase.svg'
import ios from '@assets/tech/ios.svg'
import java from '@assets/tech/java.png'
import javascript from '@assets/tech/javascript.svg'
import jetpack from '@assets/tech/jetpackcompose.svg'
import kotlin from '@assets/tech/kotlin.svg'
import mongodb from '@assets/tech/mongodb.svg'
import nextjs from '@assets/tech/nextjs.svg'
import nodejs from '@assets/tech/nodejs.svg'
import php from '@assets/tech/php.svg'
import postgresql from '@assets/tech/postgresql.svg'
import python from '@assets/tech/python.svg'
import react from '@assets/tech/react.svg'
import sanity from '@assets/tech/sanity.png'
import streamlit from '@assets/tech/streamlit.svg'
import stripe from '@assets/tech/stripe.svg'
import swift from '@assets/tech/swift.svg'
import tailwindcss from '@assets/tech/tailwind.svg'
import typescript from '@assets/tech/typescript.svg'
import vitejs from '@assets/tech/vitejs.svg'
import wordpress from '@assets/tech/wordpress.svg'
import yii2 from '@assets/tech/yii.svg'
import ghosts from '@assets/website.jpg'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { FC, useMemo } from 'react'

export type Project = {
  name: string
  image: FC<{ className?: string }>
  description: string
  url: string
  startDate: string
  endDate?: string
  tags: TechTag[]
  type: 'work' | 'freelance'
}

export const Icons: Record<TechTagKeys, FC<{ className?: string }>> = {
  firebase: () => <Image src={firebase} alt='Firebase' title='Firebase' className='size-3' />,
  nextjs: () => <Image src={nextjs} alt='NextJS' title='NextJS' className='size-3' />,
  sanity: () => <Image src={sanity} alt='Sanity' title='Sanity' className='size-3' />,
  react: () => <Image src={react} alt='React' title='React' className='size-3' />,
  typescript: () => <Image src={typescript} alt='TypeScript' title='TypeScript' className='size-3' />,
  tailwindcss: () => <Image src={tailwindcss} alt='TailwindCSS' title='TailwindCSS' className='size-3' />,
  nodejs: () => <Image src={nodejs} alt='NodeJS' title='NodeJS' className='size-3' />,
  mongodb: () => <Image src={mongodb} alt='MongoDB' title='MongoDB' className='size-3' />,
  postgresql: () => <Image src={postgresql} alt='PostgreSQL' title='PostgreSQL' className='size-3' />,
  vitejs: () => <Image src={vitejs} alt='ViteJS' title='ViteJS' className='size-3' />,
  streamlit: () => <Image src={streamlit} alt='Streamlit' className='size-3' />,
  stripe: () => <Image src={stripe} alt='Stripe' className='size-3' />,
  python: () => <Image src={python} alt='Python' title='Python' className='size-3' />,
  javascript: () => <Image src={javascript} alt='JavaScript' title='JavaScript' className='size-3' />,
  java: () => <Image src={java} alt='Java' title='Java' className='size-3' />,
  php: () => <Image src={php} alt='PHP' title='PHP' className='size-3' />,
  android: () => <Image src={android} alt='Android' title='Android' className='size-3' />,
  jetpackCompose: () => <Image src={jetpack} alt='Jetpack Compose' title='Jetpack Compose' className='size-3' />,
  wordpress: () => <Image src={wordpress} alt='WordPress' title='WordPress' className='size-3' />,
  ios: () => <Image src={ios} alt='iOS' title='iOS' className='size-3' />,
  yii2: () => <Image src={yii2} alt='Yii2' title='Yii2' className='size-3' />,
  kotlin: () => <Image src={kotlin} alt='Kotlin' title='Kotlin' className='size-3' />,
  swift: () => <Image src={swift} alt='Swift' title='Swift' className='size-3' />,
}

export const useProjectsData = (): Project[] => {
  const t = useTranslations('HomePage')

  return useMemo(
    () => [
      {
        name: t('projects.ghosts.name'),
        image: () => <Image src={ghosts} alt='Ghosts Art Legacy' className='w-96 rounded-xl' />,
        description: t('projects.ghosts.description'),
        url: 'https://ghosts-art-legacy.com/',
        tags: [
          TechTag.react,
          TechTag.firebase,
          TechTag.nodejs,
          TechTag.typescript,
          TechTag.tailwindcss,
          TechTag.vitejs,
          TechTag.sanity,
          TechTag.stripe,
        ],
        endDate: '2025-06-01',
        startDate: '2025-05-01',
        type: 'freelance',
      },
      {
        name: t('projects.andorran.name'),
        image: () => <Image src={andorran} alt={t('projects.andorran.name')} className='w-96 rounded-xl' />,
        description: t('projects.andorran.description'),
        url: 'https://andorrabookclub.com/',
        tags: [
          TechTag.react,
          TechTag.firebase,
          TechTag.typescript,
          TechTag.tailwindcss,
          TechTag.vitejs,
          TechTag.wordpress,
        ],
        startDate: '2025-03-01',
        endDate: '2025-05-01',
        type: 'freelance',
      },
      {
        name: t('projects.400books.name'),
        image: () => <Image src={_400Books} alt={t('projects.400books.name')} className='w-96 rounded-xl' />,
        description: t('projects.400books.description'),
        url: 'https://400books.com/',
        tags: [
          TechTag.react,
          TechTag.firebase,
          TechTag.typescript,
          TechTag.tailwindcss,
          TechTag.vitejs,
          TechTag.wordpress,
        ],
        startDate: '2025-03-01',
        endDate: '2025-05-01',
        type: 'freelance',
      },
      {
        name: t('projects.satsolver.name'),
        image: () => <Image src={modalLogic} alt={t('projects.satsolver.name')} className='w-96 rounded-xl' />,
        description: t('projects.satsolver.description'),
        url: 'https://satsolver.com/',
        tags: [TechTag.react, TechTag.firebase, TechTag.typescript, TechTag.tailwindcss, TechTag.streamlit],
        startDate: '2025-02-01',
        endDate: '2025-02-31',
        type: 'freelance',
      },
      {
        name: t('projects.rodmap.name'),
        image: () => <Image src={rodmap} alt={t('projects.rodmap.name')} className='w-96 rounded-xl' />,
        description: t('projects.rodmap.description'),
        url: 'https://rodmap.com/',
        tags: [TechTag.react, TechTag.firebase, TechTag.typescript, TechTag.tailwindcss, TechTag.vitejs],
        startDate: '2024-12-01',
        endDate: '2025-02-01',
        type: 'freelance',
      },
      {
        name: t('projects.ignitix.name'),
        image: () => (
          <Image src={ignitix} alt={t('projects.ignitix.name')} className='w-96 rounded-xl object-contain' />
        ),
        description: t('projects.ignitix.description'),
        url: 'https://www.ignitix.com/',
        tags: [
          TechTag.react,
          TechTag.firebase,
          TechTag.typescript,
          TechTag.tailwindcss,
          TechTag.vitejs,
          TechTag.java,
          TechTag.php,
          TechTag.postgresql,
          TechTag.android,
          TechTag.yii2,
        ],
        startDate: '2023-05-01',
        endDate: '2024-12-01',
        type: 'work',
      },
      {
        name: t('projects.nano.name'),
        image: () => <Image src={nano} alt={t('projects.nano.name')} className='w-96 rounded-xl object-contain' />,
        description: t('projects.nano.description'),
        url: 'https://ugc.stylink.com',
        tags: [
          TechTag.react,
          TechTag.firebase,
          TechTag.typescript,
          TechTag.tailwindcss,
          TechTag.vitejs,
          TechTag.android,
          TechTag.ios,
          TechTag.jetpackCompose,
        ],
        startDate: '2021-06-01',
        endDate: '2022-12-01',
        type: 'work',
      },
    ],
    [t],
  )
}
