//import logo from './logo.svg';
import { useEffect } from 'react';
import './App.css';

function App() {  
  

  useEffect(() => {    setTimeout(() => {      window.location.href = 'https://www.toonudesign.tech/';    }, 100);  }, []);
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