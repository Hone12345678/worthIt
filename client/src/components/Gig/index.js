//Gig Componant

import React, { useState } from "react";

function GigForm(props) {
  const { globalState } = props;
  const [distance, distInput] = useState(0);
  const [time] = useState(0);
  const [compensation, compInput] = useState(0);
  const [fuel, fuelOutput] = useState(distance / globalState.mpg);
  const [deliveryTime, deliveryOutput] = useState(((parseFloat(distance) / parseFloat(globalState.avgSpeed)) * 60) + parseFloat(globalState.avgPickup));
  const [hourly, hourlyOutput] = useState((compensation - (distance / globalState.mpg) * globalState.gasPrice) / (parseFloat(distance) / parseFloat(globalState.avgSpeed) + (parseFloat(globalState.avgPickup) / 60)));
  const [total, totalOutput] = useState(distance / globalState.mpg - time / compensation);

  // fuel calculation based on user input distance and vehicle mpg
  function calculateFuel() {
    fuelOutput(distance / globalState.mpg);
  }

  // time calculation based on user profile of average speed and input of distance
  function calculateTime() {
    deliveryOutput(((parseFloat(distance) / parseFloat(globalState.avgSpeed)) * 60) + parseFloat(globalState.avgPickup));
  }

  // hourly pay calculation base off of user input travel time and compensation for gig
  function calculateHourly() {
    hourlyOutput((compensation - (distance / globalState.mpg) * globalState.gasPrice) / (parseFloat(distance) / parseFloat(globalState.avgSpeed) + (parseFloat(globalState.avgPickup) / 60)));
  }

  // total compensation of gig calculated by subtracting total compensation by fuel costs associated with that gig
  function calculateTotal() {
    totalOutput(compensation - (distance / globalState.mpg) * globalState.gasPrice);
  }

  return (
    <div className="col-11 mx-auto neu d-grid gap-3 text-center">
      <h1 className="col-4 mx-auto h-40 neu">Trip Calculator</h1>

      <div className="d-flex flex-row">
        <div className="col-5 mx-auto neu d-grid gap-3">
          <h3>Distance</h3>
          <input
            type="number"
            placeholder="0"
            value={distance}
            onChange={(e) => distInput(e.target.value)}
          />

          <h3>Compensation</h3>
          <input
            type="number"
            placeholder="0"
            value={compensation}
            onChange={(e) => compInput(e.target.value)}
          />
        </div>
        <div className="col-5 mx-auto neu d-grid gap-3">
          <button onClick={calculateFuel}>Fuel Used</button>
          <h2>{fuel.toFixed(2)} gallon(s)</h2>

          <button onClick={calculateHourly}>Hourly</button>
          <h2>${hourly.toFixed(2)}/per hour</h2>

          <button onClick={calculateTime}>Estimated Time</button>
          <h2>{deliveryTime} minutes</h2>

          <button onClick={calculateTotal}>Total</button>
          <h2>${total.toFixed(2)}</h2>
        </div>
      </div>
    </div>
  );
}

export default GigForm;
