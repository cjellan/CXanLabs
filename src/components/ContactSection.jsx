import { useState } from 'react'
import { supabase } from '../lib/supabase'

const INITIAL_FORM = { name: '', email: '', message: '' }

export default function ContactSection() {
  const [form, setForm] = useState(INITIAL_FORM)
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('loading')

    if (!supabase) {
      console.error('Supabase is not configured. Add env vars to .env.local.')
      setStatus('error')
      return
    }

    const { error } = await supabase.from('contact_submissions').insert([
      {
        name: form.name.trim(),
        email: form.email.trim(),
        message: form.message.trim(),
      },
    ])

    if (error) {
      console.error('Submission error:', error)
      setStatus('error')
    } else {
      setStatus('success')
      setForm(INITIAL_FORM)
    }
  }

  return (
    <section id="contact" className="py-28 px-6">
      {/* Top divider */}
      <div className="max-w-6xl mx-auto">
        <div className="h-px mb-28" style={{ background: 'var(--color-border)' }} />
      </div>

      <div className="max-w-2xl mx-auto">
        {/* Heading */}
        <div className="mb-12 text-center">
          <span
            className="text-xs font-semibold tracking-widest uppercase"
            style={{ color: 'var(--color-brand)' }}
          >
            Let&apos;s Talk
          </span>
          <h2
            className="text-4xl sm:text-5xl font-extrabold tracking-tight mt-3 mb-4"
            style={{ color: 'var(--color-text)' }}
          >
            Got a workflow that drives you crazy?
          </h2>
          <p className="text-lg" style={{ color: 'var(--color-muted)' }}>
            Whether it&apos;s a personal pain point, a business bottleneck, or a product idea you
            can&apos;t shake — reach out. We build software that makes these problems disappear.
          </p>
        </div>

        {/* Form */}
        {status === 'success' ? (
          <div
            className="rounded-2xl p-10 text-center"
            style={{
              background: 'var(--color-surface-raised)',
              border: '1px solid rgba(34,197,94,0.3)',
            }}
          >
            <div
              className="mx-auto mb-4 h-12 w-12 rounded-full flex items-center justify-center"
              style={{ background: 'rgba(34,197,94,0.12)' }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 13l4 4L19 7"
                  stroke="#22c55e"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--color-text)' }}>
              Message sent!
            </h3>
            <p style={{ color: 'var(--color-muted)' }}>
              Thanks for reaching out. We&apos;ll be in touch soon.
            </p>
            <button
              className="mt-6 text-sm font-medium underline underline-offset-4"
              style={{ color: 'var(--color-brand)' }}
              onClick={() => setStatus('idle')}
            >
              Send another message
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl p-8 sm:p-10 flex flex-col gap-5"
            style={{
              background: 'var(--color-surface-raised)',
              border: '1px solid var(--color-border)',
            }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <Field
                label="Name"
                name="name"
                type="text"
                placeholder="Jane Smith"
                value={form.name}
                onChange={handleChange}
                required
              />
              <Field
                label="Email"
                name="email"
                type="email"
                placeholder="jane@example.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <Field
              label="What's on your mind?"
              name="message"
              type="textarea"
              placeholder="Tell us about the workflow, pain point, or idea you want to turn into reality..."
              value={form.message}
              onChange={handleChange}
              required
            />

            {status === 'error' && (
              <p className="text-sm" style={{ color: '#f87171' }}>
                Something went wrong. Please try again or email us directly.
              </p>
            )}

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full py-3.5 rounded-lg font-semibold text-sm tracking-wide transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
              style={{
                background: 'var(--color-brand)',
                color: '#0a0a0f',
              }}
              onMouseEnter={(e) => {
                if (status !== 'loading') e.currentTarget.style.background = 'var(--color-brand-dim)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'var(--color-brand)'
              }}
            >
              {status === 'loading' ? 'Sending…' : 'Send Message'}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}

function Field({ label, name, type, placeholder, value, onChange, required }) {
  const inputClass =
    'w-full rounded-lg px-4 py-3 text-sm outline-none transition-all duration-200'
  const inputStyle = {
    background: 'var(--color-surface)',
    border: '1px solid var(--color-border)',
    color: 'var(--color-text)',
  }

  function handleFocus(e) {
    e.currentTarget.style.borderColor = 'var(--color-brand)'
    e.currentTarget.style.boxShadow = '0 0 0 3px rgba(0,194,255,0.1)'
  }
  function handleBlur(e) {
    e.currentTarget.style.borderColor = 'var(--color-border)'
    e.currentTarget.style.boxShadow = 'none'
  }

  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={name}
        className="text-xs font-semibold tracking-wide uppercase"
        style={{ color: 'var(--color-muted)' }}
      >
        {label}
      </label>
      {type === 'textarea' ? (
        <textarea
          id={name}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          rows={5}
          className={inputClass}
          style={{ ...inputStyle, resize: 'vertical' }}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          className={inputClass}
          style={inputStyle}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      )}
    </div>
  )
}
