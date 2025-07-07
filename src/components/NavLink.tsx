export default function NavLink({ href, title, className = '', currentPath }: { href: string, title: string, className?: string, currentPath: string }) {
  // Robust active logic: handle home page, exact matches, and nested routes
  let isActive = false
  if (href === '/') {
    // Home page is active only when we're exactly on the root
    isActive = currentPath === '/'
  }
  else {
    // For other pages, check exact match or if current path starts with the href
    // This handles both exact matches and nested routes
    isActive = currentPath === href || currentPath.startsWith(`${href}/`)
  }

  return (
    <a
      href={href}
      className={`font-medium transition-colors duration-300 ${
        isActive
          ? '!font-bold !text-[#1a365d]'
          : 'text-gray-800 hover:text-[#1a365d]'
      } ${className}`}
      aria-current={isActive ? 'page' : undefined}
    >
      {title}
    </a>
  )
}
