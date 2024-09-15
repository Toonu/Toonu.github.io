import React, { useState } from 'react';
import { motion } from "framer-motion";

export const ScrollButton = ({ scrollToPosition, label }) => {
    const handleScroll = () => {
      window.scrollTo({
        top: scrollToPosition,
        behavior: "smooth",
      });
    };

    return (
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleScroll}
        className="ScrollButton"
      >
        {label}
      </motion.button>
    );
};

export function ImageLink({ link, image, alt }) {
    return (
        <a href={link} className="ImageLink">
            <img src={image} alt={alt} />
        </a>
    );
}
  
export function HelloWorld(props) {
    const name = props.name;
    return <div><h1>{name}</h1>
        <br></br><div class="h1b">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua!</div>
        <br></br><div class="h1g">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua!</div>
        <br></br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua!<br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        </div>
}

export function MailboxButton() {
    const [full, setFull] = useState(false);
    function handleClick() {
        setFull(!full);
    }

    return (
        <button onClick={handleClick}>
            {full ? '📬' : '📪'}
        </button>
    );
}

export function Canvas() {
    return <section></section>
}