import React from 'react';
import "./SectionSupercharge.css";
import logo1 from "../../assets/icon-blacklist.svg";
import logo2 from "../../assets/icon-text.svg";
import logo3 from "../../assets/icon-preview.svg";
import google from "../../assets/logo-google.png";
import imb from "../../assets/logo-ibm.png";
import microsoft from "../../assets/logo-microsoft.png";
import hewlett from "../../assets/logo-hp.png";
import vector from "../../assets/logo-vector-graphics.png";


const SectionSupercharge = () => {
  return (
    <div className='section-supercharge'>
      <h2>Supercharge your workflow</h2>
      <p>We’ve got the tools to boost your productivity.</p>
      <div className='items'>
        <div className='item'>
            <img src={logo1} />
            <h3>Create blacklists</h3>
            <p>Ensure sensitive information never makes its way to your clipboard by excluding certain sources.</p>
        </div>
        <div className='item'>
            <img src={logo2} />
            <h3>Plain text snippets</h3>
            <p>Remove unwanted formatting from copied text for a consistent look.</p>
        </div>
        <div className='item'>
            <img src={logo3} />
            <h3>Sneak preview</h3>
            <p>Quick preview of all snippets on your Clipboard for easy access.</p>
        </div>
      </div>
      <div className='logos'>
            <img src={google} />
            <img src={imb} />
            <img src={microsoft} />
            <img src={hewlett} />
            <img src={vector} />
      </div>
    </div>
  )
}

export default SectionSupercharge
