'use client'

import HamburgerIcon from '@/assets/hamburger.svg'
import CloseIcon from '@/assets/x.svg'
import { Link } from '@/i18n/navigation'
import { css } from '@/util'
import * as Dialog from '@radix-ui/react-dialog'
import { AnimatePresence, motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { useState } from 'react'
import CountryCollapsible from './Collapsible'
import ThemeSwitcher from './ThemeSwitcher'

export default function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const t = useTranslations('Navigation')

  const onClose = () => {
    setMobileOpen(false)
  }

  const logo = (
    <Link href='/' className={css('bg-primary absolute top-1/2 left-5 -translate-y-1/2 rounded-full', 'threeD-span')}>
      <span
        className={css(
          'block bg-white',
          'border-primary text-primary flex size-10 items-center justify-center rounded-full border-2 font-bold',
        )}
      >
        A
      </span>
    </Link>
  )

  const buttons = (
    <>
      <Link href='/#overview' className='font-semibold' onClick={onClose}>
        {t('overview')}
      </Link>
      <Link href='/#projects' className='font-semibold' onClick={onClose}>
        {t('project_history')}
      </Link>
    </>
  )

  return (
    <header className='mb-15 lg:mb-20'>
      <nav className='fixed inset-x-0 top-0 z-10 border-b border-gray-400/50 bg-white px-5 py-5 dark:bg-black'>
        {logo}
        <div className='hidden flex-1 items-center justify-center gap-4 text-base lg:visible lg:flex lg:gap-10 lg:text-lg'>
          {buttons}
        </div>
        <div className='top-1/2 right-5 hidden -translate-y-1/2 items-center gap-4 lg:absolute lg:flex'>
          <ThemeSwitcher />
          <CountryCollapsible />
        </div>
        <div className='flex items-center gap-4 lg:hidden'>
          <CountryCollapsible className='ml-auto' />
          <Dialog.Root open={mobileOpen} onOpenChange={setMobileOpen}>
            <Dialog.Trigger asChild>
              <button className='size-8 bg-transparent p-0 lg:hidden' aria-label='open menu'>
                <HamburgerIcon className='size-8' />
              </button>
            </Dialog.Trigger>
            <AnimatePresence>
              {mobileOpen && (
                <Dialog.Portal forceMount>
                  <Dialog.Overlay asChild>
                    <motion.div
                      className='fixed inset-0 bg-black/50'
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </Dialog.Overlay>
                  <Dialog.Content aria-describedby={undefined}>
                    <Dialog.Title className='hidden' />
                    <motion.div
                      className='h1 fixed top-0 left-0 z-[1000] flex w-full flex-col bg-white p-4 text-sm lg:hidden'
                      initial={{ y: '-100%' }}
                      animate={{ y: 0 }}
                      exit={{ y: '-100%' }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className='mb-8 flex items-center justify-between'>
                        <Link
                          href='/'
                          className={css(
                            'body border-primary !text-primary flex size-10 items-center justify-center rounded-full border-2 font-bold',
                          )}
                        >
                          A
                        </Link>
                        <Dialog.Close asChild>
                          <button className='size-10 bg-transparent p-0' aria-label='close menu'>
                            <CloseIcon className='h-8 w-8' />
                          </button>
                        </Dialog.Close>
                      </div>
                      <div className='flex flex-col gap-4 text-base'>
                        {buttons}
                        <CountryCollapsible />
                        <ThemeSwitcher />
                      </div>
                    </motion.div>
                  </Dialog.Content>
                </Dialog.Portal>
              )}
            </AnimatePresence>
          </Dialog.Root>
        </div>
      </nav>
    </header>
  )
}
