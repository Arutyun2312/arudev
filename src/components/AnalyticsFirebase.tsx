'use client'

import { getAnalytics, logEvent } from 'firebase/analytics'
import { initializeApp } from 'firebase/app'
import { FC, useEffect } from 'react'

const getUtmParameters = () => {
  const urlParams = new URLSearchParams(window.location.search)
  const utmParams = {
    utm_source: urlParams.get('utm_source'),
    utm_medium: urlParams.get('utm_medium'),
    utm_campaign: urlParams.get('utm_campaign'),
    utm_term: urlParams.get('utm_term'),
    utm_content: urlParams.get('utm_content'),
  }
  const hasUtmParams = Object.values(utmParams).some(Boolean)
  return hasUtmParams ? utmParams : undefined
}

type Props = {
  config: {
    apiKey: string
    authDomain: string
    projectId: string
    storageBucket: string
    messagingSenderId: string
    appId: string
    measurementId: string
  }
}
export const AnalyticsFirebase: FC<Props> = ({ config }) => {
  useEffect(() => {
    const contr = new AbortController()
    addEventListener(
      'DOMContentLoaded',
      () => {
        const app = initializeApp(config)
        const analytics = getAnalytics(app)
        const utmParams = getUtmParameters()
        if (utmParams) {
          logEvent(analytics, 'utm_tracking', {
            utm_source: utmParams.utm_source || 'direct',
            utm_medium: utmParams.utm_medium || 'none',
            utm_campaign: utmParams.utm_campaign || 'none',
            utm_term: utmParams.utm_term || 'none',
            utm_content: utmParams.utm_content || 'none',
          })
        }
      },
      contr,
    )
    return () => {
      contr.abort()
    }
  }, [config])

  return null
}
