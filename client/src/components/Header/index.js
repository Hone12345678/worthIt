import React from "react";


function Header(props) {
  const {
    setCurrentComponent,
  } = props; 


  return (
    <header>
      <nav className="">
        <ul className="">
          <h1 className="">
            <a
              data-testid="link"
              href="/worthIt"
            >
              Worth It
            </a>
          </h1>
          <div className="">
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
              data-testid="contact"
              href="#contact"
              onClick={() => setCurrentComponent("contact")}
              className=""
            >
              Contact
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
          </div>
        </ul>
      </nav>
    </header>
  );
}

export default Header;