import React from 'react';
import './FAQSection.css';

import ExpansionPanel from './ExpansionPanel';

const FAQSection = () => {
  return (
    <section className="faq-section" id="FAQ's">
      <h2 className="section-heading">Frequently Asked Questions</h2>
      <div className="expansion-panels">
        <ExpansionPanel 
            title="What services does Mamuni provide?" 
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque metus risus, tincidunt at faucibus nec, vulputate id elit. Praesent posuere, sem vitae luctus fringilla, orci turpis fringilla est, nec posuere dolor est vitae mi. Proin nec facilisis neque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc sem nunc, dignissim eget mollis at, consequat quis metus. Nunc cursus tempor nulla, eu sodales felis suscipit eu. Praesent pellentesque, dolor ut rhoncus facilisis, elit sapien fringilla erat, et molestie ex lectus et mauris." 
        />
        <ExpansionPanel 
            title="Do you have any app or extensions?" 
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque metus risus, tincidunt at faucibus nec, vulputate id elit. Praesent posuere, sem vitae luctus fringilla, orci turpis fringilla est, nec posuere dolor est vitae mi. Proin nec facilisis neque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc sem nunc, dignissim eget mollis at, consequat quis metus. Nunc cursus tempor nulla, eu sodales felis suscipit eu. Praesent pellentesque, dolor ut rhoncus facilisis, elit sapien fringilla erat, et molestie ex lectus et mauris." 
        />
        <ExpansionPanel 
            title="How many languages does Mamuni offer on their platform?" 
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque metus risus, tincidunt at faucibus nec, vulputate id elit. Praesent posuere, sem vitae luctus fringilla, orci turpis fringilla est, nec posuere dolor est vitae mi. Proin nec facilisis neque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc sem nunc, dignissim eget mollis at, consequat quis metus. Nunc cursus tempor nulla, eu sodales felis suscipit eu. Praesent pellentesque, dolor ut rhoncus facilisis, elit sapien fringilla erat, et molestie ex lectus et mauris." 
        />
        <ExpansionPanel 
            title="Do you offer fluency building services?" 
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque metus risus, tincidunt at faucibus nec, vulputate id elit. Praesent posuere, sem vitae luctus fringilla, orci turpis fringilla est, nec posuere dolor est vitae mi. Proin nec facilisis neque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc sem nunc, dignissim eget mollis at, consequat quis metus. Nunc cursus tempor nulla, eu sodales felis suscipit eu. Praesent pellentesque, dolor ut rhoncus facilisis, elit sapien fringilla erat, et molestie ex lectus et mauris." 
        />
      </div>
    </section>
  );
};

export default FAQSection;
