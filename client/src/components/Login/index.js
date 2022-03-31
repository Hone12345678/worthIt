import { Form, Button } from "react-bootstrap";

function ContactForm(props) {

  const handleSubmit = async (e) => {
    e.preventDefault();
    // needs code to send the information from the inputs to authenticate and sign in
    props.changePage('profile')
  };

  const aboutHandler = async (e) => {
    e.preventDefault();
    // needs code to send the information from the inputs to authenticate and sign in
    props.changePage('about')
  };

  const signupHandler = async (e) => {
    e.preventDefault();
    // needs code to send the information from the inputs to authenticate and sign in
    props.changePage('signup')
  };

  return (
    <Form className="container mb-3"  id="login-form" onSubmit={handleSubmit}>
      <div className="row">
        <Form.Group className="col">
          <Form.Label htmlFor="username">Username:</Form.Label>
          <Form.Control type="text" name="username" defaultValue={''} />
        </Form.Group>
        <Form.Group className="col">
          <Form.Label htmlFor="email">Email address:</Form.Label>
          <Form.Control type="email" name="email" defaultValue={''} />
        </Form.Group>
        <Form.Group className="col">
          <Form.Label htmlFor="password">Password:</Form.Label>
          <Form.Control type="password" defaultValue={''} />
        </Form.Group>
      </div >
        <Button className="btn-sm" variant="primary" type="submit">Submit</Button>
        <div>
          <a onClick={aboutHandler}>How to use this App</a>
          <br />
          <span>Don't have a login? Create one <u><a onClick={signupHandler}>here</a></u>!</span>
        </div>
    </Form>
  );
}


export default ContactForm