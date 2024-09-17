import { useEffect, useState } from 'react';
import './App.css';
import * as Bar from "./bars.jsx"
import * as Section from "./section.jsx"

export default function App() {
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
      <Bar.Header/>
      <Section.Flexible>
        <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua!</h1>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua!
      </Section.Flexible>
      <Section.Flexible/>
      <Bar.Spacer/>
      <Section.Flexible/>
      <Bar.Footer/>
    </div>
  );
}