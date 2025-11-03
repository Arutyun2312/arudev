import profilePic from '@/assets/me.png'
import profilePic1 from '@/assets/me1.jpg'
import FooterView from '@/components/FooterView'
import TechTagView from '@/components/TechTagView'
import { TechTag } from '@/types'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import ProjectHistory from './ProjectHistory'
import Lines from './Lines'
import modul from 'assets/modul.jpg'
import ais from 'assets/ais.webp'

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
  const skills = false && (
    <div className='section'>
      <div className='h1 mb-8 text-balance break-all'>Skills</div>
      <div className='mt-8 h-auto justify-center gap-6 md:columns-2'>
        <div
          data-v-9d11439c=''
          className='bg-base-2nd fade-in glass-effect mt-0 w-full rounded-md p-5'
          data-state='playing'
        >
          <h3 data-v-9d11439c='' className='text-font-pr text-xl font-semibold'>
            Backend
          </h3>
          <p data-v-9d11439c='' className='text-font-2nd mt-2 w-full break-words whitespace-pre-line'>
            I love problem-solving and building complex systems. I strive to create scalable, reliable, and secure
            solutions.
          </p>
          <div data-v-9d11439c='' className='mt-4 flex flex-wrap'>
            <div data-v-9d11439c='' className='m-1 my-2 flex overflow-hidden rounded-md'>
              <img
                alt='TypeScript'
                data-nuxt-img=''
                srcSet='/_vercel/image?url=%2Fimgs%2Fskills%2FTypescript_logo_2020.svg&w=1536&q=100 1x, /_vercel/image?url=%2Fimgs%2Fskills%2FTypescript_logo_2020.svg&w=1536&q=100 2x'
                src='/_vercel/image?url=%2Fimgs%2Fskills%2FTypescript_logo_2020.svg&w=1536&q=100'
                className='h-10 w-10 bg-transparent object-contain px-1'
                data-pd-tooltip='true'
              />
            </div>
            <div data-v-9d11439c='' className='m-1 my-2 flex overflow-hidden rounded-md'>
              <img
                alt='NodeJS'
                data-nuxt-img=''
                srcSet='/_vercel/image?url=%2Fimgs%2Fskills%2Fnode.webp&w=1536&q=100 1x, /_vercel/image?url=%2Fimgs%2Fskills%2Fnode.webp&w=1536&q=100 2x'
                src='/_vercel/image?url=%2Fimgs%2Fskills%2Fnode.webp&w=1536&q=100'
                className='h-10 w-10 bg-transparent object-contain px-1'
                data-pd-tooltip='true'
              />
            </div>
            <div data-v-9d11439c='' className='m-1 my-2 flex overflow-hidden rounded-md'>
              <img
                alt='Golang'
                data-nuxt-img=''
                srcSet='/_vercel/image?url=%2Fimgs%2Fskills%2Fgolang.png&w=1536&q=100 1x, /_vercel/image?url=%2Fimgs%2Fskills%2Fgolang.png&w=1536&q=100 2x'
                src='/_vercel/image?url=%2Fimgs%2Fskills%2Fgolang.png&w=1536&q=100'
                className='h-10 w-10 bg-transparent object-contain px-1'
                data-pd-tooltip='true'
              />
            </div>
            <div data-v-9d11439c='' className='m-1 my-2 flex overflow-hidden rounded-md'>
              <img
                alt='PostgreSQL'
                data-nuxt-img=''
                srcSet='/_vercel/image?url=%2Fimgs%2Fskills%2Fpostgresql.png&w=1536&q=100 1x, /_vercel/image?url=%2Fimgs%2Fskills%2Fpostgresql.png&w=1536&q=100 2x'
                src='/_vercel/image?url=%2Fimgs%2Fskills%2Fpostgresql.png&w=1536&q=100'
                className='h-10 w-10 bg-transparent object-contain px-1'
                data-pd-tooltip='true'
              />
            </div>
            <div data-v-9d11439c='' className='m-1 my-2 flex overflow-hidden rounded-md'>
              <img
                alt='MongoDB'
                data-nuxt-img=''
                srcSet='/_vercel/image?url=%2Fimgs%2Fskills%2Fmongodb.svg&w=1536&q=100 1x, /_vercel/image?url=%2Fimgs%2Fskills%2Fmongodb.svg&w=1536&q=100 2x'
                src='/_vercel/image?url=%2Fimgs%2Fskills%2Fmongodb.svg&w=1536&q=100'
                className='h-10 w-10 bg-transparent object-contain px-1'
                data-pd-tooltip='true'
              />
            </div>
            <div data-v-9d11439c='' className='m-1 my-2 flex overflow-hidden rounded-md'>
              <img
                alt='Kafka'
                data-nuxt-img=''
                srcSet='/_vercel/image?url=%2Fimgs%2Fskills%2Fkafka.png&w=1536&q=100 1x, /_vercel/image?url=%2Fimgs%2Fskills%2Fkafka.png&w=1536&q=100 2x'
                src='/_vercel/image?url=%2Fimgs%2Fskills%2Fkafka.png&w=1536&q=100'
                className='h-10 w-10 bg-transparent object-contain px-1'
                data-pd-tooltip='true'
              />
            </div>
            <div data-v-9d11439c='' className='m-1 my-2 flex overflow-hidden rounded-md'>
              <img
                alt='GraphQL'
                data-nuxt-img=''
                srcSet='/_vercel/image?url=%2Fimgs%2Fskills%2Fgraphql.png&w=1536&q=100 1x, /_vercel/image?url=%2Fimgs%2Fskills%2Fgraphql.png&w=1536&q=100 2x'
                src='/_vercel/image?url=%2Fimgs%2Fskills%2Fgraphql.png&w=1536&q=100'
                className='h-10 w-10 bg-transparent object-contain px-1'
                data-pd-tooltip='true'
              />
            </div>
            <div data-v-9d11439c='' className='m-1 my-2 flex overflow-hidden rounded-md'>
              <img
                alt='Laravel'
                data-nuxt-img=''
                srcSet='/_vercel/image?url=%2Fimgs%2Fskills%2Flaravel.png&w=1536&q=100 1x, /_vercel/image?url=%2Fimgs%2Fskills%2Flaravel.png&w=1536&q=100 2x'
                src='/_vercel/image?url=%2Fimgs%2Fskills%2Flaravel.png&w=1536&q=100'
                className='h-10 w-10 bg-transparent object-contain px-1'
                data-pd-tooltip='true'
              />
            </div>
            <div data-v-9d11439c='' className='m-1 my-2 flex overflow-hidden rounded-md'>
              <img
                alt='JavaScript'
                data-nuxt-img=''
                srcSet='/_vercel/image?url=%2Fimgs%2Fskills%2Fjavascript.png&w=1536&q=100 1x, /_vercel/image?url=%2Fimgs%2Fskills%2Fjavascript.png&w=1536&q=100 2x'
                src='/_vercel/image?url=%2Fimgs%2Fskills%2Fjavascript.png&w=1536&q=100'
                className='h-10 w-10 bg-transparent object-contain px-1'
                data-pd-tooltip='true'
              />
            </div>
            <div data-v-9d11439c='' className='m-1 my-2 flex overflow-hidden rounded-md'>
              <img
                alt='BullMQ'
                data-nuxt-img=''
                srcSet='/_vercel/image?url=%2Fimgs%2Fskills%2Fbullmq.png&w=1536&q=100 1x, /_vercel/image?url=%2Fimgs%2Fskills%2Fbullmq.png&w=1536&q=100 2x'
                src='/_vercel/image?url=%2Fimgs%2Fskills%2Fbullmq.png&w=1536&q=100'
                className='h-10 w-10 bg-transparent object-contain px-1'
                data-pd-tooltip='true'
              />
            </div>
            <div data-v-9d11439c='' className='m-1 my-2 flex overflow-hidden rounded-md'>
              <img
                alt='Git'
                data-nuxt-img=''
                srcSet='/_vercel/image?url=%2Fimgs%2Fskills%2Fgit.png&w=1536&q=100 1x, /_vercel/image?url=%2Fimgs%2Fskills%2Fgit.png&w=1536&q=100 2x'
                src='/_vercel/image?url=%2Fimgs%2Fskills%2Fgit.png&w=1536&q=100'
                className='h-10 w-10 bg-transparent object-contain px-1'
                data-pd-tooltip='true'
              />
            </div>
            <div data-v-9d11439c='' className='m-1 my-2 flex overflow-hidden rounded-md'>
              <img
                alt='GitHub'
                data-nuxt-img=''
                srcSet='/_vercel/image?url=%2Fimgs%2Fskills%2Fgithub.png&w=1536&q=100 1x, /_vercel/image?url=%2Fimgs%2Fskills%2Fgithub.png&w=1536&q=100 2x'
                src='/_vercel/image?url=%2Fimgs%2Fskills%2Fgithub.png&w=1536&q=100'
                className='h-10 w-10 bg-transparent object-contain px-1'
                data-pd-tooltip='true'
              />
            </div>
          </div>
        </div>
        <div
          data-v-9d11439c=''
          className='bg-base-2nd fade-in glass-effect mt-6 w-full rounded-md p-5'
          data-state='playing'
        >
          <h3 data-v-9d11439c='' className='text-font-pr text-xl font-semibold'>
            Cloud &amp; DevOps
          </h3>
          <p data-v-9d11439c='' className='text-font-2nd mt-2 w-full break-words whitespace-pre-line'>
            I have deployed and managed various applications using tools such as AWS, GCP, and other cloud services.
          </p>
          <div data-v-9d11439c='' className='mt-4 flex flex-wrap'>
            <div data-v-9d11439c='' className='m-1 my-2 flex overflow-hidden rounded-md'>
              <img
                alt='AWS'
                data-nuxt-img=''
                srcSet='/_vercel/image?url=%2Fimgs%2Fskills%2Faws.webp&w=1536&q=100 1x, /_vercel/image?url=%2Fimgs%2Fskills%2Faws.webp&w=1536&q=100 2x'
                src='/_vercel/image?url=%2Fimgs%2Fskills%2Faws.webp&w=1536&q=100'
                className='h-10 w-10 bg-transparent object-contain px-1'
                data-pd-tooltip='true'
              />
            </div>
            <div data-v-9d11439c='' className='m-1 my-2 flex overflow-hidden rounded-md'>
              <img
                alt='Linux'
                data-nuxt-img=''
                srcSet='/_vercel/image?url=%2Fimgs%2Fskills%2Flinux.png&w=1536&q=100 1x, /_vercel/image?url=%2Fimgs%2Fskills%2Flinux.png&w=1536&q=100 2x'
                src='/_vercel/image?url=%2Fimgs%2Fskills%2Flinux.png&w=1536&q=100'
                className='h-10 w-10 bg-transparent object-contain px-1'
                data-pd-tooltip='true'
              />
            </div>
            <div data-v-9d11439c='' className='m-1 my-2 flex overflow-hidden rounded-md'>
              <img
                alt='Docker'
                data-nuxt-img=''
                srcSet='/_vercel/image?url=%2Fimgs%2Fskills%2Fdocker.jpg&w=1536&q=100 1x, /_vercel/image?url=%2Fimgs%2Fskills%2Fdocker.jpg&w=1536&q=100 2x'
                src='/_vercel/image?url=%2Fimgs%2Fskills%2Fdocker.jpg&w=1536&q=100'
                className='h-10 w-10 bg-transparent object-contain px-1'
                data-pd-tooltip='true'
              />
            </div>
            <div data-v-9d11439c='' className='m-1 my-2 flex overflow-hidden rounded-md'>
              <img
                alt='Kubernetes'
                data-nuxt-img=''
                srcSet='/_vercel/image?url=%2Fimgs%2Fskills%2FK8S-logo.png&w=1536&q=100 1x, /_vercel/image?url=%2Fimgs%2Fskills%2FK8S-logo.png&w=1536&q=100 2x'
                src='/_vercel/image?url=%2Fimgs%2Fskills%2FK8S-logo.png&w=1536&q=100'
                className='h-10 w-10 bg-transparent object-contain px-1'
                data-pd-tooltip='true'
              />
            </div>
            <div data-v-9d11439c='' className='m-1 my-2 flex overflow-hidden rounded-md'>
              <img
                alt='Vercel'
                data-nuxt-img=''
                srcSet='/_vercel/image?url=%2Fimgs%2Fskills%2Fvercel.png&w=1536&q=100 1x, /_vercel/image?url=%2Fimgs%2Fskills%2Fvercel.png&w=1536&q=100 2x'
                src='/_vercel/image?url=%2Fimgs%2Fskills%2Fvercel.png&w=1536&q=100'
                className='h-10 w-10 bg-transparent object-contain px-1'
                data-pd-tooltip='true'
              />
            </div>
            <div data-v-9d11439c='' className='m-1 my-2 flex overflow-hidden rounded-md'>
              <img
                alt='Terraform'
                data-nuxt-img=''
                srcSet='/_vercel/image?url=%2Fimgs%2Fskills%2Fterraform.png&w=1536&q=100 1x, /_vercel/image?url=%2Fimgs%2Fskills%2Fterraform.png&w=1536&q=100 2x'
                src='/_vercel/image?url=%2Fimgs%2Fskills%2Fterraform.png&w=1536&q=100'
                className='h-10 w-10 bg-transparent object-contain px-1'
                data-pd-tooltip='true'
              />
            </div>
            <div data-v-9d11439c='' className='m-1 my-2 flex overflow-hidden rounded-md'>
              <img
                alt='BigQuery'
                data-nuxt-img=''
                srcSet='/_vercel/image?url=%2Fimgs%2Fskills%2Fbigquery.webp&w=1536&q=100 1x, /_vercel/image?url=%2Fimgs%2Fskills%2Fbigquery.webp&w=1536&q=100 2x'
                src='/_vercel/image?url=%2Fimgs%2Fskills%2Fbigquery.webp&w=1536&q=100'
                className='h-10 w-10 bg-transparent object-contain px-1'
                data-pd-tooltip='true'
              />
            </div>
            <div data-v-9d11439c='' className='m-1 my-2 flex overflow-hidden rounded-md'>
              <img
                alt='Redis'
                data-nuxt-img=''
                srcSet='/_vercel/image?url=%2Fimgs%2Fskills%2Fredis.webp&w=1536&q=100 1x, /_vercel/image?url=%2Fimgs%2Fskills%2Fredis.webp&w=1536&q=100 2x'
                src='/_vercel/image?url=%2Fimgs%2Fskills%2Fredis.webp&w=1536&q=100'
                className='h-10 w-10 bg-transparent object-contain px-1'
                data-pd-tooltip='true'
              />
            </div>
            <div data-v-9d11439c='' className='m-1 my-2 flex overflow-hidden rounded-md'>
              <img
                alt='DataDog'
                data-nuxt-img=''
                srcSet='/_vercel/image?url=%2Fimgs%2Fskills%2Fdatadog.png&w=1536&q=100 1x, /_vercel/image?url=%2Fimgs%2Fskills%2Fdatadog.png&w=1536&q=100 2x'
                src='/_vercel/image?url=%2Fimgs%2Fskills%2Fdatadog.png&w=1536&q=100'
                className='h-10 w-10 bg-transparent object-contain px-1'
                data-pd-tooltip='true'
              />
            </div>
            <div data-v-9d11439c='' className='m-1 my-2 flex overflow-hidden rounded-md'>
              <img
                alt='Cloudflare'
                data-nuxt-img=''
                srcSet='/_vercel/image?url=%2Fimgs%2Fskills%2Fcloudflare.png&w=1536&q=100 1x, /_vercel/image?url=%2Fimgs%2Fskills%2Fcloudflare.png&w=1536&q=100 2x'
                src='/_vercel/image?url=%2Fimgs%2Fskills%2Fcloudflare.png&w=1536&q=100'
                className='h-10 w-10 bg-transparent object-contain px-1'
                data-pd-tooltip='true'
              />
            </div>
          </div>
        </div>
        <div
          data-v-9d11439c=''
          className='bg-base-2nd fade-in glass-effect mt-6 w-full break-before-column rounded-md p-5 md:mt-10'
          data-state='playing'
        >
          <h3 data-v-9d11439c='' className='text-font-pr text-xl font-semibold'>
            Frontend &amp; Design
          </h3>
          <p data-v-9d11439c='' className='text-font-2nd mt-2 w-full break-words whitespace-pre-line'>
            I'm passionate about design, animation, and interactions, always aiming to build fun websites with great
            user experiences.
          </p>
          <div data-v-9d11439c='' className='mt-4 flex flex-wrap'>
            <div data-v-9d11439c='' className='m-1 my-2 flex overflow-hidden rounded-md'>
              <img
                alt='Vue3'
                data-nuxt-img=''
                srcSet='/_vercel/image?url=%2Fimgs%2Fskills%2Fvue.png&w=1536&q=100 1x, /_vercel/image?url=%2Fimgs%2Fskills%2Fvue.png&w=1536&q=100 2x'
                src='/_vercel/image?url=%2Fimgs%2Fskills%2Fvue.png&w=1536&q=100'
                className='h-10 w-10 bg-transparent object-contain px-1'
                data-pd-tooltip='true'
              />
            </div>
            <div data-v-9d11439c='' className='m-1 my-2 flex overflow-hidden rounded-md'>
              <img
                alt='React'
                data-nuxt-img=''
                srcSet='/_vercel/image?url=%2Fimgs%2Fskills%2Freact.png&w=1536&q=100 1x, /_vercel/image?url=%2Fimgs%2Fskills%2Freact.png&w=1536&q=100 2x'
                src='/_vercel/image?url=%2Fimgs%2Fskills%2Freact.png&w=1536&q=100'
                className='h-10 w-10 bg-transparent object-contain px-1'
                data-pd-tooltip='true'
              />
            </div>
            <div data-v-9d11439c='' className='m-1 my-2 flex overflow-hidden rounded-md'>
              <img
                alt='Nuxt3'
                data-nuxt-img=''
                srcSet='/_vercel/image?url=%2Fimgs%2Fskills%2Ficon-green.svg&w=1536&q=100 1x, /_vercel/image?url=%2Fimgs%2Fskills%2Ficon-green.svg&w=1536&q=100 2x'
                src='/_vercel/image?url=%2Fimgs%2Fskills%2Ficon-green.svg&w=1536&q=100'
                className='h-10 w-10 bg-transparent object-contain px-1'
                data-pd-tooltip='true'
              />
            </div>
            <div data-v-9d11439c='' className='m-1 my-2 flex overflow-hidden rounded-md'>
              <img
                alt='Next.js'
                data-nuxt-img=''
                srcSet='/_vercel/image?url=%2Fimgs%2Fskills%2Fnext-js.png&w=1536&q=100 1x, /_vercel/image?url=%2Fimgs%2Fskills%2Fnext-js.png&w=1536&q=100 2x'
                src='/_vercel/image?url=%2Fimgs%2Fskills%2Fnext-js.png&w=1536&q=100'
                className='h-10 w-10 bg-transparent object-contain px-1'
                data-pd-tooltip='true'
              />
            </div>
            <div data-v-9d11439c='' className='m-1 my-2 flex overflow-hidden rounded-md'>
              <img
                alt='Tailwind'
                data-nuxt-img=''
                srcSet='/_vercel/image?url=%2Fimgs%2Fskills%2Ftailwind.png&w=1536&q=100 1x, /_vercel/image?url=%2Fimgs%2Fskills%2Ftailwind.png&w=1536&q=100 2x'
                src='/_vercel/image?url=%2Fimgs%2Fskills%2Ftailwind.png&w=1536&q=100'
                className='h-10 w-10 bg-transparent object-contain px-1'
                data-pd-tooltip='true'
              />
            </div>
            <div data-v-9d11439c='' className='m-1 my-2 flex overflow-hidden rounded-md'>
              <img
                alt='Figma'
                data-nuxt-img=''
                srcSet='/_vercel/image?url=%2Fimgs%2Fskills%2Ffigma-logo.svg&w=1536&q=100 1x, /_vercel/image?url=%2Fimgs%2Fskills%2Ffigma-logo.svg&w=1536&q=100 2x'
                src='/_vercel/image?url=%2Fimgs%2Fskills%2Ffigma-logo.svg&w=1536&q=100'
                className='h-10 w-10 bg-transparent object-contain px-1'
                data-pd-tooltip='true'
              />
            </div>
            <div data-v-9d11439c='' className='m-1 my-2 flex overflow-hidden rounded-md'>
              <img
                alt='Ionic'
                data-nuxt-img=''
                srcSet='/_vercel/image?url=%2Fimgs%2Fskills%2Fionic-icon.svg&w=1536&q=100 1x, /_vercel/image?url=%2Fimgs%2Fskills%2Fionic-icon.svg&w=1536&q=100 2x'
                src='/_vercel/image?url=%2Fimgs%2Fskills%2Fionic-icon.svg&w=1536&q=100'
                className='h-10 w-10 bg-transparent object-contain px-1'
                data-pd-tooltip='true'
              />
            </div>
            <div data-v-9d11439c='' className='m-1 my-2 flex overflow-hidden rounded-md'>
              <img
                alt='Capacitor'
                data-nuxt-img=''
                srcSet='/_vercel/image?url=%2Fimgs%2Fskills%2Fcapacitor.png&w=1536&q=100 1x, /_vercel/image?url=%2Fimgs%2Fskills%2Fcapacitor.png&w=1536&q=100 2x'
                src='/_vercel/image?url=%2Fimgs%2Fskills%2Fcapacitor.png&w=1536&q=100'
                className='h-10 w-10 bg-transparent object-contain px-1'
                data-pd-tooltip='true'
              />
            </div>
            <div data-v-9d11439c='' className='m-1 my-2 flex overflow-hidden rounded-md'>
              <img
                alt='Unity'
                data-nuxt-img=''
                srcSet='/_vercel/image?url=%2Fimgs%2Fskills%2Funity.png&w=1536&q=100 1x, /_vercel/image?url=%2Fimgs%2Fskills%2Funity.png&w=1536&q=100 2x'
                src='/_vercel/image?url=%2Fimgs%2Fskills%2Funity.png&w=1536&q=100'
                className='h-10 w-10 bg-transparent object-contain px-1'
                data-pd-tooltip='true'
              />
            </div>
            <div data-v-9d11439c='' className='m-1 my-2 flex overflow-hidden rounded-md'>
              <img
                alt='PHP'
                data-nuxt-img=''
                srcSet='/_vercel/image?url=%2Fimgs%2Fskills%2Fphp.svg&w=1536&q=100 1x, /_vercel/image?url=%2Fimgs%2Fskills%2Fphp.svg&w=1536&q=100 2x'
                src='/_vercel/image?url=%2Fimgs%2Fskills%2Fphp.svg&w=1536&q=100'
                className='h-10 w-10 bg-transparent object-contain px-1'
                data-pd-tooltip='true'
              />
            </div>
            <div data-v-9d11439c='' className='m-1 my-2 flex overflow-hidden rounded-md'>
              <img
                alt='Puppeteer'
                data-nuxt-img=''
                srcSet='/_vercel/image?url=%2Fimgs%2Fskills%2Fpuppeteer.png&w=1536&q=100 1x, /_vercel/image?url=%2Fimgs%2Fskills%2Fpuppeteer.png&w=1536&q=100 2x'
                src='/_vercel/image?url=%2Fimgs%2Fskills%2Fpuppeteer.png&w=1536&q=100'
                className='h-10 w-10 bg-transparent object-contain px-1'
                data-pd-tooltip='true'
              />
            </div>
            <div data-v-9d11439c='' className='m-1 my-2 flex overflow-hidden rounded-md'>
              <img
                alt='Playwright'
                data-nuxt-img=''
                srcSet='/_vercel/image?url=%2Fimgs%2Fskills%2Ficon.png&w=1536&q=100 1x, /_vercel/image?url=%2Fimgs%2Fskills%2Ficon.png&w=1536&q=100 2x'
                src='/_vercel/image?url=%2Fimgs%2Fskills%2Ficon.png&w=1536&q=100'
                className='h-10 w-10 bg-transparent object-contain px-1'
                data-pd-tooltip='true'
              />
            </div>
          </div>
        </div>
        <div
          data-v-9d11439c=''
          className='bg-base-2nd fade-in glass-effect mt-6 w-full rounded-md p-5'
          data-state='playing'
        >
          <h3 data-v-9d11439c='' className='text-font-pr text-xl font-semibold'>
            Mangament
          </h3>
          <p data-v-9d11439c='' className='text-font-2nd mt-2 w-full break-words whitespace-pre-line'>
            I have worked with multiple clients and stakeholders to define projects that suit their needs and have led
            these projects.
          </p>
          <div data-v-9d11439c='' className='mt-4 flex flex-wrap'>
            <div data-v-9d11439c='' className='m-1 my-2 flex overflow-hidden rounded-md'>
              <p className='bg-highlight rounded-lg p-1 px-3 text-zinc-100 dark:text-zinc-900'>Agile</p>
            </div>
            <div data-v-9d11439c='' className='m-1 my-2 flex overflow-hidden rounded-md'>
              <p className='bg-highlight rounded-lg p-1 px-3 text-zinc-100 dark:text-zinc-900'>Scrum</p>
            </div>
            <div data-v-9d11439c='' className='m-1 my-2 flex overflow-hidden rounded-md'>
              <p className='bg-highlight rounded-lg p-1 px-3 text-zinc-100 dark:text-zinc-900'>Jira</p>
            </div>
            <div data-v-9d11439c='' className='m-1 my-2 flex overflow-hidden rounded-md'>
              <p className='bg-highlight rounded-lg p-1 px-3 text-zinc-100 dark:text-zinc-900'>Office</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
  return (
    <div className='hide-scrollbar max-h-screen overflow-auto pt-10'>
      <div id='home' className=' h-0.5 w-1/3 rounded-full' />
      <div className='mx-auto flex h-full max-w-3xl flex-wrap justify-between gap-6 p-10 px-4 sm:py-20 md:py-20 lg:px-8 lg:py-40 lg:pt-20'>
        <main className='my-10 flex w-full flex-col gap-4'>
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
        <div id='career' className='bg-primary h-0.5 w-1/3 rounded-full' />
        <div className='w-full'>
          <div className='h1 mb-8 text-balance break-all'>Career</div>
          <Lines />
        </div>
        <div id='education' className='bg-primary h-0.5 w-1/3 rounded-full' />
        <div className='w-full'>
          <div className='h1 mb-8 text-balance break-all'>Education</div>
          <div className='bg-base-2nd fade-in glass-effect mt-6 w-full rounded-md p-5'>
            <div className='grid grid-cols-[auto_1fr] gap-4'>
              <div className='group whitespace-nowrap'>
                <Image
                  src={modul}
                  alt='MODUL'
                  className='inline-block h-4 w-4 transition-transform group-hover:scale-200'
                />
                <a href='https://www.modul.ac.at/' className='pl-4 underline'>
                  MODUL
                </a>
              </div>
              <div>BSc Applied Data Science</div>
              <div className='group whitespace-nowrap'>
                <Image
                  src={ais}
                  alt='AIS'
                  className='inline-block h-4 w-4 transition-transform group-hover:scale-200'
                />
                <a href='https://www.ais.at/' className='pl-4 underline'>
                  AIS
                </a>
              </div>
              <div>High School Diploma</div>
            </div>
          </div>
        </div>
        {/* <section className='my-8 flex flex-col gap-4'>
          <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4'></div>
          <div className='relative mt-6 w-full'>
            <div className='flex flex-wrap'>
              {Object.values(TechTag).map((tag, i) => (
                <TechTagView key={i} tag={tag} />
              ))}
            </div>
          </div>
        </section> */}
        <div id='skills' className='bg-primary h-0.5 w-1/3 rounded-full' />
        {skills}
        {/* <Contacts /> */}
        <div id='projects' className='bg-primary h-0.5 w-1/3 rounded-full' />
        <ProjectHistory />
        {/* <GreetDialog /> */}
        <FooterView />
      </div>
    </div>
  )
}
