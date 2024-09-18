import React from 'react';
import { motion } from "framer-motion";

export const ScrollButton = ({ scrollToPosition, label, editStyle={} }) => {
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
        style={{
          alignItems:"center",
          ...editStyle
        }}
      >
        {label}
      </motion.button>
    );
};

export function ImageLink({ link, image, alt, editStyle={}, imgStyle={} }) {
    return (
        <a href={link} style={editStyle} className="imageContainer">
            <img src={image} alt={alt} style={imgStyle} className="imageLink" />
        </a>
    );
}

