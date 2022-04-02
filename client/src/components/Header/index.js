import React from "react";


function Header(props) {
  const {
    setCurrentComponent,
  } = props; 


  return (
    <header className="neu-header container mw-100">
      <nav className="d-flex flex-row">
          <h1 className="col">
            <a
              data-testid="link"
              href="/worthIt"
            >
              Worth It
            </a>
          </h1>
        <ul className="d-flex flex-row">
          <li className="">
            <a
              data-testid="about"
              href="#about"
              onClick={() => setCurrentComponent("about")}
              className=""
            >
              About
            </a>
          </li>
          <li className="">
            <a
              data-testid="profile"
              href="#profile"
              onClick={() => setCurrentComponent("profile")}
              className=""
            >
              Profile
            </a>
          </li>
          <li className="">
            <a
              data-testid="gig"
              href="#gig"
              onClick={() => setCurrentComponent("gig")}
              className=""
            >
              Gig
            </a>
          </li>
          <li className="">
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