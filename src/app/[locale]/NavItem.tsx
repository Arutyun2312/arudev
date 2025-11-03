'use client'

import { FC } from 'react'

export const NavItem: FC<{ href: string; label: string }> = ({ href, label }) => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Don't prevent default for external links like mailto
    if (href.startsWith('mailto:')) {
      return
    }

    e.preventDefault()

    // Extract the hash from href (e.g., '#about' from '/#about')
    const hash = href.split('#')[1]

    if (!hash) {
      // Navigate to top for home
      document.querySelector('.hide-scrollbar')?.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    // Find the target element
    const targetElement = document.getElementById(hash)
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' })
    }
  }
  return (
    <a href={href} className='relative z-20' onClick={(e) => handleNavClick(e, href)}>
      {label}
    </a>
  )
}
