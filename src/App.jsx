import logo from './logo.svg';
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
      <div>
        <nav className="navbar">
          <Element.ScrollButton scrollToPosition={50} label="Graphics" />
          <Element.ScrollButton scrollToPosition={150} label="Get in Touch" align="stretch" />
          <Element.ScrollButton scrollToPosition={100} label="Apps" />
        </nav>
      </div>
      <Element.Canvas></Element.Canvas>
      <Element.MailboxButton></Element.MailboxButton>
      <Element.HelloWorld name="Test" />
      <Element.HelloWorld name="Te" />
      <div class="bottom">
        <Element.ImageLink link="https://www.toonudesign.tech/" image={logo} alt="Logo"></Element.ImageLink>xxxxxxxxxxx<Element.ImageLink link="https://www.toonudesign.tech/" image={logo} alt="Logo" minSize={200}></Element.ImageLink>
      </div>
    </div>
  );
}

export default App;