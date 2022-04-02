import { Form, Button } from "react-bootstrap";

function Profile(props) {

  function buttonHandler(e) {
    e.preventDefault();
    props.changePage('gig');
  }

  return (
    <Form className="col-6 mx-auto neu d-grid gap-3" id="login-form">
      <h2>Profile</h2>
      <section>
        <p>Username</p>
        <p>Email</p>
        <Form.Group className="">
          <Form.Label bsPrefix="neu-label" htmlFor="username">Desired Pay Rate: </Form.Label>
          <Form.Control bsPrefix="neu-input" type="text" name="username" defaultValue={''} />
        </Form.Group>
        <Form.Group>
          <Form.Label bsPrefix="neu-label" htmlFor="email">Average Time Shopping (seconds): </Form.Label>
          <Form.Control bsPrefix="neu-input" type="email" name="email" defaultValue={''} />
        </Form.Group>
        <Button className='neu-button' onClick={buttonHandler}>Get Started!</Button>
      </section>
    </Form>
  );
}

export default Profile;