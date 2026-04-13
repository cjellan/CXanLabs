import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

const configured = Boolean(supabaseUrl && supabaseAnonKey)

if (!configured) {
  console.warn(
    '[CXanLabs] Supabase env vars not set. Add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to .env.local to enable the contact form.'
  )
}

export const supabase = configured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null
