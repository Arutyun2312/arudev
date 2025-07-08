'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { setTheme, resolvedTheme, theme, systemTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className='h-10 w-10 animate-pulse rounded-full border border-gray-300 bg-gray-100' />
  }

  const isDark = resolvedTheme === 'dark'
  console.log('Current theme:', resolvedTheme)
  console.log('Theme Debug:', {
    theme,
    resolvedTheme,
    systemTheme,
    isDark,
    dataTheme: document.documentElement.getAttribute('data-theme'),
    localStorage: localStorage.getItem('theme')
  })

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className='relative h-10 w-10 cursor-pointer rounded-full border p-2 shadow-sm transition-all not-dark:border-gray-300 not-dark:bg-white hover:shadow-md dark:border-gray-600 dark:bg-gray-800'
      aria-label='Toggle theme'
    >
      <AnimatePresence mode='wait'>
        {!isDark ? (
          <motion.svg
            key='sun'
            initial={{ scale: 0, rotate: 90 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: -90 }}
            transition={{ duration: 0.2 }}
            className='h-full w-full text-yellow-500'
            fill='currentColor'
            viewBox='0 0 20 20'
          >
            <path
              fillRule='evenodd'
              d='M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z'
              clipRule='evenodd'
            />
          </motion.svg>
        ) : (
          <motion.svg
            key='moon'
            initial={{ scale: 0, rotate: 90 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: -90 }}
            transition={{ duration: 0.2 }}
            className='h-full w-full text-gray-300'
            fill='currentColor'
            viewBox='0 0 20 20'
          >
            <path d='M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z' />
          </motion.svg>
        )}
      </AnimatePresence>
    </button>
  )
}
