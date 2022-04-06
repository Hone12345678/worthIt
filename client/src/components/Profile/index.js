// allows user to view and make changes to there current account settings
// updating desired pay rate and average driving speed
import { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import AuthService from "../../utils/auth";

function Profile(props) {
  const { setCurrentComponent, globalState, setGlobalState } = props;
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const userId = AuthService.getProfile().id;
  const buttonHandler = (e) => {
    e.preventDefault();
    const pay = document.querySelector("#pay").value.trim();
    const gasPrice = document.querySelector("#gasPrice").value.trim();
    const mpg = document.querySelector("#mpg").value.trim();
    const avgSpeed = document.querySelector("#avgSpeed").value.trim();
    const avgPickup = document.querySelector("#avgPickup").value.trim();
    fetch(`/api/users/${userId}`, {
      method: "PUT",
      body: JSON.stringify({
        gasPrice: gasPrice,
        pay: pay,
        speed: avgSpeed,
        mpg: mpg,
        pickUpTime: avgPickup,
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        return res.json();
      })
      // .then((res)=> {
      // })
      .catch((err) => {
        alert(err.message);
      });
    updateGlobalState();
    setCurrentComponent("gig");
  };
  useEffect(() => {
    // const userId = need to create a function that will return the userId
    fetch(`/api/users/${userId}`)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [userId]);

  function updateGlobalState(e) {
    setGlobalState({
      gasPrice: items.gasPrice,
      pay: items.pay,
      mpg: items.mpg,
      avgSpeed: items.speed,
      avgPickup: items.pickUpTime
    })
  }

  function updateGasPrice(e) {
    setGlobalState({
      ...globalState,
      gasPrice: e.target.value,
    });
  }
  function updatePay(e) {
    setGlobalState({
      ...globalState,
      pay: e.target.value,
    });
  }
  function updateMpg(e) {
    setGlobalState({
      ...globalState,
      mpg: e.target.value,
    });
  }
  function updateSpeed(e) {
    setGlobalState({
      ...globalState,
      avgSpeed: e.target.value,
    });
  }
  function updatePickup(e) {
    setGlobalState({
      ...globalState,
      avgPickup: e.target.value,
    });
  }
  return (
    <Form className="col-11 mt-3 neu mx-auto d-flex flex-wrap text-center" id="login-form">
      <h2 className="col-12 text-center">{items.username}'s Profile</h2>
      <section className="row flex-wrap w-100 mx-auto">
        {/* <h5 className="col-6">Username: {items.username}</h5>  */}
        <h5 className="col-12 text-center">Email: {items.email}</h5>
        <Form.Group className="col-6">
          <Form.Label bsPrefix="neu-label" htmlFor="pay">
            Desired Pay Rate (per Hour):{" "}
          </Form.Label>
          <div className="d-inline">
          <Form.Control
            bsPrefix="neu-input"
            id="pay"
            type="number"
            name="pay"
            defaultValue={items.pay}
            onChange={updatePay}
          />
          </div>
        </Form.Group>
        <Form.Group className="col-6">
          <Form.Label bsPrefix="neu-label" htmlFor="avgSpeed">
            Average Speed (in MPH):{" "}
          </Form.Label>
          <Form.Control
            bsPrefix="neu-input"
            id="avgSpeed"
            type="number"
            name="avgSpeed"
            defaultValue={items.speed}
            onChange={updateSpeed}
          />
        </Form.Group>
        <Form.Group className="col-6">
          <Form.Label bsPrefix="neu-label" htmlFor="gasPrice">
            Gas Price:{" "}
          </Form.Label>
          <Form.Control
            bsPrefix="neu-input"
            id="gasPrice"
            type="number"
            name="gasPrice"
            defaultValue={items.gasPrice}
            onChange={updateGasPrice}
          />
        </Form.Group>
        <Form.Group className="col-6">
          <Form.Label bsPrefix="neu-label" htmlFor="mpg">
            Miles/Gallon:{" "}
          </Form.Label>
          <Form.Control
            bsPrefix="neu-input"
            id="mpg"
            type="number"
            name="mpg"
            defaultValue={items.mpg}
            onChange={updateMpg}
          />
        </Form.Group>
        <Form.Group className="col-sm-12 col-md-6 mx-auto mb-4">
          <Form.Label bsPrefix="neu-label" htmlFor="avgPickup">
            Approximate Time Spent Picking Up Items (in Minutes):{" "}
          </Form.Label>
          <Form.Control
            bsPrefix="neu-input"
            id="avgPickup"
            type="number"
            name="avgPickup"
            defaultValue={items.pickUpTime}
            onChange={updatePickup}
          />
        </Form.Group>
        <Button bsPrefix="neu-button" onClick={buttonHandler}>
          Submit
        </Button>
      </section>
    </Form>
  );
}
export default Profile;
