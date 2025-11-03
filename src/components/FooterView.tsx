import { useTranslations } from 'next-intl'

export default function FooterView() {
  const t = useTranslations('Footer')
  return (
    <footer className='!mx-0 flex flex-col items-center justify-center gap-4 py-9 bg-gray-800/5'>
      <div className='mt-1 h-[48px] flex justify-center items-center text-font-pr'>
        {t('name')}
      </div>
    </footer>
  )
}
