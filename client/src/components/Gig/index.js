//Gig Componant 

import React, { useState, useEffect } from 'react';
// import AuthService from '../../utils/auth'

function GigForm() {

  const [distance, distInput] = useState(0);
  const [time, timeInput] = useState(0);
  const [compensation, compInput] = useState(0);
  const [mpg, mpgInput] = useState(0);
  const [gasPrice, gasInput ] = useState(0);
  const [fuel, fuelOutput] = useState(distance / mpg);
  const [hourly, hourlyOutput] = useState(time / compensation);
  const [total, totalOutput] = useState(distance/mpg - time/compensation);
  

  // const [error, setError] = useState(null);
  // const [isLoaded, setIsLoaded] = useState(false);
  // const [items, setItems] = useState([]);

  // const userId = AuthService.getProfile().id;

  


  // useEffect(() => {
  //   // const userId = need to create a function that will return the userId

  //   fetch(`/api/users/${userId}`)
  //     .then((res) => res.json())
  //     .then(
  //       (result) => {
  //         setIsLoaded(true);
  //         setItems(result);
  //       },
  //       (error) => {
  //         setIsLoaded(true);
  //         setError(error);
  //       }
  //     );
  // }, []);

  // const blah = items.username
 

  // fuel calculation based on user input distance and vehicle mpg
  function calculateFuel() {
    fuelOutput(distance / mpg)
   };

   // hourly pay calculation base off of user input travel time and compensation for gig
  function calculateHourly() {
    hourlyOutput(60/time * compensation)
  };

  // total compensation of gig calculated by subtracting total compensation by fuel costs associated with that gig
  function calculateTotal() {
    totalOutput(compensation - distance/mpg * gasPrice)
  }

  return (
    <div className="col-11 mx-auto neu d-grid gap-3">
    <h1 className="col-sm-11 col-lg-8 mx-auto neu text-center">Trip Calculator</h1>

    <div className='d-flex flex-wrap'>

    <div className="col-sm-12 col-lg-5 mx-auto neu d-grid gap-3">
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
    <div className="col-sm-12 col-lg-5 mx-auto neu d-grid gap-3">
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