import { Form, Button } from "react-bootstrap";
import React from 'react';
import auth from "../../utils/auth";

function Login(props) {
  const {
    setCurrentComponent
  } = props; 

  const handleSubmit = async (e) => {
    e.preventDefault();
    // needs code to send the information from the inputs to authenticate and sign in
    props.changePage('profile')
  };


  const signupSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    const username = document.querySelector('#username').value.trim();
    console.log(username);
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
        setTimeout(()=> {
          window.location.href = '/'
        }, 100)
        console.log(res)
  
      })
      .catch(err => {
        alert(err.message)
      })
    }
    // props.changePage('login')   
    // maybe change to profile for  redirect
  };

  return (
    <Form className="col-6 mx-auto neu d-grid gap-3 pb" id="login-form" onSubmit={signupSubmit}>
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