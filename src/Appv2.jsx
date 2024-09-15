import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import './Appv2.css';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export default function Appv2() {
  return (
    <div className="App">
      <nav className="navbar">
        <ul>
          <li><Link to="section1" smooth={true} duration={800}>Section 1</Link></li>
          <li><Link to="section2" smooth={true} duration={800}>Section 2</Link></li>
          <li><Link to="section3" smooth={true} duration={800}>Section 3</Link></li>
          <li><Link to="section4" smooth={true} duration={800}>Section 4</Link></li>
        </ul>
      </nav>

      <motion.section 
        id="section1" 
        className="section section1"
        initial="hidden" 
        animate="visible"
        variants={sectionVariants}
        transition={{ duration: 0.8 }}
      >
        <h1>Section 1</h1>
        <p>This is the first section.</p>
      </motion.section>

      <motion.section 
        id="section2" 
        className="section section2"
        initial="hidden" 
        animate="visible"
        variants={sectionVariants}
        transition={{ duration: 0.8 }}
      >
        <h1>Section 2</h1>
        <p>This is the second section.</p>
      </motion.section>

      <motion.section 
        id="section3" 
        className="section section3"
        initial="hidden" 
        animate="visible"
        variants={sectionVariants}
        transition={{ duration: 0.8 }}
      >
        <h1>Section 3</h1>
        <p>This is the third section.</p>
      </motion.section>

      <motion.section 
        id="section4" 
        className="section section4"
        initial="hidden" 
        animate="visible"
        variants={sectionVariants}
        transition={{ duration: 0.8 }}
      >
        <h1>Section 4</h1>
        <p>This is the fourth section.</p>
      </motion.section>
    </div>
  );
}