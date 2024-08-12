import React from 'react';
import laptopImage from "../../assets/image-devices.png";
import "./SectionClipboard.css";

const SectionClipboard = () => {
  return (
    <div className='section-clipboard'>
      <h2>Access Clipboard anywhere</h2>
      <p>Whether you’re on the go, or at your computer, you can access all your Clipboard snippets in a few simple clicks.</p>
      <img src={laptopImage} />
    </div>
  )
}

export default SectionClipboard
