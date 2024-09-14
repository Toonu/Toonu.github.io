//import logo from './logo.svg';
import { useEffect } from 'react';
import './App.css';

function App() {  
  
  fetch('https://api.ipify.org?format=json').then(response => response.json()).then(data => {
    const userIp = data.ip;  // Get the IP address
    console.log("Your IP address is: " + userIp);
  });

  useEffect(() => {    setTimeout(() => {      window.location.href = 'https://www.toonudesign.tech/';    }, 10000);  }, []);
  return <p>Redirecting in 100 milliseconds... (the website is in construction phase and will redirect for the time being)</p>;
}

export default App;
  
/*

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/