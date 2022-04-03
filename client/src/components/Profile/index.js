// allows user to view and make changes to there current account settings 
// updating desired pay rate and average driving speed

import { useEffect, useState } from "react";
import { Form, Button, } from "react-bootstrap";
import AuthService from "../../utils/auth";


function Profile(props) {

  const {
    setCurrentComponent,
  } = props;

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  const gigs = [
    {name: 'Select a Gig to add or remove'}, {name: "GrubHub"}, {name: "doorDash"}, {name: "UberEats"}
  ]
  
  const userId= AuthService.getProfile().id;
  
  const removeHandler = async function(e) {
    const click = e.target.id
    e.preventDefault();
    console.log(items.car);
    // if (click === 'gig') {
    //   await fetch(`/api/users/${userId}`, {
    //     method: 
    //   })
    // }
  }

  const buttonHandler = async (e) => {
    e.preventDefault();
    const speed = document.querySelector('#speed').value.trim();
    const pay = document.querySelector('#pay').value.trim();
    const gasPrice = document.querySelector('#gasPrice').value.trim();
    const gig = document.querySelector('#gig').value.trim();
    const carName = document.querySelector('#carName').value.trim();
    const car = document.querySelector('#car').value.trim();
    const mpg = document.querySelector('#mpg').value.trim();
    try {
      fetch(`/api/users/${userId}`, {
        method: 'PUT',
        body: JSON.stringify({
          speed: speed,
          pay: pay,
          gasPrice: gasPrice,
        }),
        headers: { 'Content-Type': 'application/json' }
      })
      fetch(`/api/users/${userId}/gig/`, {
        method: 'PUT',
        body: JSON.stringify({
          gigs: gig,
        }),
        headers: { 'Content-Type': 'application/json' }
      })
    } catch (error) {
      return (error)
    }
      return setCurrentComponent('profile')
    }

  useEffect(() => {
    // const userId = need to create a function that will return the userId
  
    fetch(`/api/users/${userId}`)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  return (
    <Form className="col-6 mx-auto neu d-grid gap-3" id="login-form">
      <h2>Profile</h2>
      <section>
        <h5>Username:</h5> {items.username}
        <h5>Email:</h5> {items.email}
        <Form.Group className="">
          <Form.Label bsPrefix="neu-label" htmlFor="pay"><h5>Desired Pay Rate:</h5> </Form.Label>
          <Form.Control bsPrefix="neu-input" id="pay" type="text" name="pay" defaultValue={items.pay} />
        </Form.Group>
        <Form.Group>
          <Form.Label bsPrefix="neu-label" htmlFor="speed"><h5>Average Speed:</h5></Form.Label>
          <Form.Control bsPrefix="neu-input" id="speed" type="number" name="Speed" defaultValue={items.speed} />
        </Form.Group>
        <Form.Group>
          <Form.Label bsPrefix="neu-label" htmlFor="gasPrice"><h5>Gas Price:</h5> </Form.Label>
          <Form.Control bsPrefix="neu-input" id="gasPrice" type="number" name="gasPrice" defaultValue={items.gasPrice} />
        </Form.Group>
        <Form.Group>
          <Form.Label bsPrefix="neu-label" htmlFor="gig"><h5>Gig:</h5> </Form.Label>
          <select id="gig" name="gig" > Select a Gig 
            {gigs.map((options) => (
              <option key={options.name} value={options.name}>{options.name}</option >
            ))}
            </select>
          <p>Clicking the remove button below will remove the gig if it has been added to your profile. Otherwise, clicking "Get It" below will add the selected gig to your profile.</p>
          <Button id="removeGig" onClick={removeHandler}>Remove Selected Gig</Button>
        </Form.Group>
        <Form.Group>
          <Form.Label bsPrefix="neu-label" htmlFor="car"><h5>Car:</h5> </Form.Label>
          <select id="car" name="car" > Select a Car 

              {/* this mapping stuff isn't working. */}

            {/* {items.car.map((options) => (
              <option key ={options.car} value={options.car}>{options.car}</option >
            ))} */}
            </select>
          <p>Clicking the remove button below will remove the car. Otherwise, clicking "Get It" below will add the selected car to your profile.</p>
          <Button id="removeCar" onClick={removeHandler}>Remove Selected car</Button>
        </Form.Group>
        <Form.Group>
          <Form.Label bsPrefix="neu-label" htmlFor="addCar"><h5>Add a Car </h5></Form.Label>
          <Form.Control bsPrefix="neu-input" id="carName" type="text" name="carName" />
          <Form.Control bsPrefix="neu-input" id="mpg" type="number" name="mpg" />
        </Form.Group>
        <Button className='neu-button' onClick={buttonHandler}>Get It!</Button>
      </section>
    </Form>
  );
}

export default Profile;