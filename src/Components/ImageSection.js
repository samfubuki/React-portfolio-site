import React from 'react';
import about from '../img/about.jpeg';
import file from '../files/resume.pdf';


function ImageSection() {
    return (
        <div className="ImageSection">
          <div className = "img">
            <img src={about} alt="" /> 
          </div>  
          <div className="about-info">
              <h4>I am<span> Samarth Bhardwaj</span></h4>
              <p className="about-text">
              I am a student of Information Technology looking to explore various full stack technologies. 
              I am a hardworking person and would like to build on from my interest in various development technologies.   
              I also am interested to learn in merging various other technologies with web.
              </p>
              <div className="about-details">
                <div className="left-section">
                  <p>Full Name</p>
                  <p>Age</p>
                  <p>Nationality</p>
                  <p>Languages</p>
                  <p>Address</p>
                  <p>Country</p>
                </div>
                <div className="right-section">
                  <p>: Samarth Bhardwaj</p>
                  <p>: 19 years</p>
                  <p>: Indian</p>
                  <p>: Hindi, English, French, Spanish</p>
                  <p>: Adarsh Colony, Devli Road, New Delhi, India</p>
                  <p>: India</p>
                </div>
              </div>
              <button onclick = "window.href = {file} download" className="btn">
                 <a href={file} class="anchor" download>Download CV</a> 
              </button>
          </div>
        </div>
    )
}

export default ImageSection
