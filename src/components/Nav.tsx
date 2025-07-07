import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import NavLink from './NavLink.tsx'

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
    <header id="header" ref={headerRef} className="w-full px-">
      {/* Nav Bar (always visible, z-50) */}
      <nav className="flex items-center justify-between h-20 px-4 md:px-18 lg:px-32 transition-colors duration-500 bg-white border-b border-gray-200/50 z-50 relative" id="main-nav">
        {/* Logo */}
        <a href="/" className="flex-shrink-0" aria-label="Movara">
          <span id="nav-logo-text" className="text-2xl font-black transition-colors duration-500">MOVARA</span>
        </a>
        {/* Desktop Nav Links */}
        <ul className="hidden md:flex flex-1 justify-center items-center gap-16">
          <li><NavLink href="/about" title="About" currentPath={currentPath} /></li>
          <li><NavLink href="/contact" title="Contact" currentPath={currentPath} /></li>
          <li><NavLink href="/latest" title="Latest" currentPath={currentPath} /></li>
        </ul>
        {/* Menu/Close Button */}
        <button 
          ref={menuBtnRef}
          id="menu-btn" 
          aria-label="Open menu" 
          className="ml-auto flex items-center justify-center w-12 h-12 rounded-lg transition-colors duration-500 focus:outline-none"
          onClick={handleMenuClick}
        >
          <span className="sr-only">Open menu</span>
          <svg 
            ref={menuIconRef}
            id="menu-icon" 
            width="28" 
            height="28" 
            fill="none" 
            viewBox="0 0 28 28" 
            className={`block nav-icon ${isOpen ? 'hidden' : ''}`}
          >
            <rect y="9" width="28" height="2" rx="1" />
            <rect y="17" width="28" height="2" rx="1" />
          </svg>
          <svg 
            ref={closeIconRef}
            id="close-icon" 
            width="28" 
            height="28" 
            fill="none" 
            viewBox="0 0 28 28" 
            className={`nav-icon ${isOpen ? '' : 'hidden'}`}
          >
            <line x1="7" y1="7" x2="21" y2="21" strokeWidth="2" strokeLinecap="round" />
            <line x1="21" y1="7" x2="7" y2="21" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </nav>

      {/* Expandable Menu Overlay (z-40, full screen, always below nav) */}
      <div 
        ref={expandableMenuRef}
        id="expandable-menu" 
        className="hidden fixed inset-0 z-40 bg-primary text-white" 
        style={{ clipPath: 'inset(0% 0% 100% 0%)' }}
      >
        {/* Desktop layout */}
        <div className="hidden md:flex w-full h-full pt-16">
          {/* Left: bottom-aligned Contact/LinkedIn */}
          <div className="flex-1 flex flex-col justify-end p-16">
            <ul className="space-y-8 text-5xl font-serif mb-8">
              <li className="overlay-link">
                <a href="/contact" className="hover:underline">Contact</a>
              </li>
              <li className="overlay-link">
                <a 
                  href="https://www.linkedin.com/company/purposeventure/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 hover:underline"
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
          <div className="flex-[2] flex flex-col justify-end p-16 articles-wrapper h-full">
            <span className="uppercase text-gray-300 tracking-widest mb-6 label grey">The Latest</span>
            <div className="space-y-8 articles">
              <div className="border-b border-white/20 pb-4 mb-4 article-list-item overlay-link">
                <a href="#" className="block text-xl font-medium hover:underline">
                  <p className="medium">Property Insurance in an Era of Climate-Related Disasters</p>
                </a>
              </div>
              <div className="border-b border-white/20 pb-4 mb-4 article-list-item overlay-link">
                <a href="#" className="block text-xl font-medium hover:underline">
                  <p className="medium">PVG's Partners on Climate Challenges and Opportunities in a Volatile 2025</p>
                </a>
              </div>
              <div className="article-list-item overlay-link">
                <a href="#" className="block text-xl font-medium hover:underline">
                  <p className="medium">New Year, New Name, New Site.</p>
                  <p className="small text-xs text-gray-300 mt-1">December 18, 2024</p>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Mobile layout */}
        <div className="flex md:hidden flex-col h-full pt-16">
          <div className="flex-1"></div>
          <ul className="flex flex-col space-y-8 text-3xl font-serif px-8 pb-12">
            <li className="overlay-link"><NavLink href="/about" title="About" currentPath={currentPath} /></li>
            <li className="overlay-link"><NavLink href="/latest" title="Latest" currentPath={currentPath} /></li>
            <li className="overlay-link">
              <a href="/contact" className="hover:underline text-white">Contact</a>
            </li>
            <li className="overlay-link">
              <a 
                href="https://www.linkedin.com/company/purposeventure/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 hover:underline text-white"
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
