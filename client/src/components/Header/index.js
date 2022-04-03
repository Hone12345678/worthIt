// header componant displays the options of where the user is able to navigate to 
// the header displays "worth it" to the user which allows them to navigate to the main page

import React from "react";
import AuthService from "../../utils/auth"


function Header(props) {
  const {
    setCurrentComponent, loginSelected
  } = props; 


  return (
    // the header displays "worth it" to the user which allows them to navigate to the main page
    <header className="neu-header container mw-100 px-4">
      <nav className="d-flex flex-row gx-5 align-items-center m-0">
          <h1 className="col m-0">
          {!loginSelected ? (
        <>
        <a
              data-testid="link"
              href="/"
                onClick={() => setCurrentComponent("login")}
                >
              Worth It
            </a>
        </>
        ) : (
          <>
          <a
              data-testid="link"
              href="/"
                onClick={() => setCurrentComponent("profile")}
                >
              Worth It
            </a>
          </>)}
          </h1>
        <ul className="d-flex flex-row align-items-center m-0">
            {/* allows user to navigate to the about page by clicking "About" */}
          <li className="px-3">
            <a
              data-testid="about"
              href="/"
              onClick={() => setCurrentComponent("about")}
              className="hover:font-bold"
            >
              About
            </a>
          </li>
            {/* allows user to navigate to the profile page by clicking "Profile" */}
          <li className="px-3">
            <a
              data-testid="profile"
              href="/"
              onClick={() => setCurrentComponent("profile")}
              className="hover:font-bold"
            >
              Profile
            </a>
          </li>
          {/* allows user to navigate to the gig page by clicking "Gig" */}
          <li className="px-3">
            <a
              data-testid="gig"
              href="/"
              onClick={() => setCurrentComponent("gig")}
              className="hover:font-bold"
            >
              Gig
            </a>
          </li>
          {loginSelected && <li className="px-3">
            <a
              data-testid="logout"
              onClick={() => AuthService.logout()}
              href="/"
              className=""
            >
              logout
            </a>
          </li>}
          
        </ul>
      </nav>
    </header>
  );
}

// {loginSelected && <button onClick={AuthService.logout()}>logout</button>}


export default Header;