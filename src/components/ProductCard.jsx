const STATUS = {
  live: {
    label: 'Live',
    dot: '#22c55e',
    text: '#22c55e',
    bg: 'rgba(34,197,94,0.1)',
  },
  coming_soon: {
    label: 'Coming Soon',
    dot: '#f59e0b',
    text: '#f59e0b',
    bg: 'rgba(245,158,11,0.1)',
  },
  collaboration: {
    label: 'In Collaboration',
    dot: '#a78bfa',
    text: '#a78bfa',
    bg: 'rgba(167,139,250,0.1)',
  },
}

export default function ProductCard({ name, description, url, status = 'coming_soon', logoUrl }) {
  const s = STATUS[status]
  const isLive = status === 'live'

  const cardContent = (
    <div
      className="group relative flex flex-col h-full rounded-2xl p-6 transition-all duration-300"
      style={{
        background: 'var(--color-surface-raised)',
        border: '1px solid var(--color-border)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = isLive
          ? 'rgba(0,194,255,0.4)'
          : 'rgba(255,255,255,0.12)'
        e.currentTarget.style.transform = 'translateY(-4px)'
        e.currentTarget.style.boxShadow = isLive
          ? '0 20px 60px rgba(0,194,255,0.08)'
          : '0 20px 40px rgba(0,0,0,0.3)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'var(--color-border)'
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      {/* Header */}
      <div className="mb-4">
        <div className="flex items-center gap-3 mb-2.5">
          {logoUrl ? (
            <img
              src={logoUrl}
              alt={`${name} logo`}
              className="h-8 w-8 rounded-lg object-contain"
              onError={(e) => {
                e.currentTarget.style.display = 'none'
                e.currentTarget.nextElementSibling.style.display = 'block'
              }}
            />
          ) : null}
          <img
            src="/assets/XCanLabs_Logo_X.svg"
            alt="CXanLabs X"
            className="h-8 w-8 rounded-lg object-contain"
            style={{ display: logoUrl ? 'none' : 'block' }}
          />
          <span className="font-semibold text-base" style={{ color: 'var(--color-text)' }}>
            {name}
          </span>
        </div>

        {/* Status badge on its own line */}
        <span
          className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full"
          style={{ color: s.text, background: s.bg }}
        >
          <span className="h-1.5 w-1.5 rounded-full" style={{ background: s.dot }} />
          {s.label}
        </span>
      </div>

      {/* Description */}
      <p
        className="text-sm leading-relaxed flex-1"
        style={{ color: 'var(--color-muted)' }}
      >
        {description}
      </p>

      {/* Live link arrow */}
      {isLive && (
        <div
          className="mt-5 flex items-center gap-1.5 text-sm font-medium"
          style={{ color: 'var(--color-brand)' }}
        >
          Visit site
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M2 7h10M7 2l5 5-5 5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      )}
    </div>
  )

  if (isLive && url) {
    return (
      <a href={url} target="_blank" rel="noopener noreferrer" className="block h-full no-underline">
        {cardContent}
      </a>
    )
  }

  return <div className="h-full">{cardContent}</div>
}
