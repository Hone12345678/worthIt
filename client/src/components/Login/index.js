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
    <section>
      <h1 page>Login</h1>
      <form id="login-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username: </label>
          <input type="text" name="username" defaultValue={''} />
        </div>
        <div>
          <label htmlFor="email">Email address: </label>
          <input type="email" name="email" defaultValue={''} />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input type="password" defaultValue={''} />
        </div>
        <button type="submit">Submit</button>
        <br/>
        <a onClick={aboutHandler}>How to use this App</a>
        <br/>
        <span>Don't have a login? Create one <u><a onClick={signupHandler}>here</a></u>!</span>
      </form>
    </section>
  );
}


export default ContactForm