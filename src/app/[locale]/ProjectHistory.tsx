import Image from 'next/image'
import ProjectItem, { Project } from './ProjectItem'
import website from '@/public/website.jpg'
import { useTranslations } from 'next-intl'

const projects: Project[] = [
  {
    name: 'Project 1',
    image: () => <Image src={website} alt='Project 1' className='w-96 rounded-xl' />,
    description: 'Description of Project 1',
    url: 'https://ghosts-art-legacy.com/',
  },
  {
    name: 'Project 2',
    image: () => <Image src={website} alt='Project 2' className='w-96 rounded-xl' />,
    description: 'Description of Project 2',
    url: 'https://ghosts-art-legacy.com/',
  },
]

export default function ProjectHistory() {
  const t = useTranslations('HomePage')
  return (
    <div className='flex flex-col gap-4'>
      <div className='h1 mx-auto'>{t('project.title')}</div>
      {projects.map((project, index) => (
        <ProjectItem key={index} project={project} />
      ))}
    </div>
  )
}
