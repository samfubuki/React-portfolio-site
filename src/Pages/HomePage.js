import React from 'react';
import {faFacebook} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faYoutube} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';
function HomePage() {
    return (
        <div className="HomePage">
          <header className = "hero">
              <h1 className = "hero-text">
                  Hi, I am 
                  <span> Samarth Bhardwaj</span>
              </h1>
              <p className="h-sub-text">
              I am a student of Information Technology looking to explore various full stack technologies. I am a hardworking person and 
              would like to build on from my interest in various development technologies. 
              </p>
              <div className = "icons">
               <Link className="icon-holder">
                <FontAwesomeIcon icon={faFacebook} className="icon fb" />
               </Link>
               <Link className="icon-holder">
                <FontAwesomeIcon icon={faGithub} className="icon gh" />
               </Link>
               <Link className="icon-holder">
                <FontAwesomeIcon icon={faYoutube} className="icon yt" />
               </Link>
              </div>
          </header>
        </div>
    )
}

export default HomePage

