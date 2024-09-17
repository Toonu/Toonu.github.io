import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import * as Bar from "./components/bars.jsx"
import * as Section from "./components/section.jsx"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='flex flex-col gap-10 overflow-x-hidden'>
      <Bar.Header/>
      <section className='grid grid-cols-3 p-10 gap-10'>


      </section>
      <Section.Flexible>
        <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua!</h1>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua!
      </Section.Flexible>
      <Section.Flexible/>
      <Bar.Spacer/>
      <Section.Flexible/>
      <Bar.Footer/>
    </div>
  </React.StrictMode>
);