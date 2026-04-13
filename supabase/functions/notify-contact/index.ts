import { serve } from 'https://deno.land/std@0.177.0/http/server.ts'

serve(async (req: Request) => {
  try {
    const payload = await req.json()
    const record = payload.record

    const resendApiKey = Deno.env.get('RESEND_API_KEY')
    if (!resendApiKey) {
      return new Response('RESEND_API_KEY not set', { status: 500 })
    }

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: 'CXanLabs Contact <onboarding@resend.dev>',
        to: ['chris@cxanlabs.ai'],
        subject: `New contact from ${record.name}`,
        html: `
          <h2>New CXanLabs Contact Submission</h2>
          <p><strong>Name:</strong> ${record.name}</p>
          <p><strong>Email:</strong> <a href="mailto:${record.email}">${record.email}</a></p>
          <p><strong>Message:</strong></p>
          <p>${record.message.replace(/\n/g, '<br>')}</p>
          <hr>
          <p style="color:#888;font-size:12px;">Submitted at ${new Date(record.created_at).toLocaleString()}</p>
        `,
      }),
    })

    if (!res.ok) {
      const error = await res.text()
      console.error('Resend error:', error)
      return new Response(`Email failed: ${error}`, { status: 500 })
    }

    return new Response('Email sent', { status: 200 })
  } catch (err) {
    console.error('Function error:', err)
    return new Response('Internal error', { status: 500 })
  }
})
