import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer'
import Display from './components/Display'
import Profile from './components/Profile'
import Signup from './components/Signup'
import Login from './components/Login'
import About from './components/About'
import Gig from './components/Gig';

function App() {

  const [pageRender, setPageRender] = useState('login');
  console.log(pageRender);

  const [currentComponent, setCurrentComponent] = useState('about');

  const RenderComponent = (props) => {
    switch (pageRender) {
      case 'about':
        return <About page={pageRender} changePage={setPageRender}/>
        
      case 'login':
        return <Login page={pageRender} changePage={setPageRender}/>

      case 'signup':
        return <Signup page={pageRender} changePage={setPageRender}/>
      
      case 'profile':
        return <Profile page={pageRender} changePage={setPageRender}/>

        case 'gig':
          return <Gig page={pageRender} changePage={setPageRender}/>
    
      case 'display':
        return <Display page={pageRender} changePage={setPageRender}/>

      default:
        return <About page={pageRender} changePage={setPageRender}/>
    }
  }

  return (
    <div className='bg-background'>
      <Header className="text-light"
        setCurrentComponent={setCurrentComponent}
        currentComponent={currentComponent}
      ></Header>
      
      <div className='justify-content-center'>
        <RenderComponent/>
        {currentComponent === "login" && <Login />}
        {currentComponent === "about" && <About />}
        {currentComponent === "profile" && <Profile />}
        {currentComponent === "gig" && <Gig />}
        {currentComponent === "display" && <Display />}
      </div>

      <Footer page={pageRender} changePage={setPageRender}/>
    </div>
  );
}

export default App;
