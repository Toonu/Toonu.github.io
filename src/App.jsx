import iconLogo from './img/logo.svg';
import iconMail from './img/mail.svg';
import iconLinkedIn from './img/linkedIn.svg';
import iconGitHub from './img/gitHub.svg';
import { useEffect, useState } from 'react';
import './App.css';
import * as Element from './elements.jsx';

function App() {
  const [userIp, setUserIp] = useState(null);

  useEffect(() => {
    fetch('https://api.ipify.org?format=json')
      .then(response => response.json())
      .then(data => { setUserIp(data.ip); });
  }, []);

  useEffect(() => {
    if (userIp && userIp !== "85.193.35.236") {
      setTimeout(() => { window.location.href = 'https://www.toonudesign.tech/'; }, 100);
    }
  }, [userIp]);

  if (userIp && userIp !== "85.193.35.236") {
    return <p>Redirecting in 100 milliseconds... (the website is in construction phase and will redirect for the time being)</p>;
  }

  return (
    <div className="App">
      <nav className="bar">
        <Element.ImageLink link="https://www.toonudesign.tech/" image={iconLogo} alt="Logo" style={{marginRight:"1vw"}}></Element.ImageLink>
        <a class="h1b" href='https://www.toonudesign.tech/' style={{marginRight:"auto", display:"flex", textDecoration:"none", color:"#fff"}}>Toonu Design</a>
        <Element.ScrollButton scrollToPosition={50} label="Graphics" />
        <Element.ScrollButton scrollToPosition={100} label="Apps" />
        <Element.ScrollButton scrollToPosition={150} label="Get in Touch" align="stretch" />
      </nav>
      <Element.Section>
        <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua!</h1>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua!
        <h1>|||</h1>
      </Element.Section>
      <div class="bottomBar">
        <div style={{flexBasis:"40vw", display:"flex"}}></div>
        <div style={{flexBasis:"20vw", display:"flex", gap:"2vw", justifyContent:"center", alignItems:"center", height:"3vh", minHeight:"24px"}}>
          <Element.ImageLink link="mailto:Toonu4@icloud.com" image={iconLinkedIn}   style={{flexBasis:"4vw"}} alt="LinkedIn"></Element.ImageLink>
          <Element.ImageLink link="mailto:Toonu4@icloud.com" image={iconMail}       style={{flexBasis:"4vw"}} alt="Mail"></Element.ImageLink>
          <Element.ImageLink link="mailto:Toonu4@icloud.com" image={iconGitHub}     style={{flexBasis:"4vw"}} alt="GitHub"></Element.ImageLink>
        </div>
        <div style={{flexBasis:"40vw", display:"flex", gap:"1vw", justifyContent:"flex-end", alignItems:"center", height:"3vh", minHeight:"24px"}}>
          Copyright © 2024 Toonu Design | All Rights Reserved
          <Element.ImageLink link="https://www.toonudesign.tech/" image={iconLogo} alt="Logo"></Element.ImageLink>
        </div>
      </div>
    </div>
  );
}
export default App;