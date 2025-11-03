import { Project, Projects } from '@/projects'
import * as Dialog from '@radix-ui/react-dialog'
import dayjs from 'dayjs'
import { useTranslations } from 'next-intl'

export default function ProjectHistory() {
  const t = useTranslations('HomePage')
  const tp = useTranslations('HomePage.projects')
  const renderDate = (project: Project) => {
    const start = dayjs(project.startDate).format('MMM YYYY')
    const end = project.endDate ? dayjs(project.endDate).format('MMM YYYY') : 'Present'
    return `${start} - ${end}`
  }

  return (
    <div className='w-full'>
      <div className='h1 mx-auto mb-16 text-balance break-all'>{t('project.title')}</div>

      {/* Grid of project cards */}
      <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
        {Projects.map((project, index) => (
          <Dialog.Root key={index}>
            <Dialog.Trigger asChild>
              <div className='glass-effect cursor-pointer overflow-hidden rounded-lg transition-transform hover:scale-110'>
                {/* Project Image */}
                <div className='flex aspect-video w-full items-center justify-center bg-gray-100'>
                  <project.image className='h-full w-full object-cover' alt={tp(`${project.name}.name`)} />
                </div>

                {/* Project Info */}
                <div className='p-4'>
                  <h3 className='mb-2 text-lg font-semibold'>{tp(`${project.name}.name`)}</h3>
                  <p className='mb-3 line-clamp-3 text-sm text-gray-600'>{tp(`${project.name}.descriptionSmall`)}</p>

                  {/* Date range */}
                  <div className='mb-3 text-xs text-gray-500'>{renderDate(project)}</div>

                  {/* Tech tags */}
                  <div className='flex flex-wrap gap-1'>
                    {project.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span key={tagIndex} className='rounded-md bg-[#a78bfa] px-2 py-1 text-xs text-zinc-900'>
                        {tag.name}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className='rounded-md bg-gray-100 px-2 py-1 text-xs text-gray-600'>
                        +{project.tags.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </Dialog.Trigger>

            {/* Dialog Content */}
            <Dialog.Portal>
              <Dialog.Overlay className='fixed inset-0 z-80 bg-black/50 backdrop-blur-sm' />
              <Dialog.Content className='bg-base-2nd glass-effect fixed top-1/2 left-1/2 z-90 w-[90vw] max-w-md -translate-x-1/2 -translate-y-1/2 transform rounded-lg p-6'>
                <Dialog.Title className='mb-4 text-xl font-semibold'>{tp(`${project.name}.name`)}</Dialog.Title>

                <div className='mb-4'>
                  <project.image className='h-48 w-full rounded-lg object-cover' alt={tp(`${project.name}.name`)} />
                </div>

                <Dialog.Description className='mb-4 leading-relaxed'>
                  {tp(`${project.name}.descriptionSmall`)}
                </Dialog.Description>

                <div className='mb-4'>
                  <p className='mb-2 text-sm'>
                    <strong>Duration:</strong> {renderDate(project)}
                  </p>

                  <div className='mb-4'>
                    <p className='mb-2 text-sm font-medium'>Technologies:</p>
                    <div className='flex flex-wrap gap-2'>
                      {project.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className='rounded-md bg-[#a78bfa] px-3 py-1 text-sm text-zinc-900'>
                          {tag.name}
                        </span>
                      ))}
                    </div>
                  </div>

                  {project.url && (
                    <a
                      href={project.url}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='inline-block rounded-md bg-[#171717] px-4 py-2 text-white transition-colors hover:bg-[#404047]'
                    >
                      View Project
                    </a>
                  )}
                </div>

                <Dialog.Close asChild>
                  <button className='absolute top-4 right-4 cursor-pointer text-gray-400 transition-colors hover:text-white'>
                    X
                  </button>
                </Dialog.Close>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        ))}
      </div>
    </div>
  )
}
