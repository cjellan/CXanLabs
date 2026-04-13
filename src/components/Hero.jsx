export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Ambient background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(0,194,255,0.12) 0%, transparent 70%)',
        }}
      />

      {/* Grid overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(var(--color-brand) 1px, transparent 1px), linear-gradient(90deg, var(--color-brand) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 flex flex-col items-center text-center max-w-3xl">
        {/* Logo */}
        <div className="mb-8">
          <img
            src="/assets/cxanlabs-logo.svg"
            alt="CXanLabs"
            className="h-20 w-auto"
            onError={(e) => {
              // Fallback text mark if logo file isn't present yet
              e.currentTarget.style.display = 'none'
              e.currentTarget.nextElementSibling.style.display = 'block'
            }}
          />
          <span
            className="hidden text-5xl font-extrabold tracking-tight"
            style={{ color: 'var(--color-brand)' }}
          >
            CXan<span style={{ color: 'var(--color-text)' }}>Labs</span>
          </span>
        </div>

        <h1
          className="text-6xl sm:text-7xl font-extrabold tracking-tight leading-none mb-6"
          style={{ color: 'var(--color-text)' }}
        >
          CXan<span style={{ color: 'var(--color-brand)' }}>Labs</span>
        </h1>

        <p
          className="text-xl sm:text-2xl font-light max-w-xl leading-relaxed"
          style={{ color: 'var(--color-muted)' }}
        >
          Automating the workflows everyone hates.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <a
            href="#products"
            className="px-8 py-3 rounded-lg font-semibold text-sm tracking-wide transition-all duration-200"
            style={{
              background: 'var(--color-brand)',
              color: '#0a0a0f',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--color-brand-dim)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--color-brand)')}
          >
            See Our Products
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-lg font-semibold text-sm tracking-wide border transition-all duration-200"
            style={{
              borderColor: 'var(--color-border)',
              color: 'var(--color-text)',
              background: 'transparent',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--color-brand)')}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--color-border)')}
          >
            Get In Touch
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs tracking-widest uppercase" style={{ color: 'var(--color-muted)' }}>
          Scroll
        </span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          style={{ color: 'var(--color-muted)' }}
        >
          <path
            d="M8 3v10M3 8l5 5 5-5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  )
}
