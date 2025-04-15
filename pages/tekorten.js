import { useEffect, useState } from 'react'
import { getTekorten } from '../lib/getTekorten'

export default function TekortenPage() {
  const [tekorten, setTekorten] = useState([])

  useEffect(() => {
    getTekorten().then(setTekorten)
  }, [])

  return (
    <main style={{ fontFamily: 'Arial', padding: '2rem' }}>
      <h1>Voorraadtekorten</h1>
      {tekorten.length === 0 ? (
        <p>Geen tekorten 🎉</p>
      ) : (
        <ul>
          {tekorten.map((t) => (
            <li key={t.id}>
              {t.productnaam}: {t.aantal} (min: {t.minimum})
            </li>
          ))}
        </ul>
      )}
    </main>
  )
}