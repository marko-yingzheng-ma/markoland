import { Html } from "@react-three/drei"
import { motion } from "framer-motion";
import { useState } from 'react';
import './CloseButton.css'

const draw = {
  hidden: {
    pathLength: 0,
    opacity: 0
  },
  visible: (i) => {
    const delay = 1 + i * 0.5;
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

function CloseButton({ title, onClick }) {
  const [visibility, setVisibility] = useState('visible')

  return (
    <Html fullscreen>
      {/* <motion.svg
        className='closeBotton'
        width="50"
        height="50"
        viewBox="0 0 50 50"
        whileHover={{
          scale: 1.2,
          transition: { type: "spring", stiffness: 400, damping: 15 }
        }}
        whileTap={{ scale: 0.9 }}
        initial="hidden"
        animate={visibility}
        onTap={() => {
          setVisibility('hidden')
          // onClick()
        }}
      >

        <motion.line
          x1="0"
          y1="0"
          x2="50"
          y2="50"
          stroke="#80c9e8"
          variants={draw}
          custom={2}
        />
        <motion.line
          x1="50"
          y1="0"
          x2="0"
          y2="50"
          stroke="#ee619e"
          variants={draw}
          custom={2.5}
        />
      </motion.svg> */}
      <div className="closeBtn">
        yooooo
      </div>
    </Html>
  )
}

export { CloseButton }