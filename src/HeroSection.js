import React from 'react';

import './HeroSection.css';
import image from './image.png'

const HeroSection = () => {
  return (
    <section className="hero-section" id="Home">
      <div className="hero-content">
        <div className="hero-left">
          <h1 className="info-heading">Chat, text or mail in <span class = "b">multiple languages</span> with Mamuni</h1>
          বাংলা, 中文, English, Français, ગજુરાતીc^\hY عربي, বাংলা, 中文, English, Français, ગુજરાતી, ಕನ್ನಡ, മലയാളം, Português, Español, cಕನ್ನಡ, മലയാളം, Português, Español, Kiswahili, தமிழ், తెలుగు, Українська, ازولو, cJFEDCcKiswahili, தமிழ், తెలుగు, Українська, ازولو, 
isiZulu and many more<br></br>
          <button className="get-started-button">Get Started</button>
        </div>
        <div className="hero-right">
          <img src={image} className="hero-image" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
