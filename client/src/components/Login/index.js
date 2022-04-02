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

  // const aboutHandler = async (e) => {
  //   e.preventDefault();
  //   // needs code to send the information from the inputs to authenticate and sign in
  //   props.changePage('about')
  // };

  // const signupHandler = async (e) => {
  //   e.preventDefault();
  //   // needs code to send the information from the inputs to authenticate and sign in
  //   props.changePage('signup')
  // };

  return (
    <Form className="col-6 mx-auto neu d-grid gap-3 pb align-middle mh-100 my-" id="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <Form.Group className="">
          <Form.Label bsPrefix="neu-label" htmlFor="username">Username:</Form.Label>
          <Form.Control bsPrefix="neu-input" type="text" name="username" defaultValue={''} />
        </Form.Group>
        <Form.Group>
          <Form.Label bsPrefix="neu-label" htmlFor="email">Email address:</Form.Label>
          <Form.Control bsPrefix="neu-input" type="email" name="email" defaultValue={''} />
        </Form.Group>
        <Form.Group>
          <Form.Label bsPrefix="neu-label" htmlFor="password">Password:</Form.Label>
          <Form.Control bsPrefix="neu-input" type="password" defaultValue={''} />
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