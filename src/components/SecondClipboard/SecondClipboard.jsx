import React from 'react';
import './SecondClipboard.css';
import ButtonIOS from '../buttons/ButtonIOS/ButtonIOS';
import ButtonMac from '../buttons/ButtonMac/ButtonMac';


const SecondClipboard = () => {
  return (
    <div className='second-clipboard'>
      <h2>Clipboard for iOS and Mac OS</h2>
      <p>Available for free on the App Store. Download for Mac or iOS, sync with iCloud and you’re ready to start adding to your clipboard.</p>
      <div className='buttons'>
        <ButtonIOS />
        <ButtonMac />
      </div>
    </div>
  )
}

export default SecondClipboard
