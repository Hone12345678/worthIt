import {useState} from 'react'

function ContactForm() {

  const handleSubmit = (e) => {
    e.preventDefault();
      console.log('click');

  };

  return (
    <section>
      <h1>Login</h1>
      <form id="login-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Name:</label>
          <input type="text" name="username" defaultValue={''} />
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
          <input type="email" name="email" defaultValue={''} />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <textarea name="password" defaultValue={''} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}


export default ContactForm