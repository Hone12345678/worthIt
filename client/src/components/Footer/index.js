import { useState } from 'react'
import Contact from '../Contact'

function Footer(props) {

  const contactHandler = () => {
    props.changePage('contact')
  }

  return (
    <footer>
      <button onClick={contactHandler}>Contact</button>
    </footer>
  );
}

export default Footer;