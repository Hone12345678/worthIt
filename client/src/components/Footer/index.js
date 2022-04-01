import { useState } from 'react'
import Contact from '../Contact'

function Footer(props) {

  const contactHandler = () => {
    props.changePage('contact')
  }

  return (
    <footer className='neu-footer'>
      <button className='neu-footer-btn' onClick={contactHandler}>Contact</button>
    </footer>
  );
}

export default Footer;