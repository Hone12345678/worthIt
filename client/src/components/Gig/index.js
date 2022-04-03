//Gig Componant 

import React, { useState } from 'react';

function GigForm() {

  const [distance, distInput] = useState(0);
  const [time, timeInput] = useState(0);
  const [compensation, compInput] = useState(0);
  const [mpg, mpgInput] = useState(0);
  const [gasPrice, gasInput ] = useState(0);
  const [fuel, fuelOutput] = useState(distance / mpg);
  const [hourly, hourlyOutput] = useState(time / compensation);
  const [total, totalOutput] = useState(distance/mpg - time/compensation);
  
  function calculateFuel() {
    fuelOutput(distance / mpg)
   };

  function calculateHourly() {
    hourlyOutput(60/time * compensation)
  };

  function calculateTotal() {
    totalOutput(compensation - distance/mpg * gasPrice)
  }

  return (
    <div className="col-11 mx-auto neu d-grid gap-3">
    <h1 className="col-4 mx-auto h-40 neu">Trip Calculator</h1>

    <div className='d-flex flex-row'>

    <div className="col-5 mx-auto neu d-grid gap-3">
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

      <h3>Gas Price</h3>
      <input 
      type="number" 
      placeholder="0" 
      value={gasPrice} 
      onChange={e => gasInput(e.target.value)} />

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
    <div className="col-5 mx-auto neu d-grid gap-3">
    <button onClick={calculateFuel}>Fuel Used</button>
    <h2>{fuel} gallons</h2>

    <button onClick={calculateHourly}>Hourly</button>
    <h2>${hourly}/per hour</h2>

    <button onClick={calculateTotal}>Total</button>
    <h2>${total}</h2>

    </div>
    </div>


    </div>
  )
}

export default GigForm;