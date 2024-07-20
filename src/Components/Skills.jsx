import React from 'react'
import Marquee from "react-fast-marquee";
import html from '../assets/html.svg'
import css from '../assets/Css.svg'
import bootstrap from '../assets/bootstrap-logo.svg'
import js from '../assets/Js.png'
import nodejs from '../assets/Node Js.svg'
import react from '../assets/React.png'
import git from '../assets/git.png'
import github from '../assets/Github.svg'
import '../Css/Skil.css'
import { motion } from 'framer-motion'
// variants
import { fadeIn } from '../Variants'
import { LinearGradient } from 'react-text-gradients';
function Skills() {

    return (
        <>
            <div className='w-100 p-md-5' style={{ backgroundColor: "black" }}>
            <motion.h1
                    variants={fadeIn("up", 0.5)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                    className='text-light text-center fw-bold ' style={{ fontSize: "60px" }}><LinearGradient gradient={['to left', '#17acff ,#ff68f0']}>SKILLS</LinearGradient></motion.h1>
                <Marquee pauseOnHover={true}className='mt-5 pt-5'>
                   <div className=' d-flex align-items-center justify-content-center p-3 imgdiv me-5' style={{width:"110px",height:"110px"}}>
                    <img src={html} alt="" style={{width:"100%"}} />
                   </div>
                   <div className=' d-flex align-items-center justify-content-center p-3 imgdiv me-5' style={{width:"110px",height:"110px"}}>
                    <img src={css} alt="" style={{width:"100%"}} />
                   </div>
                   <div className=' d-flex align-items-center justify-content-center p-3 imgdiv me-5' style={{width:"110px",height:"110px"}}>
                    <img src={bootstrap} alt="" style={{width:"100%"}} />
                   </div>
                   <div className=' d-flex align-items-center justify-content-center p-3 imgdiv me-5' style={{width:"110px",height:"110px"}}>
                    <img src={js} alt="" style={{width:"100%"}} />
                   </div>
                   <div className=' d-flex align-items-center justify-content-center p-3 imgdiv me-5' style={{width:"110px",height:"110px"}}>
                    <img src={nodejs} alt="" style={{width:"100%"}} />
                   </div>
                   <div className=' d-flex align-items-center justify-content-center p-3 imgdiv me-5' style={{width:"110px",height:"110px"}}>
                    <img src={react} alt="" style={{width:"100%"}} />
                   </div>
                   <div className=' d-flex align-items-center justify-content-center p-3 imgdiv me-5' style={{width:"110px",height:"110px"}}>
                    <img src={git} alt="" style={{width:"100%"}} />
                   </div>
                   <div className=' d-flex align-items-center justify-content-center p-3 imgdiv me-5' style={{width:"110px",height:"110px"}}>
                    <img src={github} alt="" style={{width:"100%"}} />
                   </div>
                </Marquee>
            </div>
        </>
    )
}

export default Skills