import { useState } from 'react';
import medewerkers from '../lib/medewerkers';

const tijdvakken = [
  '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00',
  '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '22:30'
];

export default function RoosterPagina() {
  const [rooster, setRooster] = useState({});

  const toggleShift = (medewerkerId, tijdvak) => {
    const key = `${medewerkerId}-${tijdvak}`;
    setRooster((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="p-4 bg-gradient-to-r from-orange-500 to-yellow-300 min-h-screen">
      <h1 className="text-3xl font-bold text-white mb-6">Resto.ai Roostermodule</h1>
      <div className="overflow-auto bg-white rounded-xl shadow-md p-4">
        <table className="min-w-full text-sm">
          <thead>
            <tr>
              <th className="text-left p-2">Medewerker</th>
              {tijdvakken.map((tijd) => (
                <th key={tijd} className="text-center px-2 py-1 whitespace-nowrap">{tijd}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {medewerkers.map((medewerker) => (
              <tr key={medewerker.id}>
                <td className="font-medium px-2 py-1 whitespace-nowrap">{medewerker.naam}</td>
                {tijdvakken.map((tijd) => {
                  const key = `${medewerker.id}-${tijd}`;
                  const actief = rooster[key];
                  return (
                    <td
                      key={key}
                      onClick={() => toggleShift(medewerker.id, tijd)}
                      className={`cursor-pointer px-2 py-1 text-center rounded ${actief ? 'bg-blue-600 text-white' : 'bg-gray-100'}`}
                    >
                      {actief ? '✓' : ''}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}