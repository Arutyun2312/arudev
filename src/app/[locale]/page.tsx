import { useTranslations } from 'next-intl'
import { Link } from 'i18n/navigation'
import Image from 'next/image'

export default function HomePage() {
  const t = useTranslations('HomePage')
  return (
    <div>
      <h1>{t('title')}</h1>
      <Link href='/about'>{t('about')}</Link>

      <main className='flex min-h-screen flex-col items-center justify-between p-24'>
        <h1 className='text-4xl font-bold'>Welcome to Next.js!</h1>
        <Image src='/nextjs-logo.svg' alt='Next.js Logo' width={180} height={37} priority />
        <p className='mt-4 text-lg'>This is a simple Next.js application.</p>
      </main>
    </div>
  )
}
