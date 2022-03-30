import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer'
import Contact from './components/Contact'
import Display from './components/Display'
import Profile from './components/Profile'
import Signup from './components/Signup'
import Login from './components/Login'
import Input from './components/Input'
import About from './components/About'

function App() {

  const [pageRender, setPageRender] = useState('login')
  console.log(pageRender);

  const RenderComponent = (props) => {
    switch (pageRender) {
      case 'about':
        return <About page={pageRender} changePage={setPageRender}/>
        
      case 'login':
        return <Login page={pageRender} changePage={setPageRender}/>

      case 'contact':
        return <Contact page={pageRender} changePage={setPageRender}/>

      case 'signup':
        return <Signup page={pageRender} changePage={setPageRender}/>
      
      case 'profile':
        return <Profile page={pageRender} changePage={setPageRender}/>
    
      case 'display':
        return <Display page={pageRender} changePage={setPageRender}/>

      case 'input':
        return <Input page={pageRender} changePage={setPageRender}/>

      default:
        return <About page={pageRender} changePage={setPageRender}/>
    }
  }

  return (
    <div>
      <Header/>
      <div>
        <RenderComponent/>
      </div>
      <Footer page={pageRender} changePage={setPageRender}/>
    </div>
  );
}

export default App;
