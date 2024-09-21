import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import './index.css';
import * as Bar from './components/bars.jsx';
import * as Section from './components/section.jsx';

export default function App() {
    const graphicsRef = useRef();
    const appRef = useRef();
    const vRef = useRef();

    useEffect( () => {
        const test = graphicsRef.current
        console.log(test);
    }, []);
    
    return <div
			className="flex flex-col gap-10 overflow-x-hidden m-0 text-justify font-light antialiased bg-gray text-white text-base"
			style={{ fontFamily: 'Mulish' }}>
        <Bar.Header gfx={graphicsRef} app={appRef} vCard={vRef} />
			<motion.section
				variants={{
					hidden: { opacity: 0 },
				}}
				className="grid grid-cols-3 p-10 gap-10 bg-icoy">
				<div className="flex justify-center items-center rounded-lg gap-10 aspect-square bg-slate-800"></div>
				<div className="flex justify-center items-center rounded-lg gap-10 aspect-square bg-slate-800"></div>
				<div className="flex justify-center items-center rounded-lg gap-10 aspect-square bg-slate-800"></div>
				<div className="flex justify-center items-center rounded-lg gap-10 aspect-square bg-slate-800"></div>
				<div className="flex justify-center items-center rounded-lg gap-10 aspect-square bg-slate-800"></div>
				<div className="flex justify-center items-center rounded-lg gap-10 aspect-square bg-slate-800"></div>
			</motion.section>
			<div className="flex justify-normal items-center rounded-xl gap-12"></div>
			<Section.RowFlexible>
				<h1>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua!
				</h1>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua!
				</p>
			</Section.RowFlexible>
			<Section.RowFlexible ref={graphicsRef} />
			<Bar.Spacer />
			<Section.RowFlexible ref={appRef} />
        <Bar.Footer ref={vRef} />
    </div>
}