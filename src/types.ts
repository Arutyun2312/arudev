export enum TechTagType {
  LANGUAGE = 'language',
  FRONTEND = 'frontend',
  BACKEND = 'backend',
  SERVICE = 'service',
}

export type TechTagKeys =
  | 'firebase'
  | 'nextjs'
  | 'react'
  | 'typescript'
  | 'tailwindcss'
  | 'nodejs'
  | 'mongodb'
  | 'postgresql'
  | 'vitejs'
  | 'sanity'
  | 'streamlit'
  | 'stripe'
  | 'python'
  | 'javascript'
  | 'java'
  | 'php'
  | 'jetpackCompose'
  | 'android'
  | 'ios'
  | 'wordpress'
  | 'yii2'
  | 'kotlin'
  | 'swift'
  | 'mui'
  | 'aws'
  | 'dynamoDb'
  | 'swiftui'
  | 'ionic'
  | 'hyperv'
  | 'wsl'
export type TechTag = {
  key: TechTagKeys
  name: string
  type: TechTagType
  className: string
}
export const TechTag = {
  // Languages
  python: { key: 'python', name: 'Python', type: TechTagType.LANGUAGE, className: 'bg-blue-400' },
  javascript: { key: 'javascript', name: 'JavaScript', type: TechTagType.LANGUAGE, className: 'bg-blue-400' },
  typescript: { key: 'typescript', name: 'TypeScript', type: TechTagType.LANGUAGE, className: 'bg-blue-400' },
  java: { key: 'java', name: 'Java', type: TechTagType.LANGUAGE, className: 'bg-blue-400' },
  php: { key: 'php', name: 'PHP', type: TechTagType.LANGUAGE, className: 'bg-blue-400' },
  kotlin: { key: 'kotlin', name: 'Kotlin', type: TechTagType.LANGUAGE, className: 'bg-blue-400' },
  swift: { key: 'swift', name: 'Swift', type: TechTagType.LANGUAGE, className: 'bg-blue-400' },
  // Frontend
  nextjs: { key: 'nextjs', name: 'Next.js', type: TechTagType.FRONTEND, className: 'bg-gray-800' },
  react: { key: 'react', name: 'React', type: TechTagType.FRONTEND, className: 'bg-blue-500' },
  vitejs: { key: 'vitejs', name: 'Vite.js', type: TechTagType.FRONTEND, className: 'bg-blue-600' },
  streamlit: { key: 'streamlit', name: 'Streamlit', type: TechTagType.FRONTEND, className: 'bg-blue-800' },
  tailwindcss: {
    key: 'tailwindcss',
    name: 'Tailwind CSS',
    type: TechTagType.FRONTEND,
    className: 'bg-sky-400 text-gray-700',
  },
  jetpackCompose: {
    key: 'jetpackCompose',
    name: 'Jetpack Compose',
    type: TechTagType.FRONTEND,
    className: 'bg-purple-500',
  },
  mui: { key: 'mui', name: 'Material UI', type: TechTagType.FRONTEND, className: 'bg-blue-800' },
  swiftui: { key: 'swiftui', name: 'SwiftUI', type: TechTagType.FRONTEND, className: 'bg-blue-600' },
  ionic: { key: 'ionic', name: 'Ionic', type: TechTagType.FRONTEND, className: 'bg-blue-600' },
  // Backend
  nodejs: { key: 'nodejs', name: 'Node.js', type: TechTagType.BACKEND, className: 'bg-green-500' },
  mongodb: { key: 'mongodb', name: 'MongoDB', type: TechTagType.BACKEND, className: 'bg-green-700' },
  postgresql: { key: 'postgresql', name: 'PostgreSQL', type: TechTagType.BACKEND, className: 'bg-blue-700' },
  yii2: { key: 'yii2', name: 'Yii2', type: TechTagType.BACKEND, className: 'bg-gray-700' },
  dynamoDb: { key: 'dynamoDb', name: 'DynamoDB', type: TechTagType.BACKEND, className: 'bg-yellow-600' },
  hyperv: { key: 'hyperv', name: 'Hyper-V', type: TechTagType.BACKEND, className: 'bg-gray-700' },
  wsl: { key: 'wsl', name: 'WSL', type: TechTagType.BACKEND, className: 'bg-gray-700' },
  // Services
  aws: { key: 'aws', name: 'AWS', type: TechTagType.SERVICE, className: 'bg-orange-500' },
  firebase: { key: 'firebase', name: 'Firebase', type: TechTagType.SERVICE, className: 'bg-orange-500' },
  sanity: { key: 'sanity', name: 'Sanity', type: TechTagType.SERVICE, className: 'bg-gray-600' },
  stripe: { key: 'stripe', name: 'Stripe', type: TechTagType.SERVICE, className: 'bg-gray-900' },
  android: { key: 'android', name: 'Android', type: TechTagType.SERVICE, className: 'bg-green-600' },
  ios: { key: 'ios', name: 'iOS', type: TechTagType.SERVICE, className: 'bg-blue-600' },
  wordpress: { key: 'wordpress', name: 'WordPress', type: TechTagType.SERVICE, className: 'bg-blue-600' },
} satisfies Record<TechTagKeys, TechTag>
