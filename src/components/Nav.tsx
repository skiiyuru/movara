import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import NavLink from './NavLink'
import LatestPostsNav from './LatestPostsNav'

export default function Nav({ currentPath }: { currentPath: string }) {
  const [isOpen, setIsOpen] = useState(false)
  const menuBtnRef = useRef<HTMLButtonElement>(null)
  const menuIconRef = useRef<SVGSVGElement>(null)
  const closeIconRef = useRef<SVGSVGElement>(null)
  const expandableMenuRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLElement>(null)

  const openMenu = () => {
    setIsOpen(true)
    if (expandableMenuRef.current && headerRef.current) {
      expandableMenuRef.current.classList.remove('hidden')
      gsap.set(expandableMenuRef.current, { clipPath: 'inset(0% 0% 100% 0%)' })
      headerRef.current.classList.add('menu-open')
      gsap.to(expandableMenuRef.current, {
        clipPath: 'inset(0% 0% 0% 0%)',
        duration: 0.5,
        ease: 'power2.out',
      })
      document.body.style.overflow = 'hidden'
    }
  }

  const closeMenu = () => {
    setIsOpen(false)
    if (headerRef.current && expandableMenuRef.current) {
      headerRef.current.classList.remove('menu-open')
      gsap.to(expandableMenuRef.current, {
        clipPath: 'inset(0% 0% 100% 0%)',
        duration: 0.5,
        ease: 'power2.in',
        onComplete: () => {
          if (expandableMenuRef.current) {
            expandableMenuRef.current.classList.add('hidden')
            gsap.set(expandableMenuRef.current, { clipPath: 'inset(0% 0% 100% 0%)' })
          }
        },
      })
      document.body.style.overflow = ''
    }
  }

  const handleMenuClick = (e: React.MouseEvent) => {
    e.preventDefault()
    if (isOpen) {
      closeMenu()
    } else {
      openMenu()
    }
  }

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        closeMenu()
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isOpen])

  return (
    <header id="header" ref={headerRef} className="w-full sticky top-0 z-50">
      {/* Nav Bar (always visible, z-50) */}
      <nav className="transition-colors duration-500 bg-white border-b border-gray-200/50 z-50 relative" id="main-nav">
        <div className="container flex items-center justify-between h-20 px-4 md:px-6 lg:px-8 ">
        {/* Logo */}
        <a href="/" className="flex-shrink-0 text-7xl font-bold transition-colors duration-500" aria-label="Movara">
          <span id="nav-logo-text" className="">MOVARA</span>
        </a>
        {/* Desktop Nav Links */}
        <ul className="hidden md:flex flex-1 justify-center items-center gap-12">
          <li><NavLink href="/about" title="About" currentPath={currentPath} /></li>
          <li><NavLink href="/contact" title="Contact" currentPath={currentPath} /></li>
          <li><NavLink href="/blog" title="Latest" currentPath={currentPath} /></li>
        </ul>
        {/* Menu/Close Button */}
        <button 
          ref={menuBtnRef}
          id="menu-btn" 
          aria-label="Open menu" 
          className="ml-auto flex items-center justify-center w-12 h-12 rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
          onClick={handleMenuClick}
        >
          <span className="sr-only">Open menu</span>
          <svg 
            ref={menuIconRef}
            id="menu-icon" 
            width="24" 
            height="24" 
            fill="none" 
            viewBox="0 0 24 24" 
            className={`block nav-icon ${isOpen ? 'hidden' : ''}`}
          >
            <rect y="8" width="24" height="2" rx="1" />
            <rect y="14" width="24" height="2" rx="1" />
          </svg>
          <svg 
            ref={closeIconRef}
            id="close-icon" 
            width="24" 
            height="24" 
            fill="none" 
            viewBox="0 0 24 24" 
            className={`nav-icon ${isOpen ? '' : 'hidden'}`}
          >
            <line x1="6" y1="6" x2="18" y2="18" strokeWidth="2" strokeLinecap="round" />
            <line x1="18" y1="6" x2="6" y2="18" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
        </div>
      </nav>

      {/* Expandable Menu Overlay (z-40, full screen, always below nav) */}
      <div 
        ref={expandableMenuRef}
        id="expandable-menu" 
        className="hidden fixed inset-0 z-40 bg-primary text-white" 
        style={{ clipPath: 'inset(0% 0% 100% 0%)' }}
      >
        {/* Desktop layout */}
        <div className="hidden md:flex w-full h-full pt-20 container">
          {/* Left: bottom-aligned Contact/LinkedIn */}
          <div className="flex-1 flex flex-col justify-end p-16">
            <ul className="space-y-8 text-4xl font-display mb-8">
              <li className="overlay-link">
                <a href="/contact" className="hover:underline transition-colors duration-200 text-6xl">Contact</a>
              </li>
              <li className="overlay-link">
                <a 
                  href="https://www.linkedin.com/company/purposeventure/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 hover:underline transition-colors duration-200 text-6xl pr-2"
                >
                  LinkedIn
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 9H15M15 9L10.5 4.5M15 9L10.5 13.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
          {/* Right: bottom-aligned The Latest */}
          <LatestPostsNav title="The Latest" maxPosts={3} />
        </div>
        {/* Mobile layout */}
        <div className="flex md:hidden flex-col h-full pt-20">
          <div className="flex-1"></div>
          <ul className="flex flex-col space-y-6 text-2xl font-display px-6 pb-12">
            <li className="overlay-link"><NavLink href="/about" title="About" currentPath={currentPath} /></li>
            <li className="overlay-link"><NavLink href="/blog" title="Latest" currentPath={currentPath} /></li>
            <li className="overlay-link">
              <a href="/contact" className="hover:underline text-white transition-colors duration-200">Contact</a>
            </li>
            <li className="overlay-link">
              <a 
                href="https://www.linkedin.com/company/purposeventure/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 hover:underline text-white transition-colors duration-200"
              >
                LinkedIn
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 9H15M15 9L10.5 4.5M15 9L10.5 13.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}
