export enum TechTagType {
  LANGUAGE = 'language',
  FRAMEWORK = 'framework',
  PLATFORM = 'platform',
  TOOL = 'tool',
}

export type TechTag = {
  name: string
  type: TechTagType
  className: string
}
export const TechTag = {
  firebase: { name: 'firebase', type: TechTagType.PLATFORM, className: 'bg-orange-500' },
  nextjs: { name: 'nextjs', type: TechTagType.FRAMEWORK, className: 'bg-gray-800' },
  react: { name: 'react', type: TechTagType.FRAMEWORK, className: 'bg-blue-500' },
  typescript: { name: 'typescript', type: TechTagType.LANGUAGE, className: 'bg-blue-400' },
  tailwindcss: { name: 'tailwindcss', type: TechTagType.FRAMEWORK, className: 'bg-sky-400 text-gray-700' },
  nodejs: { name: 'nodejs', type: TechTagType.PLATFORM, className: 'bg-green-500' },
  mongodb: { name: 'mongodb', type: TechTagType.PLATFORM, className: 'bg-green-700' },
  postgresql: { name: 'postgresql', type: TechTagType.PLATFORM, className: 'bg-blue-700' },
  vitejs: { name: 'vitejs', type: TechTagType.TOOL, className: 'bg-blue-600' },
} satisfies Record<string, TechTag>
