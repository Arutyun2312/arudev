type Props = {
  href: string
  label: string
}
export default function DownloadView({ href, label }: Props) {
  return (
    <a
      className='threeD-span bg-primary-dark border-primary-dark block w-fit rounded-full border'
      href={href}
      download
    >
      <span className='button !bg-primary block !px-10 text-white'>{label}</span>
    </a>
  )
}
