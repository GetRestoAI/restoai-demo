import { useEffect, useState } from 'react'
import { getTekorten } from '../lib/getTekorten'

export default function TekortenPage() {
  const [tekorten, setTekorten] = useState(null)

  useEffect(() => {
    getTekorten().then(setTekorten)
  }, [])

  const fallback = [
    { id: '1', productnaam: 'IPA', aantal: 2, minimum: 5 },
    { id: '2', productnaam: 'Basilicum', aantal: 1, minimum: 4 }
  ]

  const lijst = tekorten === null ? fallback : tekorten

  return (
    <main style={{ fontFamily: 'Arial', padding: '2rem' }}>
      <h1>Voorraadtekorten</h1>
      {lijst.length === 0 ? (
        <p>Geen tekorten 🎉</p>
      ) : (
        <ul>
          {lijst.map((t) => (
            <li key={t.id}>
              {t.productnaam}: {t.aantal} (min: {t.minimum})
            </li>
          ))}
        </ul>
      )}
    </main>
  )
}
