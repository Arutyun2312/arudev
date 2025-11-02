import andorran from '@/assets/andorran.png'
import ignitix from '@/assets/ignitix.png'
import nano from '@/assets/nano.jpg'
import rodmap from '@/assets/rodmap.png'
import Android from '@/assets/tech/android.svg'
import aws from '@/assets/tech/aws.png'
import dynamodb from '@/assets/tech/DynamoDB.png'
import Firebase from '@/assets/tech/firebase.svg'
import Ionic from '@/assets/tech/ionic.svg'
import Ios from '@/assets/tech/ios.svg'
import java from '@/assets/tech/java.png'
import Javascript from '@/assets/tech/javascript.svg'
import Jetpack from '@/assets/tech/jetpackcompose.svg'
import Kotlin from '@/assets/tech/kotlin.svg'
import Mongodb from '@/assets/tech/mongodb.svg'
import Nextjs from '@/assets/tech/nextjs.svg'
import Nodejs from '@/assets/tech/nodejs.svg'
import Php from '@/assets/tech/php.svg'
import Postgresql from '@/assets/tech/postgresql.svg'
import Python from '@/assets/tech/python.svg'
import React from '@/assets/tech/react.svg'
import Stripe from '@/assets/tech/stripe.svg'
import Swift from '@/assets/tech/swift.svg'
import swiftui from '@/assets/tech/swiftui.png'
import Tailwindcss from '@/assets/tech/tailwind.svg'
import Typescript from '@/assets/tech/typescript.svg'
import Wordpress from '@/assets/tech/wordpress.svg'
import Yii2 from '@/assets/tech/yii.svg'
import ghosts from '@/assets/website.jpg'
import { TechTag, TechTagKeys } from '@/types'
import Image from 'next/image'
import { FC, HTMLAttributes, ReactElement } from 'react'

export type Project = {
  name: 'rodmap' | 'ignitix' | 'nano' | 'ghosts' | 'andorran'
  image: FC<{ alt: string; className?: string }>
  url: string
  startDate: string
  endDate?: string
  tags: TechTag[]
  recommendation?: string
  type: 'work' | 'freelance'
}

export const Icons: Record<TechTagKeys, ReactElement<HTMLAttributes<object>>> = {
  firebase: <Firebase />,
  nextjs: <Nextjs />,
  react: <React />,
  typescript: <Typescript />,
  tailwindcss: <Tailwindcss />,
  nodejs: <Nodejs />,
  mongodb: <Mongodb />,
  postgresql: <Postgresql />,
  stripe: <Stripe />,
  python: <Python />,
  javascript: <Javascript />,
  php: <Php />,
  android: <Android />,
  jetpackCompose: <Jetpack />,
  wordpress: <Wordpress />,
  yii2: <Yii2 />,
  kotlin: <Kotlin />,
  swift: <Swift />,
  ionic: <Ionic />,
  aws: <Image src={aws} alt='AWS' />,
  java: <Image src={java} alt='Java' />,
  dynamoDb: <Image src={dynamodb} alt='DynamoDB' />,
  swiftui: <Image src={swiftui} alt='SwiftUI' />,
}

export const Projects: Project[] = [
  {
    name: 'ghosts',
    image: ({ alt, className }) => <Image src={ghosts} alt={alt} className={className} />,
    url: 'https://ghosts-art-legacy.com/',
    tags: [
      TechTag.react,
      TechTag.firebase,
      TechTag.nodejs,
      TechTag.typescript,
      TechTag.tailwindcss,
      TechTag.stripe,
    ],
    endDate: '2025-06-01',
    startDate: '2025-05-01',
    type: 'freelance',
  },
  {
    name: 'andorran',
    image: ({ alt, className }) => <Image src={andorran} alt={alt} className={className} />,
    url: 'https://andorrabookclub.com/',
    tags: [TechTag.react, TechTag.firebase, TechTag.typescript, TechTag.tailwindcss, TechTag.wordpress],
    startDate: '2025-03-01',
    endDate: '2025-05-01',
    type: 'freelance',
  },
  {
    name: 'rodmap',
    image: ({ alt, className }) => <Image src={rodmap} alt={alt} className={className} />,
    url: 'https://rodmap.com/',
    tags: [
      TechTag.react,
      TechTag.firebase,
      TechTag.typescript,
      TechTag.tailwindcss,
      TechTag.stripe,
      TechTag.nodejs,
    ],
    startDate: '2024-12-01',
    endDate: '2025-02-01',
    type: 'freelance',
  },
  {
    name: 'ignitix',
    image: ({ alt, className }) => <Image src={ignitix} alt={alt} className={className} />,
    url: 'https://www.ignitix.com/',
    tags: [
      TechTag.react,
      TechTag.typescript,
      TechTag.tailwindcss,
      TechTag.java,
      TechTag.php,
      TechTag.postgresql,
      TechTag.android,
      TechTag.yii2,
      TechTag.ionic,
      TechTag.python,
    ],
    recommendation: '/ignitix.pdf',
    startDate: '2023-05-01',
    endDate: '2024-12-01',
    type: 'work',
  },
  {
    name: 'nano',
    image: ({ alt, className }) => <Image src={nano} alt={alt} className={className} />,
    url: 'https://ugc.stylink.com',
    tags: [
      TechTag.react,
      TechTag.firebase,
      TechTag.typescript,
      TechTag.tailwindcss,
      TechTag.android,
      TechTag.jetpackCompose,
      TechTag.aws,
      TechTag.dynamoDb,
      TechTag.swiftui,
      TechTag.swift,
      TechTag.kotlin,
    ],
    startDate: '2021-06-01',
    endDate: '2022-12-01',
    recommendation: '/nano.pdf',
    type: 'work',
  },
]
