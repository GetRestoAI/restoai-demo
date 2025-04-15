export async function getTekorten() {
  try {
    const { createClient } = await import('@supabase/supabase-js')
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    )
    const { data, error } = await supabase
      .from('voorraad')
      .select('*')
      .lt('aantal', supabase.ref('minimum'))
    if (error) throw error
    return data
  } catch (err) {
    console.warn('Supabase fout of geen verbinding:', err.message)
    return null
  }
}
