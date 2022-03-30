function Profile(props) {

  function buttonHandler(e) {
    e.preventDefault();
    props.changePage('gig');
  }

  return (
    <div>
      <h2>Profile</h2>
      <section>
        <p>Username</p>
        <p>Email</p>
        <p>Desired Pay Rate</p>
        <p>Average Time Shopping (seconds)</p>
        <button onClick={buttonHandler}>Get Started!</button>
      </section>
    </div>
  );
}

export default Profile;