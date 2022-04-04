// allows user to view and make changes to there current account settings 
// updating desired pay rate and average driving speed

import { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import AuthService from "../../utils/auth";

function Profile(props) {

  const {
    setCurrentComponent,
    globalState,
    setGlobalState
  } = props;

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  
  const userId= AuthService.getProfile().id;
 
  const buttonHandler = (e) => {
    e.preventDefault();
    // const gasPrice = document.querySelector('#gasPrice').value.trim();
    const pay = document.querySelector('#pay').value.trim();
    
    fetch(`/api/users/${userId}`, {
      method: 'PUT',
      body: JSON.stringify({
        gasPrice: globalState.gasPrice,
        pay
      }),
      headers: { 'Content-Type': 'application/json' }
    })
    .then((res)=> {return res.json()})
      // .then((res)=> {
      // })
      .catch(err => {
        alert(err.message)
      })
      setCurrentComponent('gig')
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

  function updateGasPrice(e) {
    setGlobalState({
      ...globalState,
      gasPrice: e.target.value
    })
  }

  function updateMpg(e) {
    setGlobalState({
      ...globalState,
      mpg: e.target.value
    })
  }

  function updateSpeed(e) {
    setGlobalState({
      ...globalState,
      avgSpeed: e.target.value
    })
  }

  function updatePickup(e) {
    setGlobalState({
      ...globalState,
      avgPickup: e.target.value
    })
  }

  return (
    <Form className="col-6 mx-auto neu d-grid gap-3" id="login-form">
      <h2>Profile</h2>
      <section>
        <p>Username: {items.username}</p>
        <p>Email: {items.email}</p>
        <Form.Group className="">
          <Form.Label bsPrefix="neu-label" htmlFor="pay">Desired Pay Rate: </Form.Label>
          <Form.Control bsPrefix="neu-input" id="pay" type="text" name="pay" defaultValue={items.pay} />
        </Form.Group>
        <Form.Group>
          <Form.Label bsPrefix="neu-label" htmlFor="gasPrice">Gas Price: </Form.Label>
          <Form.Control bsPrefix="neu-input" id="gasPrice" type="gasPrice" name="gasPrice" value={globalState.gasPrice} onChange={updateGasPrice} />
        </Form.Group>
        <Form.Group>
          <Form.Label bsPrefix="neu-label" htmlFor="mpg">Miles per Gallon: </Form.Label>
          <Form.Control bsPrefix="neu-input" id="mpg" type="mpg" name="mpg" value={globalState.mpg} onChange={updateMpg} />
        </Form.Group>
        <Form.Group>
          <Form.Label bsPrefix="neu-label" htmlFor="avgSpeed">Average Speed: </Form.Label>
          <Form.Control bsPrefix="neu-input" id="avgSpeed" type="avgSpeed" name="avgSpeed" value={globalState.avgSpeed} onChange={updateSpeed} />
        </Form.Group>
        <Form.Group>
          <Form.Label bsPrefix="neu-label" htmlFor="avgPickup">Average Store Pickup: </Form.Label>
          <Form.Control bsPrefix="neu-input" id="avgPickup" type="avgPickup" name="avgPickup" value={globalState.avgPickup} onChange={updatePickup} />
        </Form.Group>
        <Button className='neu-button' onClick={buttonHandler}>Get It!</Button>
      </section>
    </Form>
  );
}

export default Profile;