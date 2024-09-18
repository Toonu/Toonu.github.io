import React from 'react';
import ReactDOM from 'react-dom/client';
import { motion } from 'framer-motion';
import './index.css';
import * as Bar from "./components/bars.jsx"
import * as Section from "./components/section.jsx"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='flex flex-col gap-10 overflow-x-hidden'>
      <Bar.Header/>
      <motion.section variants={{
        hidden: {opacity:0}
      }} className='grid grid-cols-3 p-10 gap-10 bg-icoy'>
        <div className='flex justify-center items-center rounded-lg gap-10 aspect-square bg-slate-800'></div>
        <div className='flex justify-center items-center rounded-lg gap-10 aspect-square bg-slate-800'></div>
        <div className='flex justify-center items-center rounded-lg gap-10 aspect-square bg-slate-800'></div>
        <div className='flex justify-center items-center rounded-lg gap-10 aspect-square bg-slate-800'></div>
        <div className='flex justify-center items-center rounded-lg gap-10 aspect-square bg-slate-800'></div>
        <div className='flex justify-center items-center rounded-lg gap-10 aspect-square bg-slate-800'></div>
      </motion.section>
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