import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Profile from "./components/Profile";
import Signup from "./components/Signup";
import Login from "./components/Login";
import About from "./components/About";
import Gig from "./components/Gig";
import AuthService from "./utils/auth";

function App() {
  const [currentComponent, setCurrentComponent] = useState("login");
  const [globalState, setGlobalState] = useState({
    gasPrice: 0,
    mpg: 0,
    avgSpeed: 0,
    avgPickup: 0,
    pay: 0
  });

  //
  const [loginSelected, setLoginSelected] = useState(false);

  useEffect(() => {
    setLoginSelected(AuthService.loggedIn());
    if (loginSelected === true) {
      setCurrentComponent("profile");
    }
  }, [loginSelected]);

  return (
    <div className='bg-background flex flex-col justify-between h-screen'>
      <Header className="text-light"
        setCurrentComponent={setCurrentComponent}
        currentComponent={currentComponent}
        loginSelected={loginSelected}
        setLoginSelected={setLoginSelected}
      ></Header>

      <div className="justify-content-center h-100 mt-20">
        {!loginSelected ? (
          <>
            {currentComponent === "login" ? (
              <Login
                setCurrentComponent={setCurrentComponent}
                currentComponent={currentComponent}
                setLoginSelected={setLoginSelected}
              ></Login>
            ) : (
              <Signup
                setLoginSelected={setLoginSelected}
                setCurrentComponent={setCurrentComponent}
              ></Signup>
            )}
          </>
        ) : (
          <>
            {currentComponent === "gig" && (
              <Gig
                setCurrentComponent={setCurrentComponent}
                currentComponent={currentComponent}
                globalState={globalState}
                // uncomment if we want to be able to change global state on gig component
                // setGlobalState={setGlobalState}
              />
            )}
            {currentComponent === "about" && <About />}
            {currentComponent === "profile" && (
              <Profile
                setCurrentComponent={setCurrentComponent}
                globalState={globalState}
                setGlobalState={setGlobalState}
              />
            )}
          </>
        )}
      </div>

      <Footer page={currentComponent} changePage={setCurrentComponent} className="h-10 order-last" />

    </div>
  );
}

export default App;
