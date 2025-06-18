'use client'

import { Link } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'

export default function NavBar() {
  const t = useTranslations('Navigation')

  return (
    <nav className='flex items-center'>
      <div className='flex-1'>Logo</div>
      <div className='flex flex-1 items-center gap-6'>
        <Link href='/about' className='text-lg font-semibold'>
          {t('overview')}
        </Link>
        <Link href='/about' className='text-lg font-semibold'>
          {t('project_history')}
        </Link>
      </div>
    </nav>
  )
}
