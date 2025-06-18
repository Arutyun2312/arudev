import Image from 'next/image'
import ProjectItem, { Project } from './ProjectItem'
import website from '@/public/website.jpg'
import { useTranslations } from 'next-intl'
import { TechTag } from '@/types'

export default function ProjectHistory() {
  const t = useTranslations('HomePage')

  const projects: Project[] = [
    {
      name: t('projects.ghosts.name'),
      image: () => <Image src={website} alt='Project 1' className='w-96 rounded-xl' />,
      description: t('projects.ghosts.description'),
      url: 'https://ghosts-art-legacy.com/',
      tags: [TechTag.react, TechTag.firebase, TechTag.typescript, TechTag.tailwindcss, TechTag.vitejs, TechTag.sanity],
    },
    {
      name: t('projects.ghosts.name'),
      image: () => <Image src={website} alt='Project 2' className='w-96 rounded-xl' />,
      description: t('projects.ghosts.description'),
      url: 'https://ghosts-art-legacy.com/',
      tags: [TechTag.react, TechTag.firebase, TechTag.typescript, TechTag.tailwindcss, TechTag.vitejs],
    },
  ]

  return (
    <div className='flex flex-col gap-4'>
      <div className='h1 mx-auto'>{t('project.title')}</div>
      {projects.map((project, index) => (
        <ProjectItem key={index} project={project} />
      ))}
    </div>
  )
}
