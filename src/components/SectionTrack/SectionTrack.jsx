import React from 'react'
import computerImage from "../../assets/image-computer.png";
import "./SectionTrack.css";

const SectionTrack = () => {
  return (
    <div className='section-track'>
        <div className='track-first'>
            <h2>Keep track of your snippets</h2>
            <p> Clipboard instantly stores any item you copy in the cloud, meaning you can access your snippets immediately on all your devices. Our Mac and iOS apps will help you organize everything.</p>
        </div>
        <div className='track-second'>
            <img src={computerImage} />
            <div className='content'>
                <div className='content-inner'>
                    <h3>Quick Search</h3>
                    <p>Easily search your snippets by content, category, web address, application, and more.</p>
                </div>
                <div className='content-inner'>
                    <h3>iCloud Synch</h3>
                    <p>Instantly saves and syncs snippets across all your devices.</p>
                </div>
                <div className='content-inner'>
                    <h3>Complete History</h3>
                    <p>Retrieve any snippets from the first moment you started using the app.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SectionTrack
