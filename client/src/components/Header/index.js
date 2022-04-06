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
      <nav className="d-flex flex-row row gx-5 justify-content-between align-items-center m-0">
        <div className="col-sm-12 col-md-3">
          <h1 className="m-0 text-center">
            <a
              data-testid="link"
              href="/"
            >
              Worth It
            </a>
          </h1>
        </div>
        <ul className="col-sm-12 col-md-6 col-xl-4 justify-content-between d-flex flex-row m-0">
            {/* allows user to navigate to the about page by clicking "About" */}
          <li className="px-3">
            <a
              data-testid="about"
              href="#about"
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
              href="#profile"
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
              href="#gig"
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
              href="#login"
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

export default Header;