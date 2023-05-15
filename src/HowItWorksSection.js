import React from 'react';
import './HowItWorksSection.css';
import icon1 from './icon1.png';
import icon2 from './icon2.png';
import icon3 from './icon3.png';

const HowItWorksSection = () => {
  return (
    <section className="how-it-works-section" id="hiw">
        <h2 className="section-heading">How It Works</h2>
        <div class="container">
            <div class="left">
              <div className="icons">
                  <div className="icon"><img src={icon1} alt="Icon 1" /></div>
              </div>
              <div className="descriptions">
                  <p>Install Mamuni on your device. Available on Windows and iOS.</p>
              </div>
            </div>
            <div class="middle">
              <div className="icons">
                  <div className="icon"><img src={icon2} alt="Icon 1" /></div>
              </div>
              <div className="descriptions">
                  <p>Create a free account on our platform. Extensions are also available!</p>
              </div>
            </div>
            <div class="right">
              <div className="icons">
                  <div className="icon"><img src={icon3} alt="Icon 1" /></div>
              </div>
              <div className="descriptions">
                  <p>Start talking in multiple languages!</p>
              </div>
            </div>
        </div>
    </section>
  );
};

export default HowItWorksSection;
