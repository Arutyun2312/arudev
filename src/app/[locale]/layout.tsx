import '@/styles/globals.scss'
import { css } from '@/util'
import { routing } from 'i18n/routing'
import type { Metadata } from 'next'
import { NextIntlClientProvider, hasLocale } from 'next-intl'
import { Mohave, Quicksand } from 'next/font/google'
import { notFound } from 'next/navigation'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { AnalyticsFirebase } from '@/components/AnalyticsFirebase'
import z from 'zod'
import { ThemeProvider } from 'next-themes'
import BackgroundBlur from '@/components/BackgroundBlur'

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

const firebaseConfig = z
  .object({
    FIREBASE_API_KEY: z.string().min(1),
    FIREBASE_AUTH_DOMAIN: z.string().min(1),
    FIREBASE_PROJECT_ID: z.string().min(1),
    FIREBASE_STORAGE_BUCKET: z.string().min(1),
    FIREBASE_MESSAGING_SENDER_ID: z.string().min(1),
    FIREBASE_APP_ID: z.string().min(1),
    FIREBASE_MEASUREMENT_ID: z.string().min(1),
  })
  .transform((data) => ({
    apiKey: data.FIREBASE_API_KEY,
    authDomain: data.FIREBASE_AUTH_DOMAIN,
    projectId: data.FIREBASE_PROJECT_ID,
    storageBucket: data.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: data.FIREBASE_MESSAGING_SENDER_ID,
    appId: data.FIREBASE_APP_ID,
    measurementId: data.FIREBASE_MEASUREMENT_ID,
  }))
  .safeParse(process.env).data

type Props = {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}
export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params
  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={css(mohave.variable, quicksand.variable, 'bg-grid body relative antialiased')}>
        <ThemeProvider attribute='data-theme' defaultTheme='dark' enableSystem={false}>
          <NextIntlClientProvider>{children}</NextIntlClientProvider>
        </ThemeProvider>
        <BackgroundBlur />
      </body>
      <Analytics />
      <SpeedInsights />
      {firebaseConfig && <AnalyticsFirebase config={firebaseConfig} />}
    </html>
  )
}
