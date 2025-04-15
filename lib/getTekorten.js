import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
export const supabase = createClient(supabaseUrl, supabaseKey)

export async function getTekorten() {
  const { data, error } = await supabase
    .from('voorraad')
    .select('*')
    .lt('aantal', supabase.ref('minimum'))

  if (error) {
    console.error(error)
    return []
  }
  return data
}