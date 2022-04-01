import { useState } from 'react';
import {validateEmail} from '../../utils/helpers';
import { Form, Button } from "react-bootstrap";

function ContactForm(props) {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log('Submit Form', formState);
    }
    // need to figure out where to direct after submitting a contact email. temporary route below
    props.changePage('profile')
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };

  return (
      <Form className="col-6 mx-auto neu d-grid gap-3" id="contact-form" onSubmit={handleSubmit}>
      <h1>Contact me</h1>
        <Form.Group>
          <Form.Label bsPrefix="neu-label" htmlFor="name">Name: </Form.Label>
          <Form.Control bsPrefix="neu-input" type="text" name="name" defaultValue={name} onBlur={handleChange} />
        </Form.Group>
        <Form.Group>
          <Form.Label bsPrefix="neu-label" htmlFor="email">Email address: </Form.Label>
          <Form.Control bsPrefix="neu-input" type="email" name="email" defaultValue={email} onBlur={handleChange} />
        </Form.Group>
        <Form.Group>
          <Form.Label bsPrefix="neu-label" htmlFor="message">Message: </Form.Label>
          <Form.Control as="textarea" rows="5" bsPrefix="neu-input" name="message"  defaultValue={message} onBlur={handleChange} />
        </Form.Group>
        {errorMessage && (
          <Form.Group>
            <p className="error-text">{errorMessage}</p>
          </Form.Group>
        )}
        <Button bsPrefix="neu-button" variant="primary" className="neu-button" type="submit">Submit</Button>
      </Form>
  );
}


export default ContactForm