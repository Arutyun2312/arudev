'use client'

import { useRouter } from '@/i18n/navigation'
import { css } from '@/util'
import { Locale, useLocale } from 'next-intl'
import Image from 'next/image'
import { useState } from 'react'

const locales: Locale[] = ['en', 'de']
export default function CountryCollapsible({ className }: { className?: string }) {
  const locale = useLocale()
  const router = useRouter()
  const [show, setShow] = useState(false)
  const set = new Set(locales).difference(new Set([locale]))

  const onClick = (l: Locale, i: number) => () => {
    if (i === 0) {
      setShow((prev) => !prev)
      return
    }
    router.replace('/', { locale: l })
  }

  return (
    <div className={className}>
      <div className='flex items-center gap-2'>
        {[locale].concat(show ? Array.from(set) : []).map((l, i) => (
          <button key={l} className='flex gap-2' onClick={onClick(l, i)}>
            <Image
              alt={l}
              width={32}
              height={32}
              className='cursor-pointer rounded-full object-contain'
              src={`https://purecatamphetamine.github.io/country-flag-icons/1x1/${l.toUpperCase().replace('EN', 'US')}.svg`}
            />
            {i == 0 && (
              <div className='flex items-center justify-center'>
                <div
                  className={css(
                    'cursor-pointer rounded-full px-2 py-1 text-xs font-semibold transition-colors',
                    !show && 'rotate-90',
                    'bg-gray-200 text-black hover:bg-gray-300',
                  )}
                >
                  {'>'}
                </div>
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  )
}
