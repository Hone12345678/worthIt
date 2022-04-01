import { Form, Button } from "react-bootstrap";
import auth from "../../utils/auth";

function Signup(props) {
  const signupSubmit = (e) => {
    e.preventDefault();
    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

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
      .then(()=> {
        setTimeout(()=> {
          window.location.href = '/'
        }, 100)
  
      })
      .catch(err => {
        alert(err.message)
      })
    }
  };
    
    props.changePage('profile')
  }

  return (
    <Form className="col-6 mx-auto neu d-grid gap-3" id="login-form" onSubmit={signupSubmit}>
      <h2>Signup</h2>

      <Form.Group>
        <Form.Label htmlFor="username">Username: </Form.Label>
        <Form.Control bsPrefix="neu-input" type="text" name="username" defaultValue={''} />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="email">Email address: </Form.Label>
        <Form.Control bsPrefix="neu-input" type="email" name="email" defaultValue={''} />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="password">Password: </Form.Label>
        <Form.Control bsPrefix="neu-input" type="password" defaultValue={''} />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="pay">Desired Hourly Pay: </Form.Label>
        <Form.Control bsPrefix="neu-input" type="number" defaultValue={''} />
      </Form.Group>
      <Button bsPrefix="neu-button" variant="primary" className="neu-button" type="submit">Submit</Button>
    </Form>
  );
}

export default Signup;