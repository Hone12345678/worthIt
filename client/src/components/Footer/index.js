import { useState } from 'react'
import Contact from '../Contact'

function Footer() {
  const [contactForm, setContactForm] = useState('notClicked')


  const contactHandler = () => {
    return (
      <div>
        <Contact/>
        <button onClick={contactHandler}></button>
      </div>
    )
  }

  return (
    <footer>
      <button onClick={contactHandler}>Contact</button>
    </footer>
  );
}

export default Footer;