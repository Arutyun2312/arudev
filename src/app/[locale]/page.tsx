import profilePic from '@/assets/me.png'
import profilePic1 from '@/assets/me1.jpg'
import FooterView from '@/components/FooterView'
import TechTagView from '@/components/TechTagView'
import { TechTag } from '@/types'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import ProjectHistory from './ProjectHistory'
import Lines from './Lines'

const contactme = (
  <a
    href='mailto:arutyunef@gmail.com'
    className='ring-offset-background focus-visible:ring-ring border-input group relative inline-flex h-10 items-center justify-center overflow-hidden rounded-full border bg-transparent px-4 py-2 text-sm font-medium whitespace-nowrap text-gray-50 transition-transform duration-500 hover:scale-105 hover:bg-transparent hover:text-gray-50 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50'
  >
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className='lucide lucide-send mr-2 h-4 w-4'
    >
      <path d='M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z'></path>
      <path d='m21.854 2.147-10.94 10.939'></path>
    </svg>
    <span className='second-font'>Contact me</span>
    <div className='absolute inset-0 -translate-x-full transform bg-gradient-to-r from-transparent via-white to-transparent opacity-30 transition duration-700 group-hover:translate-x-full'></div>
  </a>
)

export default function HomePage() {
  const t = useTranslations('HomePage')
  const photo = (
    <div className='group relative w-18 lg:w-20'>
      <Image
        src={profilePic}
        alt='aru'
        priority
        className='rounded-full border object-cover transition-transform duration-500 hover:scale-125 hover:-rotate-12'
        loading='eager'
      />
      <Image
        src={profilePic1}
        alt='aru hover'
        priority
        className='absolute inset-0 z-10 rounded-full border object-cover opacity-0 transition-all duration-500 group-hover:opacity-100 hover:scale-125 hover:-rotate-12'
        loading='eager'
      />
    </div>
  )
  const profile = (
    <div className='flex items-center gap-4'>
      <div>{photo}</div>
      <div>
        <div className='h3'>{t('aru.title')}</div>
        <div className='h4'>
          <span className='mr-2 inline'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='85.5 0 342 342'
              className='mb-1 inline h-5 w-5 rounded-full'
            >
              <path fill='#FFF' d='M0 114h513v114H0z' />
              <path fill='#D80027' d='M0 0h513v114H0zM0 228h513v114H0z' />
            </svg>
          </span>
          {'Based in Vienna'}
        </div>
      </div>
    </div>
  )
  const buttons = (
    <div className='flex w-full justify-center text-center'>
      <div className='flex w-full justify-center gap-4'>
        <a href='https://www.linkedin.com/in/arutyun-e-1a312a13b/'>
          <button className='ring-offset-background focus-visible:ring-ring border-input group relative inline-flex h-10 items-center justify-center overflow-hidden rounded-full border bg-transparent p-2 text-sm font-medium whitespace-nowrap text-gray-50 transition-transform duration-500 hover:scale-105 hover:-rotate-12 hover:bg-transparent hover:text-gray-50 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='1'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='lucide lucide-linkedin'
            >
              <path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z'></path>
              <rect width='4' height='12' x='2' y='9'></rect>
              <circle cx='4' cy='4' r='2'></circle>
            </svg>
            <div className='absolute inset-0 -translate-x-full transform bg-gradient-to-r from-transparent via-white to-transparent opacity-30 transition duration-700 group-hover:translate-x-full'></div>
          </button>
        </a>
        {contactme}
        <a href='/cv.pdf' target='_blank' rel='noopener noreferrer'>
          <button className='ring-offset-background focus-visible:ring-ring border-input group relative inline-flex h-10 items-center justify-center overflow-hidden rounded-full border bg-transparent p-2 text-sm font-medium whitespace-nowrap text-gray-50 transition-transform duration-500 hover:scale-105 hover:-rotate-12 hover:bg-transparent hover:text-gray-50 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='1'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='lucide lucide-file-text'
            >
              <path d='M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z'></path>
              <path d='M14 2v4a2 2 0 0 0 2 2h4'></path>
              <path d='M10 9H8'></path>
              <path d='M16 13H8'></path>
              <path d='M16 17H8'></path>
            </svg>
            <div className='absolute inset-0 -translate-x-full transform bg-gradient-to-r from-transparent via-white to-transparent opacity-30 transition duration-700 group-hover:translate-x-full'></div>
          </button>
        </a>
      </div>
    </div>
  )
  return (
    <div className='hide-scrollbar max-h-screen overflow-auto pt-20'>
      <div className='mx-auto flex h-full max-w-3xl flex-wrap justify-between gap-6 p-10 px-4 sm:py-20 md:py-20 lg:px-8 lg:py-40 lg:pt-20'>
        <main className='flex w-full flex-col gap-4'>
          {profile}
          <div className='h1 w-full gap-2 text-center leading-snug text-[#e7d2f9]'>
            <span className='aspire'>Full Stack</span> <br /> Android and Web <br /> Developer <br />
            <div className='h3 mt-3 flex flex-col items-center gap-1 sm:flex-row md:justify-center'>
              <div>With background in</div>
              <div className='data-science'>Data Science</div>
            </div>
          </div>
          {buttons}
        </main>
        <Lines />
        <section className='my-8 flex flex-col gap-4'>
          <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4'></div>
          <div className='relative mt-6 w-full'>
            <div className='flex flex-wrap'>
              {Object.values(TechTag).map((tag, i) => (
                <TechTagView key={i} tag={tag} />
              ))}
            </div>
          </div>
        </section>
        {/* <Contacts /> */}
        <div id='projects' className='bg-primary h-0.5 w-1/3 rounded-full' />
        <ProjectHistory />
        {/* <GreetDialog /> */}
        <FooterView />
      </div>
    </div>
  )
}
