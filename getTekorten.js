import { supabase } from './supabaseClient'

export async function getTekorten() {
  const { data, error } = await supabase
    .from('voorraad')
    .select('*')
    .lt('aantal', supabase.ref('minimum'))

  if (error) {
    console.error('Fout bij ophalen tekorten:', error)
    return []
  }
  return data
}