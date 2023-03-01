import React, { useState } from 'react';
import './App.css';

const GUESTS = [23, 45, 155, 374, 22, 99, 100, 101, 115, 209];

function App() {
  const [premiumRooms, setPremiumRooms] = useState(0);
  const [economyRooms, setEconomyRooms] = useState(0);

  const handlePremiumRoomsChange = (event) => {
    setPremiumRooms(Number(event.target.value));
  };

  const handleEconomyRoomsChange = (event) => {
    setEconomyRooms(Number(event.target.value));
  };

  const calculateOccupancy = () => {
    // sort guests array in descending order
    const sortedGuests = [...GUESTS].sort((a, b) => b - a);
    let premiumOccupancy = 0;
    let economyOccupancy = 0;
    let premiumTotal = 0;
    let economyTotal = 0;

    // iterate over sorted guests and allocate rooms accordingly
    sortedGuests.forEach((guest) => {
      if (guest >= 100 && premiumRooms > premiumOccupancy) {
        premiumOccupancy++;
        premiumTotal += guest;
      } else if (guest < 100 && economyRooms > economyOccupancy) {
        economyOccupancy++;
        economyTotal += guest;
      }
    });

    return { premiumOccupancy, economyOccupancy, premiumTotal, economyTotal };
  };

  // calculate the occupancy based on current state of premiumRooms and economyRooms
  const { premiumOccupancy, economyOccupancy, premiumTotal, economyTotal } = calculateOccupancy();

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
      <p>Premium: {premiumOccupancy} (EUR {premiumTotal})</p>
      <p>Economy: {economyOccupancy} (EUR {economyTotal})</p>
    </div>
  );
}

export default App;