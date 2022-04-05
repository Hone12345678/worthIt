// allows a new user to create a new account and input there account information and basic settings

import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import AuthService from "../../utils/auth";
import { validateEmail } from "../../utils/helpers";

function Signup(props) {
  const {
    setCurrentComponent,
    setLoginSelected
  } = props; 

  const [formState, setFormState] = useState({ loginName: '', loginEmail: '', loginPassword: '' });
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    console.log(e.target.name);
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    }
    else if (e.target.name === 'password') {
      console.log(e.target.value.length);
      if (e.target.value.length < 8) {
        setErrorMessage('Your password must be at least 8 characters in length.');
      } else {
        setErrorMessage('');
      }
    }
    else if (!e.target.value.length){
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }

    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };


  const signupSubmit = (e) => {
    e.preventDefault();
    const username = document.querySelector('#username').value.trim();
    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();


    if (username && email && password) {
      fetch('/api/users/', {
        method: 'post', 
        body: JSON.stringify({
          username,
          email,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      })
      .then((res)=> { 
        if(res.ok) {
          return res.json()
        } else {
          alert("There was an issue with your account credentials. Please ensure your email address is valid and your password is at least 8 characters long")
          throw console.error(res);
        }
      })
      .then((res)=> {
        console.log(res)
        AuthService.login(res.token)
        setLoginSelected(true);
        setCurrentComponent("about")
      }).catch(err => {
        alert(err.message)
    })
  }
}
  
  
  return (
    <Form className="col-11 mx-auto neu d-grid gap-3" id="login-form" onSubmit={signupSubmit}>
      <h2>Signup</h2>

      <Form.Group>
        <Form.Label htmlFor="username">Username: </Form.Label>
        <Form.Control bsPrefix="neu-input"  id = "username" type="text" name="username" defaultValue={''} onBlur={handleChange}/>
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="email">Email address: </Form.Label>
        <Form.Control bsPrefix="neu-input" id = "email" type="email" name="email" defaultValue={''} onBlur={handleChange}/>
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="password">Password: </Form.Label>
        <Form.Control bsPrefix="neu-input" id = "password" type="password" name="password" defaultValue={''} onBlur={handleChange}/>
      </Form.Group>
      {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
      <Button bsPrefix="neu-button" variant="primary" className="neu-button" type="submit">Submit</Button>
      <span>Already have an account? <u><a href="#login" onClick={() => setCurrentComponent("login")}>Login</a></u></span>
    </Form>
  );
}

export default Signup;