import ProductCard from './ProductCard'

function faviconUrl(domain) {
  return `https://www.google.com/s2/favicons?domain=${domain}&sz=64`
}

const LIVE_PRODUCTS = [
  {
    name: 'XanderFCR.io',
    description:
      'Bringing a modern, user-friendly application to the world of Federal Court Reporting. XanderFCR handles your invoicing, AO compliance reports, time logs, expenses, and tax summaries — so you can focus on the courtroom.',
    url: 'https://xanderfcr.io',
    status: 'live',
    logoUrl: '/assets/XanderFCR_LogoX.svg',
  },
  {
    name: 'XanWeek.io',
    description:
      'The scheduling and tracking app that helps you manage your babysitting, nanny, or au pair schedules in a seamless, mobile-first platform.',
    url: 'https://xanweek.io',
    status: 'live',
    logoUrl: faviconUrl('xanweek.io'),
  },
]

const IN_PROGRESS_PRODUCTS = [
  {
    name: 'XanScan.io',
    description:
      'AI-powered document and barcode scanning that turns physical records into structured, searchable data instantly.',
    status: 'coming_soon',
  },
  {
    name: 'XanHome.io',
    description:
      'Home management, simplified — track maintenance schedules, warranties, and home projects all in one place.',
    status: 'coming_soon',
  },
  {
    name: 'VetApp.io',
    description:
      'A collaborative platform streamlining veterinary workflows, from appointment management to patient record automation.',
    status: 'collaboration',
  },
  {
    name: 'StencilGC.io',
    description:
      'Automating tattoo artists\' busy schedules, payment processing, and automated marketing from one simple application.',
    status: 'collaboration',
  },
]

function SectionLabel({ children }) {
  return (
    <div className="flex items-center gap-4 mb-8">
      <span
        className="text-xs font-semibold tracking-widest uppercase"
        style={{ color: 'var(--color-brand)' }}
      >
        {children}
      </span>
      <div className="flex-1 h-px" style={{ background: 'var(--color-border)' }} />
    </div>
  )
}

export default function ProductsSection() {
  return (
    <section id="products" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="mb-20 text-center">
          <h2
            className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4"
            style={{ color: 'var(--color-text)' }}
          >
            What We&apos;re Building
          </h2>
          <p
            className="text-lg max-w-xl mx-auto"
            style={{ color: 'var(--color-muted)' }}
          >
            A growing suite of tools designed to eliminate the friction in everyday workflows.
          </p>
        </div>

        {/* Live products */}
        <div className="mb-16">
          <SectionLabel>Live Now</SectionLabel>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {LIVE_PRODUCTS.map((p) => (
              <ProductCard key={p.name} {...p} />
            ))}
          </div>
        </div>

        {/* In progress */}
        <div>
          <SectionLabel>In the Works</SectionLabel>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {IN_PROGRESS_PRODUCTS.map((p) => (
              <ProductCard key={p.name} {...p} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
