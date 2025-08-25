import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function NamePanel(props) {
  
  return (
<>
      <img
        className="decoration float"
        src='./img/AdobeStock_911639507.png'
      />
      <h2>Your name is...</h2>
      <div className="name-box" id="name-box">
      <AnimatePresence exitBeforeEnter>
      {props.name && (
        <motion.div
          key={props.name} // Key is essential for triggering re-mounting and animation
          style={{ overflow: "hidden", whiteSpace: "nowrap" }}
          initial={{ opacity: 0, display: "none" }}
          animate={{ opacity: 1, display: "block" }}
          transition={{ duration: 2, ease: "easeIn" }}
          exit={{ opacity: 0, display: "none", transition: { duration: 0.2, ease: "easeOut" } }} // Control the exit transition for old name
          id="name"
        >
          {props.name}
        </motion.div>
      )}
    </AnimatePresence>
      </div>
    </>
  );
}

export default NamePanel;
