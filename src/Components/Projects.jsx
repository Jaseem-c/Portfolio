import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../Variants'
import { LinearGradient } from 'react-text-gradients'
function Projects() {
  return (
   <> 
   <div className="py-5 px-md-5  " style={{ backgroundColor: "black" }}>
   <motion.h1
                    variants={fadeIn("up", 0.5)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                    className='text-light text-center fw-bold' style={{ fontSize: "60px" }}><LinearGradient gradient={['to left', '#17acff ,#ff68f0']}>PROJECTS</LinearGradient></motion.h1>
   </div>
   </>
  )
}

export default Projects