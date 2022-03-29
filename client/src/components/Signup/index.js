function Signup(props) {
  const signupSubmit = (e) => {
    e.preventDefault();
    props.changePage('profile')
  }

  return (
    <section>
      <h2>Signup</h2>
      <form id="login-form" onSubmit={signupSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" name="username" defaultValue={''} />
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
          <input type="email" name="email" defaultValue={''} />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" defaultValue={''} />
        </div>
        <div>
          <label htmlFor="pay">Desired Hourly Pay:</label>
          <input type="number" defaultValue={''} />
        </div>
        <div>
          <label htmlFor="timeShopping">Average time spent shopping (in seconds):</label>
          <input type="number" defaultValue={''} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default Signup;