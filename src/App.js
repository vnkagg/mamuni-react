import React from 'react';
import './App.css';

import NavBar from './NavBar';
import HeroSection from './HeroSection';
import HowItWorksSection from './HowItWorksSection';
import FAQSection from './FAQSection';
import Footer from './Footer';
const App = () => {
  return (
    <div className="App">
      <NavBar />
      <HeroSection />
      <HowItWorksSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="top-navbar">
//         <div className="logo">Logo</div>
//         <nav>
//           <ul>
//             <li>Home</li>
//             <li>FAQs</li>
//             <li class = "signup">Sign Up</li>
//           </ul>
//         </nav>
//       </header>
//       <main>
//         <section className="landing-section">
//           <div className="info-text">
//             <h2>Info Heading</h2>
//             <button className="get-started-button">Get Started</button>
//           </div>
//           <div className="images">
//             {/* images */}
//           </div>
//         </section>
//         <section className="how-it-works-section">
//           <div className="icons">
//             {/* icons */}
//           </div>
//           <div className="how-it-works-text">
//             {/* Desc */}
//           </div>
//         </section>
//         <section className="faq-section">
//           <h2>Frequently Asked Questions</h2>
//           <div className="expansion-panels">
//             <ExpansionPanel 
//               title="What services does Mamuni provide?" 
//               content="Lorem ipsum 1Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque metus risus, tincidunt at faucibus nec, vulputate id elit. Praesent posuere, sem vitae luctus fringilla, orci turpis fringilla est, nec posuere dolor est vitae mi. Proin nec facilisis neque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc sem nunc, dignissim eget mollis at, consequat quis metus. Nunc cursus tempor nulla, eu sodales felis suscipit eu." 
//             />
//             <ExpansionPanel 
//               title="Do you have any app or extensions?" 
//               content="Lorem ipsum 1Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque metus risus, tincidunt at faucibus nec, vulputate id elit. Praesent posuere, sem vitae luctus fringilla, orci turpis fringilla est, nec posuere dolor est vitae mi. Proin nec facilisis neque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc sem nunc, dignissim eget mollis at, consequat quis metus. Nunc cursus tempor nulla, eu sodales felis suscipit eu." 
//             />
//             <ExpansionPanel 
//               title="How many languages does Mamuni offer on their platform?              " 
//               content="Lorem ipsum 1Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque metus risus, tincidunt at faucibus nec, vulputate id elit. Praesent posuere, sem vitae luctus fringilla, orci turpis fringilla est, nec posuere dolor est vitae mi. Proin nec facilisis neque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc sem nunc, dignissim eget mollis at, consequat quis metus. Nunc cursus tempor nulla, eu sodales felis suscipit eu." 
//             />
//             <ExpansionPanel 
//               title="Do you offer fluency building services?" 
//               content="Lorem ipsum 1Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque metus risus, tincidunt at faucibus nec, vulputate id elit. Praesent posuere, sem vitae luctus fringilla, orci turpis fringilla est, nec posuere dolor est vitae mi. Proin nec facilisis neque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc sem nunc, dignissim eget mollis at, consequat quis metus. Nunc cursus tempor nulla, eu sodales felis suscipit eu." 
//             />
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// }

// export default App;
