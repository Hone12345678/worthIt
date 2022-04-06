// allows the user to login to an account they have already created

import { useState } from "react";
import { validateEmail } from "../../utils/helpers";
import { Form, Button } from "react-bootstrap";
import React from 'react';
import AuthService from "../../utils/auth";

function Login(props) {
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

  const loginSubmit = (e) => {
    e.preventDefault();
    const username = document.querySelector('#username').value.trim();
    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();

    if (username && email && password) {
      fetch('/api/users/login', {
        method: 'POST', 
        body: JSON.stringify({
          username,
          email,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      })
      .then((res)=> {
        if (res.ok) {
          return res.json()
        }
      })
      .then((res)=> {
        if (res?.token) {
          setErrorMessage("");
          AuthService.login(res.token)
          setLoginSelected(true)
          setCurrentComponent("profile")
        }
        else {
          setErrorMessage("There was an issue with your login credentials. Please verify them and try again!")
          // throw console.error(res);
        }
      })
      .catch(err => {
        alert(err.message)
      })
    }
  };

  return (
    <Form className="col-11 mx-auto neu d-grid gap-3 pb align-middle mh-100 my-" id="login-form" onSubmit={loginSubmit}>
        <h2>Login</h2>
        <Form.Group className="">
          <Form.Label bsPrefix="neu-label" htmlFor="username">Username:</Form.Label>
          <Form.Control bsPrefix="neu-input" id = "username" type="text" name="username" defaultValue={''} onBlur={handleChange}/>
        </Form.Group>
        <Form.Group>
          <Form.Label bsPrefix="neu-label" htmlFor="email">Email address:</Form.Label>
          <Form.Control bsPrefix="neu-input" id = "email" type="email" name="email" defaultValue={''} onBlur={handleChange}/>
        </Form.Group>
        <Form.Group>
          <Form.Label bsPrefix="neu-label" htmlFor="password">Password:</Form.Label>
          <Form.Control bsPrefix="neu-input" id = "password" type="password" name="password" defaultValue={''} onBlur={handleChange}/>
        </Form.Group>
        {errorMessage && (
          <div>
            <p className="error-text text-red-500">{errorMessage}</p>
          </div>
        )}
        <Button bsPrefix="neu-button" variant="primary" className="neu-button" type="submit">Submit</Button>
        <div>
          <a href="#about" onClick={() => setCurrentComponent("about")} >How to use this App</a>
          <br />
          <span>Don't have a login? Create one <u><a href="#signup" onClick={() => setCurrentComponent("signup")}>here</a></u>!</span>
        </div>
    </Form>
  );
}


export default Login