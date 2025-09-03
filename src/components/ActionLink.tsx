import React from 'react'

type ActionLinkProps = {
  href: string
  children: React.ReactNode
  className?: string
  ariaLabel?: string
}

export default function ActionLink({ href, children, className = '', ariaLabel }: ActionLinkProps) {
  return (
    <a
      href={href}
      className={`inline-flex items-center gap-2 transition-all duration-500 group hover:text-secondary text-sm sm:text-base min-h-[44px] ${className}`}
      aria-label={ariaLabel ?? (typeof children === 'string' ? children : undefined)}
    >
      <span>{children}</span>
      <div className="bg-primary p-1.5 sm:p-2 rounded group-hover:bg-secondary">
        <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.899902 5.05844H9.8249L5.4449 0.648438H6.9449L11.8499 5.59844L6.9299 10.5484H5.4299L9.82621 6.13844H0.899902V5.05844Z" fill="white"></path>
        </svg>
      </div>
    </a>
  )
}


