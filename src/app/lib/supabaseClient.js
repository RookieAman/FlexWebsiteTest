import { createClient } from '@supabase/supabase-js'

// export const client = createClient(
//   'https://tnqxnobadgsvcyaighwo.supabase.co',
//   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRucXhub2JhZGdzdmN5YWlnaHdvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ5Njg2NjUsImV4cCI6MjA0MDU0NDY2NX0.RKfqk95U-xprWBBjkHgHkNes2liY6NIpMohaJDG57dM'
// )

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Supabase URL and Anonymous Key are required')
}

export const client = createClient(supabaseUrl, supabaseAnonKey)
