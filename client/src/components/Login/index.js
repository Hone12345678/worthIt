// allows the user to login to an account they have already created

import { Form, Button } from "react-bootstrap";
import React from 'react';
import AuthService from "../../utils/auth";

function Login(props) {
  const {
    setCurrentComponent,
    setLoginSelected
  } = props; 

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
      .then((res)=> {return res.json()})
      .then((res)=> {

        AuthService.login(res.token)
        setLoginSelected(true)
        setCurrentComponent("profile")
  
      })
      .catch(err => {
        alert(err.message)
      })
    }
  };

  return (
    <Form className="col-lg-6 col-md-10 mx-auto neu d-grid gap-3 pb align-middle mh-100 my-" id="login-form" onSubmit={loginSubmit}>
        <h2>Login</h2>
        <Form.Group className="">
          <Form.Label bsPrefix="neu-label" htmlFor="username">Username:</Form.Label>
          <Form.Control bsPrefix="neu-input" id = "username" type="text" name="username" defaultValue={''} />
        </Form.Group>
        <Form.Group>
          <Form.Label bsPrefix="neu-label" htmlFor="email">Email address:</Form.Label>
          <Form.Control bsPrefix="neu-input" id = "email" type="email" name="email" defaultValue={''} />
        </Form.Group>
        <Form.Group>
          <Form.Label bsPrefix="neu-label" htmlFor="password">Password:</Form.Label>
          <Form.Control bsPrefix="neu-input" id = "password" type="password" defaultValue={''} />
        </Form.Group>
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