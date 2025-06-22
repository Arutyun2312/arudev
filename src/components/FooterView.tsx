import { useTranslations } from 'next-intl'

export default function FooterView() {
  const t = useTranslations('Footer')
  return (
    <footer className='!mx-0 flex flex-col items-center justify-center gap-4 bg-gray-100 py-8'>
      <div className='text-sm text-gray-600'>
        © {new Date().getFullYear()} {t('name')}
      </div>
    </footer>
  )
}
