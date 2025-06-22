'use client'

import { Link } from '@/i18n/navigation'
import { css } from '@/util'
import { useTranslations } from 'next-intl'

export default function NavBar() {
  const t = useTranslations('Navigation')

  return (
    <header className='mb-20'>
      <nav className='fixed inset-x-0 top-0 z-10 border-b border-gray-400/50 bg-white py-5'>
        <Link
          href='/'
          className={css(
            'absolute top-1/2 left-5 -translate-y-1/2',
            'border-primary text-primary flex size-10 items-center justify-center rounded-full border-2 font-bold',
          )}
        >
          A
        </Link>
        <div className='flex flex-1 items-center justify-center gap-10'>
          <Link href='/#overview' className='text-lg font-semibold'>
            {t('overview')}
          </Link>
          <Link href='/#projects' className='text-lg font-semibold'>
            {t('project_history')}
          </Link>
        </div>
      </nav>
    </header>
  )
}
