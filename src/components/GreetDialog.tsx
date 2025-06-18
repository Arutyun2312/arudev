'use client'

import * as RadixDialog from '@radix-ui/react-dialog'
import { useSessionStorage } from '@uidotdev/usehooks'
import { AnimatePresence, motion } from 'framer-motion'
import { useTranslations } from 'next-intl'

export default function GreetDialog() {
  const t = useTranslations('GreetDialog')
  const [open, setOpen] = useSessionStorage('greeted', true)

  return (
    <RadixDialog.Root open={open} onOpenChange={setOpen}>
      <AnimatePresence>
        {open && (
          <RadixDialog.Portal forceMount>
            <RadixDialog.Overlay asChild>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className='fixed inset-0 bg-black/50'
              />
            </RadixDialog.Overlay>
            <RadixDialog.Content asChild>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className='fixed top-1/2 left-1/2 w-11/12 -translate-x-1/2 -translate-y-1/2 rounded-2xl border-2 border-white bg-black p-6 text-center shadow-lg lg:w-1/2'
              >
                <RadixDialog.Title asChild>
                  <div className='h1 text-center'>{t('title')}</div>
                </RadixDialog.Title>
                <RadixDialog.Description asChild>
                  <div className='h3 mt-2 text-sm text-gray-600'>{t('description')}</div>
                </RadixDialog.Description>
                <RadixDialog.Close asChild>
                  <button className='h2 p-4 text-white'>{t('close')}</button>
                </RadixDialog.Close>
              </motion.div>
            </RadixDialog.Content>
          </RadixDialog.Portal>
        )}
      </AnimatePresence>
    </RadixDialog.Root>
  )
}
