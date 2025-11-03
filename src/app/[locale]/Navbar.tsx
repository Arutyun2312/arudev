import { css } from '@/util'
import { NavItem } from './NavItem'

export default function Navbar() {
  const navItems = [
    { href: '/#', label: 'Home' },
    { href: '/#career', label: 'Career' },
    { href: '/#projects', label: 'Projects' },
    { href: 'mailto:arutyunef@gmail.com', label: 'Contact' },
  ]

  return (
    <header className='fixed top-10 left-1/2 z-30 w-full -translate-x-1/2 md:w-auto'>
      <nav className='animate-jump-in animate-once animate-duration-1000 group relative z-20'>
        <ul className='relative mx-2 grid grid-cols-4 items-center justify-center rounded-full border border-white/10 py-2 shadow-lg backdrop-blur-md transition-all duration-200 ease-in-out md:mx-0'>
          {navItems.map((item, index) => (
            <li
              key={index}
              className={css(
                'relative z-10 cursor-pointer rounded-full p-2 text-center text-neutral-300 transition-colors duration-300',
                'after:absolute after:inset-0 after:rounded-full after:bg-white/10 after:opacity-0 after:transition-opacity after:duration-300 hover:after:opacity-100 md:px-4',
              )}
            >
              <NavItem href={item.href} label={item.label} />
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
