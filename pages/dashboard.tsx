import React, { useState } from 'react'

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('rooster')

  return (
    <div>
      <h1>Resto.AI Demo Dashboard</h1>
      <div style={{ marginBottom: '1rem' }}>
        <button onClick={() => setActiveTab('rooster')}>AI Roostermodule</button>
        <button onClick={() => setActiveTab('voorraad')}>Voorraadbeheer</button>
        <button onClick={() => setActiveTab('inkoop')}>Inkoopmodule</button>
      </div>
      <div>
        {activeTab === 'rooster' && <p>[Roostercomponent komt hier]</p>}
        {activeTab === 'voorraad' && <p>[Voorraadcomponent komt hier]</p>}
        {activeTab === 'inkoop' && <p>[Inkoopcomponent komt hier]</p>}
      </div>
    </div>
  )
}

export default Dashboard
