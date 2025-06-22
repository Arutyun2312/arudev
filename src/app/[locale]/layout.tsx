import { NextIntlClientProvider, hasLocale } from 'next-intl'
import { notFound } from 'next/navigation'
import { routing } from 'i18n/routing'
import type { Metadata } from 'next'
import { Mohave, Quicksand } from 'next/font/google'
import '@/styles/globals.css'
import '@/styles/globals.scss'
import { css } from '@/util'

const mohave = Mohave({
  variable: '--font-mohave',
  subsets: ['latin'],
})
const quicksand = Quicksand({
  variable: '--font-quicksand',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Aru Dev',
  description: 'Aru Dev - Personal Portfolio',
  icons: {
    icon: '/favicon.ico',
  },
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params
  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  return (
    <html lang={locale}>
      <body className={css(mohave.variable, quicksand.variable, 'bg-grid body antialiased')}>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  )
}
