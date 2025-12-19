import andorran from '@/assets/andorran.png'
import manyWorld from '@/assets/manyWorld.png'
import rodmap from '@/assets/rodmap.png'
import Android from '@/assets/tech/android.svg'
import aws from '@/assets/tech/aws.png'
import dynamodb from '@/assets/tech/DynamoDB.png'
import Firebase from '@/assets/tech/firebase.svg'
import Ionic from '@/assets/tech/ionic.svg'
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
import streamlit from '@/assets/tech/streamlit.svg'
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
import { FC } from 'react'

export type Project = {
  name: 'rodmap' | 'ignitix' | 'nano' | 'ghosts' | 'andorran' | 'many-world'
  image: FC<{ alt: string; className?: string }>
  url: string
  startDate: string
  endDate?: string
  tags: TechTag[]
  recommendation?: string
  type: 'work' | 'freelance'
}

type Props = { className?: string }
export const Icons = {
  firebase: (props: Props) => <Firebase {...props} />,
  nextjs: (props: Props) => <Nextjs {...props} />,
  react: (props: Props) => <React {...props} />,
  typescript: (props: Props) => <Typescript {...props} />,
  tailwindcss: (props: Props) => <Tailwindcss {...props} />,
  nodejs: (props: Props) => <Nodejs {...props} />,
  mongodb: (props: Props) => <Mongodb {...props} />,
  postgresql: (props: Props) => <Postgresql {...props} />,
  stripe: (props: Props) => <Stripe {...props} />,
  python: (props: Props) => <Python {...props} />,
  javascript: (props: Props) => <Javascript {...props} />,
  php: (props: Props) => <Php {...props} />,
  android: (props: Props) => <Android {...props} />,
  jetpackCompose: (props: Props) => <Jetpack {...props} />,
  wordpress: (props: Props) => <Wordpress {...props} />,
  yii2: (props: Props) => <Yii2 {...props} />,
  kotlin: (props: Props) => <Kotlin {...props} />,
  swift: (props: Props) => <Swift {...props} />,
  ionic: (props: Props) => <Ionic {...props} />,
  aws: (props: Props) => <Image src={aws} alt='AWS' {...props} />,
  java: (props: Props) => <Image src={java} alt='Java' {...props} />,
  dynamoDb: (props: Props) => <Image src={dynamodb} alt='DynamoDB' {...props} />,
  swiftui: (props: Props) => <Image src={swiftui} alt='SwiftUI' {...props} />,
  streamlit: (props: Props) => <Image src={streamlit} alt='Streamlit' {...props} />,
} satisfies Record<TechTagKeys, FC<Props>>

export const Projects: Project[] = [
  {
    name: 'ghosts',
    image: ({ alt, className }) => <Image src={ghosts} alt={alt} className={className} />,
    url: 'https://ghosts-art-legacy.com/',
    tags: [TechTag.react, TechTag.firebase, TechTag.nodejs, TechTag.typescript, TechTag.tailwindcss, TechTag.stripe],
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
    tags: [TechTag.react, TechTag.firebase, TechTag.typescript, TechTag.tailwindcss, TechTag.stripe, TechTag.nodejs],
    startDate: '2024-12-01',
    endDate: '2025-02-01',
    type: 'freelance',
  },
  {
    name: 'many-world',
    image: ({ alt, className }) => <Image src={manyWorld} alt={alt} className={className} />,
    url: 'https://many-world-boolean-frybjvkxvpsagywumwpyc9.streamlit.app/',
    tags: [TechTag.streamlit, TechTag.python],
    startDate: '2025-06-01',
    endDate: '2025-07-01',
    type: 'freelance',
  },
  // {
  //   name: 'ignitix',
  //   image: ({ alt, className }) => <Image src={ignitix} alt={alt} className={className} />,
  //   url: 'https://www.ignitix.com/',
  //   tags: [
  //     TechTag.react,
  //     TechTag.typescript,
  //     TechTag.tailwindcss,
  //     TechTag.java,
  //     TechTag.php,
  //     TechTag.postgresql,
  //     TechTag.android,
  //     TechTag.yii2,
  //     TechTag.ionic,
  //     TechTag.python,
  //   ],
  //   recommendation: '/ignitix.pdf',
  //   startDate: '2023-05-01',
  //   endDate: '2024-12-01',
  //   type: 'work',
  // },
  // {
  //   name: 'nano',
  //   image: ({ alt, className }) => <Image src={nano} alt={alt} className={className} />,
  //   url: 'https://ugc.stylink.com',
  //   tags: [
  //     TechTag.react,
  //     TechTag.firebase,
  //     TechTag.typescript,
  //     TechTag.tailwindcss,
  //     TechTag.android,
  //     TechTag.jetpackCompose,
  //     TechTag.aws,
  //     TechTag.dynamoDb,
  //     TechTag.swiftui,
  //     TechTag.swift,
  //     TechTag.kotlin,
  //   ],
  //   startDate: '2021-06-01',
  //   endDate: '2022-12-01',
  //   recommendation: '/nano.pdf',
  //   type: 'work',
  // },
]
