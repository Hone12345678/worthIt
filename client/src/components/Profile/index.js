// allows user to view and make changes to there current account settings 
// updating desired pay rate and average driving speed

import { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import AuthService from "../../utils/auth";

function Profile(props) {

  const {
    setCurrentComponent,
  } = props;

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  
  const userId= AuthService.getProfile().id;
  console.log("profile", userId);
 
  const buttonHandler = (e) => {
    e.preventDefault();
    const speed = document.querySelector('#speed').value.trim();
    const pay = document.querySelector('#pay').value.trim();
    
    fetch(`/api/users/${userId}`, {
      method: 'PUT',
      body: JSON.stringify({
        speed,
        pay
      }),
      headers: { 'Content-Type': 'application/json' }
    })
    .then((res)=> {return res.json()})
      .then((res)=> {
        console.log("put function", res)
      })
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
          console.log(result)
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
        <p>Username: {items.username}</p>
        <p>Email: {items.email}</p>
        <Form.Group className="">
          <Form.Label bsPrefix="neu-label" htmlFor="pay">Desired Pay Rate: </Form.Label>
          <Form.Control bsPrefix="neu-input" id="pay" type="text" name="pay" defaultValue={items.pay} />
        </Form.Group>
        <Form.Group>
          <Form.Label bsPrefix="neu-label" htmlFor="Speed">Average Speed: </Form.Label>
          <Form.Control bsPrefix="neu-input" id="speed" type="Speed" name="Speed" defaultValue={items.speed} />
        </Form.Group>
        <Button className='neu-button' onClick={buttonHandler}>Get It!</Button>
      </section>
    </Form>
  );
}

export default Profile;