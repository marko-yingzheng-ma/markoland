import { motion } from "framer-motion";
import { useEffect, useState } from 'react';
import './CloseButton.css'

const draw = {
  hidden: {
    pathLength: 0,
    opacity: 0
  },
  visible: (i) => {
    const delay = i * 0.6;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.01 }
      }
    };
  }
};

function CloseButton({ label, onClick }) {
  const size = 40;
  const [visibility, setVisibility] = useState('visible')
  const [isHovering, setIsHovering] = useState(false)

  return (
    <div className='closeBotton__container'>
      <motion.svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        whileHover={{
          scale: 1.2,
          transition: { type: "spring", stiffness: 400, damping: 15 }
        }}
        whileTap={{ scale: 0.9 }}
        onHoverStart={() => setIsHovering(true)}
        onHoverEnd={() => setIsHovering(false)}
        initial="hidden"
        animate={visibility}
        onTap={() => {
          setVisibility('hidden')
          setTimeout(() => {
            onClick()
          }, 500);
        }}
      >

        <motion.line
          x1="0"
          y1="0"
          x2={size}
          y2={size}
          stroke='#903482'
          variants={draw}
          custom={2}
        />
        <motion.line
          x1={size}
          y1="0"
          x2="0"
          y2={size}
          stroke='#4d8baa'
          variants={draw}
          custom={2.5}
        />
      </motion.svg>
      <div className={`closeBotton__label ${isHovering ? 'isActive' : ''}`}>{label}</div>
    </div>

  )
}

export { CloseButton }