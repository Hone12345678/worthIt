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
  const [order, setOrder] = useState("")


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

  function calculateAll() {
    calculateFuel();
    calculateHourly();
    calculateTime();
    calculateTotal();
    setOrder("order-last")
  }

  function resetOrder() {
    setOrder("")
  }

  return (
    <div className="col-11 mx-auto text-center">
      <div className="col-12 mx-auto d-flex flex-row flex-wrap">
        <div className={`col-12 mx-auto mt-3 neu d-grid gap-3 ${order}`}>
          <h1 className="col-11 mx-auto">Trip Calculator</h1>
          <h3>Distance</h3>
          <input
            className="neu-input"
            type="number"
            placeholder="0"
            value={distance}
            onChange={(e) => distInput(e.target.value)}
          />

          <h3>Compensation</h3>
          <input
            className="neu-input"
            type="number"
            placeholder="0"
            value={compensation}
            onChange={(e) => compInput(e.target.value)}
          />
          <button className="neu-button" onClick={calculateAll}>Go</button>
        </div>
        <div className="col-12 mx-auto mt-3 neu">
          <h6>Fuel Used</h6>
          <p className="neu-input">{fuel.toFixed(2)} gallon(s)</p>

          <h6>Hourly</h6>
          <p className="neu-input">${hourly.toFixed(2)}/per hour</p>

          <h6>Estimated Time</h6>
          <p className="neu-input">{deliveryTime.toFixed(0)} minutes</p>

          <h6>Total</h6>
          <p className="neu-input">${total.toFixed(2)}</p>
          <button className="neu-button col-12" onClick={resetOrder}>Next Trip!</button>
        </div>
      </div>

    </div>
  );
}

export default GigForm;
