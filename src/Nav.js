import React, { useState,useEffect } from 'react';
import img from "./imagess/cover.png";
import "./nav.css"

function Nav() {
    const [show, handleShow] = useState(false);
    useEffect(()=>{
        
            window.addEventListener("scroll",() => {
                if(window.scrollY>100){
                    handleShow(true);

                }else handleShow(false);
            });
        
        return()=>{
            window.removeEventListener("scroll");
        };
    },[]);
    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img
            className="nav__logo"
            src={img}//importing like this is a js feature so to be done in curly braces if it was google link then direct it can be used
            alt="filmistan logo"
         />   
        </div>
    )
}

export default Nav
