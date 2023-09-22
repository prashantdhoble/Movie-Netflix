import React, {useEffect, useState} from 'react'
import "./Nav.css"

function Nav() {
    const [show, handleShow] =useState(false)

   useEffect(()=>{

    // genrated from chatgpt 

    const handleScroll = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        } else {
           handleShow(false);
        }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
        window.removeEventListener("scroll", handleScroll);
    };
}, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
        <img 
          className="nav__logo" 
          src="./Netflix.png" 
          alt="Netflix Logo" />  

        <img 
          className="nav__avatar" 
          src="./avatar.png" 
          alt="Netflix Logo" />   
    </div>
  )
}

export default Nav