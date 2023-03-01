import React, { useState } from 'react';
import './App.css';



function App() {
  const [premiumRooms, setPremiumRooms] = useState(0);
  const [economyRooms, setEconomyRooms] = useState(0);

  const handlePremiumRoomsChange = (event) => {
    setPremiumRooms(Number(event.target.value));
  };

  const handleEconomyRoomsChange = (event) => {
    setEconomyRooms(Number(event.target.value));
  };

  return (
    <div>
      <h1>Room Occupancy Calculator</h1>
      <p>
        <label>
          Premium Rooms:
          <input type="number" value={premiumRooms} onChange={handlePremiumRoomsChange} />
        </label>
      </p>
      <p>
        <label>
          Economy Rooms:
          <input type="number" value={economyRooms} onChange={handleEconomyRoomsChange} />
        </label>
      </p>
      <h2>Occupancy</h2>
      
    </div>
  );
}

export default App;