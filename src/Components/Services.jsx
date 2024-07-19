import React from 'react'

import { motion } from 'framer-motion'
import { fadeIn, scaleIn } from '../Variants'
import { LinearGradient } from 'react-text-gradients'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faPalette } from '@fortawesome/free-solid-svg-icons'
import { faAndroid } from '@fortawesome/free-brands-svg-icons'
import '../Css/Service.css'

function Services() {
    return (
        <>
            <div className="py-5 px-md-5  " style={{ backgroundColor: "black" }}>
                <motion.h1
                    variants={fadeIn("up", 0.5)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                    className='text-light text-center fw-bold pb-5' style={{ fontSize: "60px" }}><LinearGradient gradient={['to left', '#17acff ,#ff68f0']}>SERVICES</LinearGradient></motion.h1>
                <motion.div
                 variants={scaleIn(0.2)}
                 initial="hidden"
                 whileInView={"show"}
                 viewport={{ once: false, amount: 0.7 }}
                 className="row w-100 mt-5 mb-5 px-md-5 d-flex align-items-center justify-content-center ">
                    <div className="col-md-4 mt-3 px-5 d-flex align-items-center justify-content-center">
                        <div className='d-flex align-items-center justify-content-center flex-column   px-4  py-4 carddiv'>
                            <FontAwesomeIcon icon={faCode} className='text-light fa-5x' />
                            <h3 className='text-light mt-3'>Web Development</h3>
                            <p className='text-light mt-3 ' style={{textAlign:"justify"}}>The process of creating, building, and maintaining websites, involving coding, design, and content management.</p>
                        </div>
                    </div>
                    <div className="col-md-4 mt-3 px-5 d-flex align-items-center justify-content-center">
                        <div className='d-flex align-items-center justify-content-center flex-column carddiv  px-4  py-4 '>
                        <FontAwesomeIcon icon={faPalette} className='text-light fa-5x' />
                            <h3 className='text-light mt-3'>UI/UX Designing</h3>
                            <p className='text-light mt-3 ' style={{textAlign:"justify"}}>Designing user interfaces and optimizing user experiences to ensure websites and apps are intuitive and user-friendly.</p>
                        </div>
                    </div>
                    <div className="col-md-4 mt-3 px-5 d-flex align-items-center justify-content-center">
                        <div className='d-flex align-items-center justify-content-center flex-column  carddiv  px-4  py-4 '>
                        <FontAwesomeIcon icon={faAndroid} className='text-light fa-5x' />
                            <h3 className='text-light mt-3'>Web Development</h3>
                            <p className='text-light mt-3 ' style={{textAlign:"justify"}}>The creation of software applications for mobile devices, encompassing design, coding, testing, and deployment.</p>
                        </div>
                    </div>
                    
                   
               
                </motion.div>
            </div>

     
        
    </>
  )
}

export default Services