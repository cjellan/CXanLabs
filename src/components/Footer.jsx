export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="py-10 px-6" style={{ borderTop: '1px solid var(--color-border)' }}>
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img
            src="/assets/cxanlabs-logo.svg"
            alt="CXanLabs"
            className="h-6 w-auto"
            onError={(e) => {
              e.currentTarget.style.display = 'none'
              e.currentTarget.nextElementSibling.style.display = 'inline'
            }}
          />
          <span
            className="hidden font-bold text-sm"
            style={{ color: 'var(--color-brand)' }}
          >
            CXanLabs
          </span>
          <span className="text-sm font-semibold" style={{ color: 'var(--color-text)' }}>
            CXanLabs
          </span>
        </div>

        <p className="text-xs" style={{ color: 'var(--color-muted)' }}>
          &copy; {year} CXanLabs. All rights reserved.
        </p>

        <nav className="flex items-center gap-5">
          <a
            href="#products"
            className="text-xs transition-colors duration-150"
            style={{ color: 'var(--color-muted)' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-text)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-muted)')}
          >
            Products
          </a>
          <a
            href="#contact"
            className="text-xs transition-colors duration-150"
            style={{ color: 'var(--color-muted)' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-text)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-muted)')}
          >
            Contact
          </a>
        </nav>
      </div>
    </footer>
  )
}
