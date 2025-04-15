import { useEffect, useState } from 'react'
import { getTekorten } from '../lib/getTekorten'

export default function TekortenPage() {
  const [tekorten, setTekorten] = useState([])

  useEffect(() => {
    getTekorten().then(setTekorten)
  }, [])

  return (
    <main style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1>Voorraadtekorten</h1>
      {tekorten.length === 0 ? (
        <p>Er zijn momenteel geen tekorten 🎉</p>
      ) : (
        <ul>
          {tekorten.map(item => (
            <li key={item.id}>
              <strong>{item.productnaam}</strong>: {item.aantal} (min. {item.minimum})
            </li>
          ))}
        </ul>
      )}
    </main>
  )
}