import { TechTag, TechTagKeys } from '@/types'
import { css } from '@/util'
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
import mui from '@assets/tech/mui.svg'
import aws from '@assets/tech/aws.png'
import dynamodb from '@assets/tech/DynamoDB.png'
import swiftui from '@assets/tech/swiftui.png'
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
  firebase: () => <Image src={firebase} alt='Firebase' title='Firebase' className='size-4' />,
  nextjs: () => <Image src={nextjs} alt='NextJS' title='NextJS' className='size-4' />,
  sanity: () => <Image src={sanity} alt='Sanity' title='Sanity' className='size-4' />,
  react: () => <Image src={react} alt='React' title='React' className='size-4' />,
  typescript: () => <Image src={typescript} alt='TypeScript' title='TypeScript' className='size-4' />,
  tailwindcss: () => <Image src={tailwindcss} alt='TailwindCSS' title='TailwindCSS' className='size-4' />,
  nodejs: () => <Image src={nodejs} alt='NodeJS' title='NodeJS' className='size-4' />,
  mongodb: () => <Image src={mongodb} alt='MongoDB' title='MongoDB' className='size-4' />,
  postgresql: () => <Image src={postgresql} alt='PostgreSQL' title='PostgreSQL' className='size-4' />,
  vitejs: () => <Image src={vitejs} alt='ViteJS' title='ViteJS' className='size-4' />,
  streamlit: () => <Image src={streamlit} alt='Streamlit' className='size-4' />,
  stripe: () => <Image src={stripe} alt='Stripe' className='size-4' />,
  python: () => <Image src={python} alt='Python' title='Python' className='size-4' />,
  javascript: () => <Image src={javascript} alt='JavaScript' title='JavaScript' className='size-4' />,
  java: () => <Image src={java} alt='Java' title='Java' className='size-4' />,
  php: () => <Image src={php} alt='PHP' title='PHP' className='size-4' />,
  android: () => <Image src={android} alt='Android' title='Android' className='size-4' />,
  jetpackCompose: () => <Image src={jetpack} alt='Jetpack Compose' title='Jetpack Compose' className='size-4' />,
  wordpress: () => <Image src={wordpress} alt='WordPress' title='WordPress' className='size-4' />,
  ios: () => <Image src={ios} alt='iOS' title='iOS' className='size-4' />,
  yii2: () => <Image src={yii2} alt='Yii2' title='Yii2' className='size-4' />,
  kotlin: () => <Image src={kotlin} alt='Kotlin' title='Kotlin' className='size-4' />,
  swift: () => <Image src={swift} alt='Swift' title='Swift' className='size-4' />,
  mui: () => <Image src={mui} alt='Material UI' title='Material UI' className='size-4' />,
  aws: () => <Image src={aws} alt='AWS' title='AWS' className='size-4 object-contain' />,
  dynamoDb: () => <Image src={dynamodb} alt='DynamoDB' title='DynamoDB' className='size-4' />,
  swiftui: () => <Image src={swiftui} alt='SwiftUI' title='SwiftUI' className='size-4' />,
}

export const useProjectsData = (): Project[] => {
  const t = useTranslations('HomePage')

  return useMemo(
    () => [
      {
        name: t('projects.ghosts.name'),
        image: ({ className }) => <Image src={ghosts} alt='Ghosts Art Legacy' className={className} />,
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
        image: ({ className }) => <Image src={andorran} alt={t('projects.andorran.name')} className={className} />,
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
        image: ({ className }) => <Image src={_400Books} alt={t('projects.400books.name')} className={className} />,
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
        image: ({ className }) => <Image src={modalLogic} alt={t('projects.satsolver.name')} className={className} />,
        description: t('projects.satsolver.description'),
        url: 'https://satsolver.com/',
        tags: [TechTag.react, TechTag.firebase, TechTag.typescript, TechTag.tailwindcss, TechTag.streamlit],
        startDate: '2025-02-01',
        endDate: '2025-02-31',
        type: 'freelance',
      },
      {
        name: t('projects.rodmap.name'),
        image: ({ className }) => <Image src={rodmap} alt={t('projects.rodmap.name')} className={className} />,
        description: t('projects.rodmap.description'),
        url: 'https://rodmap.com/',
        tags: [TechTag.react, TechTag.firebase, TechTag.typescript, TechTag.tailwindcss, TechTag.vitejs],
        startDate: '2024-12-01',
        endDate: '2025-02-01',
        type: 'freelance',
      },
      {
        name: t('projects.ignitix.name'),
        image: ({ className }) => (
          <Image src={ignitix} alt={t('projects.ignitix.name')} className={css('object-contain', className)} />
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
        image: ({ className }) => (
          <Image src={nano} alt={t('projects.nano.name')} className={css('object-contain', className)} />
        ),
        description: t('projects.nano.description'),
        url: 'https://ugc.stylink.com',
        tags: [
          TechTag.react,
          TechTag.firebase,
          TechTag.typescript,
          TechTag.tailwindcss,
          TechTag.android,
          TechTag.ios,
          TechTag.jetpackCompose,
          TechTag.mui,
          TechTag.aws,
          TechTag.dynamoDb,
          TechTag.swiftui,
        ],
        startDate: '2021-06-01',
        endDate: '2022-12-01',
        type: 'work',
      },
    ],
    [t],
  )
}
