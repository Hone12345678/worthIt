import React from "react";


function Header(props) {
  const {
    setCurrentComponent,
  } = props; 


  return (
    <header className="neu-header container mw-100 px-4">
      <nav className="d-flex flex-row gx-5 align-items-center m-0">
          <h1 className="col m-0">
            <a
              data-testid="link"
              href="/worthIt"
            >
              Worth It
            </a>
          </h1>
        <ul className="d-flex flex-row align-items-center m-0">
          <li className="px-3">
            <a
              data-testid="about"
              href="#about"
              onClick={() => setCurrentComponent("about")}
              className=""
            >
              About
            </a>
          </li>
          <li className="px-3">
            <a
              data-testid="profile"
              href="#profile"
              onClick={() => setCurrentComponent("profile")}
              className=""
            >
              Profile
            </a>
          </li>
          <li className="px-3">
            <a
              data-testid="gig"
              href="#gig"
              onClick={() => setCurrentComponent("gig")}
              className=""
            >
              Gig
            </a>
          </li>
          <li className="px-3">
            <a
              data-testid="display"
              href="#display"
              onClick={() => setCurrentComponent("display")}
              className=""
            >
              Display
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;