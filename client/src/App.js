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

  const RenderComponent = () => {
    switch (pageRender) {
      case 'about':
        return <About/>
        
      case 'login':
        return <Login/>

      case 'contact':
        return <Contact/>

      case 'signup':
        return <Signup/>
      
      case 'profile':
        return <Profile/>
    
      case 'display':
        return <Display/>

      case 'input':
        return <Input/>

      default:
        return <About/>
    }
  }

  return (
    <div>
      <Header/>
      <RenderComponent/>
      <Footer/>
    </div>
  );
}

export default App;
