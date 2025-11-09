export function css(...args: unknown[]) {
  return args.filter((v) => typeof v == 'string').join(' ')
}

export const pageView = (url: string, measurementId: string) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const gtag = (window as any).gtag || function () {}
  gtag('config', measurementId, { page_path: url })
}

export const event = ({ action, category, label, value }: { action: string; category: string; label: string; value: number }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const gtag = (window as any).gtag || function () {}
  gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  })
}
