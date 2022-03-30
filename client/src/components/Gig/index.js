import React, { useState } from 'react';

function GigForm() {

  const [distance, distInput] = useState(0);
  const [time, timeInput] = useState(0);
  const [compensation, compInput] = useState(0);
  const [mpg, mpgInput] = useState(0);
  const [fuel, fuelOutput] = useState(distance / mpg);
  const [hourly, hourlyOutput] = useState(time / compensation);
  const [total, totalOutput] = useState(distance/mpg - time/compensation);
  
  function calculateFuel() {
    fuelOutput(distance / mpg)
   };

  function calculateHourly() {
    hourlyOutput(time / compensation)
  };

  function calculateTotal() {
    totalOutput(distance/mpg - time/compensation)
  }

  return (
    <div>

    <h1>Trip Calculator</h1>

    <div>
      <h3>Distance</h3>
      <input 
      type="number" 
      placeholder="0" 
      value={distance} 
      onChange={e => distInput(e.target.value)} />

      <h3>Miles Per Gallon</h3>
      <input 
      type="number" 
      placeholder="0" 
      value={mpg} 
      onChange={e => mpgInput(e.target.value)} />

      <h3>Time</h3>
      <input 
      type="number" 
      placeholder="0" 
      value={time} 
      onChange={e => timeInput(e.target.value)} />

      <h3>Compensation</h3>
      <input 
      type="number" 
      placeholder="0" 
      value={compensation} 
      onChange={e => compInput(e.target.value)} />
    </div>

    <button onClick={calculateFuel}>Fuel Used</button>
    <h2>{fuel}</h2>

    <button onClick={calculateHourly}>Hourly</button>
    <h2>${hourly}/per hour</h2>

    <button onClick={calculateTotal}>Total</button>
    <h2>{total}</h2>


    </div>
  )
}

export default GigForm;