import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer'
import Profile from './components/Profile'
import Signup from './components/Signup'
import Login from './components/Login'
import About from './components/About'
import Gig from './components/Gig';

function App() {

  const [currentComponent, setCurrentComponent] = useState('login');

  const [loginSelected, setLoginSelected] = useState(false);
  console.log(loginSelected);

  return (
    <div className='bg-background hfull'>
      <Header className="text-light"
        setCurrentComponent={setCurrentComponent}
        currentComponent={currentComponent}
      ></Header>
      
      <div className='justify-content-center h-100'>
      {!loginSelected ? (
        <>
        {currentComponent === "login" ? 

          <Login setCurrentComponent={setCurrentComponent} currentComponent={currentComponent} setLoginSelected={setLoginSelected}></Login>:
          <Signup setLoginSelected={setLoginSelected} setCurrentComponent={setCurrentComponent}></Signup>
          }
        </>
        ) : (
          <>
        {currentComponent === "gig" && <Gig setCurrentComponent={setCurrentComponent} currentComponent={currentComponent}/>}
        {currentComponent === "about" && <About />}
        {currentComponent === "profile" && <Profile />}
        </>
        )}
      </div>

      <Footer page={currentComponent} changePage={setCurrentComponent}/>
    </div>
  );
}

export default App;
