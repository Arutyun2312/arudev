export function css(...args: unknown[]) {
  return args.filter((v) => typeof v == 'string').join(' ')
}
