import z from 'zod'

export function css(...args: unknown[]) {
  return args.filter((v) => typeof v == 'string').join(' ')
}

export const pageView = (url: string, measurementId: string) => {
  window.gtag('config', measurementId, { page_path: url })
}

export const event = ({ action, category, label, value }: any) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  })
}
