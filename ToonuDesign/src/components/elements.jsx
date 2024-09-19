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
    <motion.button className="items-center min-h-10 flex font-light text-body bg-icoy text-gray cursor-pointer px-4 rounded-lg"
      whileHover={{ scale: 1.1, backgroundColor: "#a08021" }}
      whileTap={{ scale: 0.9, backgroundColor: "bg-white" }}
      onClick={handleScroll}
              style={{
        ...editStyle
      }}
    >
      {label}
    </motion.button>
  );
};

export function ImageLink({ link, image, alt, editStyle={}, imgStyle={} }) {
    return (
        <a href={link} style={editStyle} className="flex h-full w-auto object-contain min-h-10">
            <img src={image} alt={alt} style={imgStyle} className="h-full w-auto" />
        </a>
    );
}