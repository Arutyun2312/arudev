'use client'

import { pageView } from '@/util'
import { useRouter } from 'next/compat/router'
import Script from 'next/script'
import { FC, useEffect } from 'react'

type Props = {
  config: { measurementId: string }
}
export const AnalyticsFirebase: FC<Props> = ({ config }) => {
  const id = config.measurementId
  const router = useRouter()

  useEffect(() => {
    if (!router) return
    const handleRouteChange = (url: string) => {
      pageView(url, id)
    }

    router.events.on('routeChangeComplete', handleRouteChange)
    router.events.on('hashChangeComplete', handleRouteChange)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
      router.events.off('hashChangeComplete', handleRouteChange)
    }
  }, [router?.events])

  return (
    <>
      <Script strategy='afterInteractive' src={`https://www.googletagmanager.com/gtag/js?id=${id}`} />
      <Script
        id='gtag-init'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', '${id}', {
                page_path: window.location.pathname
              });
          `,
        }}
      />
    </>
  )
}
