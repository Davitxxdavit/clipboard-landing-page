import React from 'react';
import logo from "../../assets/logo.svg";
import ButtonIOS from '../buttons/ButtonIOS/ButtonIOS';
import ButtonMac from '../buttons/ButtonMac/ButtonMac';
import "./Main.css"

function Main() {
  return (
    <div className='main'>
        <img src={logo} />
        <h1>A history of everything you copy</h1>
        <p>Clipboard allows you to track and organize everything you copy. Instantly access your clipboard on all your devices.</p>
        <div className='buttons'>
            <ButtonIOS />
            <ButtonMac />
        </div>
    </div>
  )
}

export default Main
