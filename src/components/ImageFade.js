import React, { useState } from 'react';
import './ImageFade.css';
import imgFadeSrc from '../assets/images/imgfade.png';
import { Link } from 'react-router-dom';

const ImageFade = ({ onClose }) => {
  const [showContent, setShowContent] = useState(false);

  const handleMouseOver = () => {
    setTimeout(() => {
      setShowContent(true);
    }, 400);
  };

  const handleMouseOut = () => {
    setTimeout(() => {
      setShowContent(false);
    }, 400);
  };

  const handleClose = () => {
    document.body.style.overflow = 'auto';
    onClose();
  };

  return (
    <section className="imgFade show">
      <p className={showContent ? 'show' : 'hideAnimation'}>
        The crimson-colored ao dai of a woman <br />
        drifting through the halls of an old Hoi <br />
        An pagoda acts as a spark of color in a room. <br /> 
        The photograph remains neutral with the soft <br />
        lighting and deep shadows, making an <br />
        intriguing and moody addition to an art <br />
        collection.
      </p>
      <div className="imgFadeWrapper">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="34" 
          height="9" 
          viewBox="0 0 34 9" 
          fill="none"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          <path d="M17 0.0527344C14.771 0.0527344 12.9473 1.87642 12.9473 4.10537C12.9473 6.33431 14.771 8.158 17 8.158C19.2289 8.158 21.0526 6.33431 21.0526 4.10537C21.0526 1.87642 19.2289 0.0527344 17 0.0527344ZM29.1578 0.0527344C26.9289 0.0527344 25.1052 1.87642 25.1052 4.10537C25.1052 6.33431 26.9289 8.158 29.1578 8.158C31.3868 8.158 33.2105 6.33431 33.2105 4.10537C33.2105 1.87642 31.3868 0.0527344 29.1578 0.0527344ZM4.84206 0.0527344C2.61311 0.0527344 0.789429 1.87642 0.789429 4.10537C0.789429 6.33431 2.61311 8.158 4.84206 8.158C7.07101 8.158 8.89469 6.33431 8.89469 4.10537C8.89469 1.87642 7.07101 0.0527344 4.84206 0.0527344Z" fill="#D9D9D9"/>
        </svg>
        <img src={imgFadeSrc} alt="Featured" />
      </div>
      <Link to="/" onClick={handleClose}>
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="29" viewBox="0 0 35 29" fill="none">
          <path d="M34.435 12.5424H7.15853L17.0567 2.64424L14.4124 0L0 14.4124L14.4124 28.8249L17.0567 26.1806L7.15853 16.2825H34.435V12.5424Z" fill="white"/>
        </svg>
      </Link>
    </section>
  );
};

export default ImageFade; 