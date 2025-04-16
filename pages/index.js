import Link from 'next/link'

export default function Home() {
  return (
    <main style={{ fontFamily: 'Arial', padding: '2rem' }}>
      <img src="/img/logo-kleur.png" alt="Resto.ai logo" style={{ maxWidth: '300px', marginBottom: '2rem' }} />
      <h1>Welkom bij de Resto.ai Demo</h1>
      <p>Bekijk hier de verschillende modules:</p>

      <Link href="/tekorten">
        <button style={{ marginTop: '1rem', marginRight: '1rem', padding: '0.5rem 1rem' }}>
          Bekijk tekorten
        </button>
      </Link>

      <Link href="/rooster">
        <button style={{ marginTop: '1rem', padding: '0.5rem 1rem' }}>
          Roostermodule openen
        </button>
      </Link>
    </main>
  )
}