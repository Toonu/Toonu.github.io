import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import * as Bar from "./bars.jsx"
import * as Section from "./section.jsx"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Bar.Header/>
      <Section.Flexible>
        <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua!</h1>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua!
      </Section.Flexible>
      <Section.Flexible/>
      <Bar.Spacer/>
      <Section.Flexible/>
      <Bar.Footer/>
  </React.StrictMode>
);