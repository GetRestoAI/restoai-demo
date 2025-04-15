import Link from 'next/link'

export default function Home() {
  return (
    <main style={{ fontFamily: 'Arial, sans-serif', padding: '2rem' }}>
      <h1>Welkom bij de Resto.ai Demo</h1>
      <p>Klik hieronder om de voorraadtekorten te bekijken:</p>
      <Link href="/tekorten">
        <button style={{ marginTop: '1rem', padding: '0.5rem 1rem', fontSize: '1rem' }}>
          Bekijk tekorten
        </button>
      </Link>
    </main>
  )
}