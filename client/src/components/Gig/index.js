//Gig Componant

import React, { useEffect, useState } from "react";
// time, compensation, fuel, hourly, total
function GigForm(props) {

  const { globalState } = props;
  const [distance, distInput] = useState(0);
  const [time] = useState(0);
  const [compensation, compInput] = useState(0);
  const [fuel, fuelOutput] = useState(distance / globalState.mpg);
  const [deliveryTime, deliveryOutput] = useState(((parseFloat(distance) / parseFloat(globalState.avgSpeed)) * 60) + parseFloat(globalState.avgPickup));
  const [hourly, hourlyOutput] = useState((compensation - (distance / globalState.mpg) * globalState.gasPrice) / (parseFloat(distance) / parseFloat(globalState.avgSpeed) + (parseFloat(globalState.avgPickup) / 60)));
  const [total, totalOutput] = useState(distance / globalState.mpg - time / compensation);
  const [order, setOrder] = useState("");
  const [worthIt, setWorthIt] = useState({
    wageClass: null,
    wageText: null,
    showClass: null
  });


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

  useEffect(() => {
    if (!worthIt.showClass) {
      return
    } else {
      if (hourly > globalState.pay) {
          setWorthIt({
            ...worthIt,
            wageClass: 'bg-success',
            wageText: "Worth it!",
        })
          } else setWorthIt({
            ...worthIt,
            wageClass: 'bg-danger',
            wageText: "Not worth it!"
        })  
    }
  }, [hourly, globalState.pay, worthIt])

  async function calculateAll() {
    setWorthIt({
      ...worthIt,
      showClass: true
    })
    await calculateFuel();
    await calculateHourly();
    await calculateTime();
    await calculateTotal();
    await setOrder("order-last");
  }

  function resetOrder() {
    setOrder("");
    setWorthIt({
      wageClass: null,
      wageText: null,
      showDiv: null
    });
  }

  return (
    <div className="col-11 mx-auto text-center">
      <div className="col-12 mx-auto d-flex flex-row flex-wrap">
        <div className={`col-12 mx-auto mt-3 neu d-grid gap-3 ${order}`}>
          <h1 className="col- mx-auto">Trip Calculator</h1>
          <div className="flex flex-wrap row">
          <div className="col-6">
          <h3>Distance</h3>
          <input
            className="neu-input"
            type="number"
            placeholder={distance}
            onChange={(e) => distInput(e.target.value)}
          />
          </div>

          <div className="col-6">
          <h3>Compensation</h3>
          <input
            className="neu-input"
            type="number"
            placeholder={compensation}
            onChange={(e) => compInput(e.target.value)}
          />
          </div>
          </div>
          <button className="neu-button" onClick={calculateAll}>Go</button>
        </div>
        <div className={`col-12 mx-auto mt-3 neu flex flex-wrap row ${worthIt.wageClass}`}>
          <h2>{worthIt.wageText}</h2>
          <div className="col-6">
          <h6>Fuel Used</h6>
          <p className="neu-input">{fuel.toFixed(2)} gallon(s)</p>
          </div>

          <div className="col-6">
          <h6>Hourly</h6>
          <p className="neu-input" id="hourly-pay">${hourly.toFixed(2)}/hour</p>
          </div>

          <div className="col-6">
          <h6>Estimated Time</h6>
          <p className="neu-input">{deliveryTime.toFixed(0)} minutes</p>
          </div>

          <div className="col-6">
          <h6>Total</h6>
          <p className="neu-input">${total.toFixed(2)}</p>
          </div>
          <button className="neu-button col-12" onClick={resetOrder}>Next Trip!</button>
        </div>
      </div>

    </div>
  );
}

export default GigForm;