import Link from 'next/link'

export default function Home() {
  return (
    <main style={{ fontFamily: 'Arial', padding: '2rem' }}>
      <h1>Welkom bij de Resto.ai Demo</h1>
      <p>Bekijk hier je voorraadtekorten:</p>
      <Link href="/tekorten">
        <button style={{ marginTop: '1rem', padding: '0.5rem 1rem' }}>
          Bekijk tekorten
        </button>
      </Link>
    </main>
  )
}
