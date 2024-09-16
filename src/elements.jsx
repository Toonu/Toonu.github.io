import React from 'react';
import { motion } from "framer-motion";

export const ScrollButton = ({ scrollToPosition, label, style={} }) => {
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
        className="scrollButton"
        style={style}
      >
        {label}
      </motion.button>
    );
};

export function ImageLink({ link, image, alt, style={}, imgStyle={} }) {
    return (
        <a href={link} style={style} class="imageContainer">
            <img src={image} alt={alt} style={imgStyle} className="imageLink" />
        </a>
    );
}

export function Section({ children, isVert=true, style={} }) {
  const combinedStyle = {
    flexDirection: isVert ? "column" : "row",
    ...style
  };
  return <section className='section' style={combinedStyle}>{children}</section>
}