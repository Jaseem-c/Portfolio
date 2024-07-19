import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import '../Css/About.css'
// motion
import { motion } from 'framer-motion'
// variants
import { fadeIn } from '../Variants'
import { LinearGradient } from 'react-text-gradients'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons'

function About() {
    return (
        <>
            <div className="about py-5 px-md-5 " style={{ backgroundColor: "black" }}>
                <motion.h1
                    variants={fadeIn("up", 0.5)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                    className='text-light text-center fw-bold' style={{ fontSize: "60px" }}><LinearGradient gradient={['to left', '#17acff ,#ff68f0']}>ABOUT</LinearGradient></motion.h1>
                <Row className='w-100 mt-5' >
                    <Col sm={12} md={6} lg={6} className="about-left p-4 d-flex align-items-center justify-content-center flex-column">
                        <motion.div
                            variants={fadeIn("up", 0.5)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.7 }}
                        >
                            <h3><FontAwesomeIcon icon={faQuoteLeft} className='text-light me-3' /></h3>
                            <h3 className='ms-3'>  <LinearGradient gradient={['to left', '#17acff ,#ff68f0']}><span className='fs-1'>Hello!</span></LinearGradient></h3>
                            <p className='text-light ' style={{ textAlign: "justify", textIndent: "90px", lineHeight: "2", wordSpacing: "4px" }}>I'm a recent postgraduate with an MCA degree, currently interning as a MERN stack developer at Luminar Technolab. My journey as an intern has allowed me to dive deep into the world of web development, where I've honed my skills and discovered a passion for front-end development. With a keen eye for design and a dedication to creating seamless user experiences, I'm now expanding my expertise to become a full-stack developer. I'm excited to leverage my growing skills to build comprehensive, dynamic applications. Let's create something amazing together!.<FontAwesomeIcon icon={faQuoteRight} style={{ fontSize: "25px" }} className='ms-3' />

                            </p>
                        </motion.div>
                    </Col>
                    <Col sm={12} md={6} lg={6} className="about-right p-4">
                        <motion.div
                            variants={fadeIn("up", 0.5)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.7 }}
                            className=' p-5'
                        >
                            <h3 className='text-light'>Education</h3>
                            <div  style={{width:"90px",height:"2px",backgroundImage:" linear-gradient(to left, #17acff, #ff68f0)"}}></div>
                            <div className='mt-3 p-3  edudiv'>
                                <h6 className='text-light'>Under Graduation</h6>
                                <h5 className='text-light'>Bsc Physics,Calicut University</h5>
                               
                            </div>
                            <div className='mt-3 p-3 edudiv'>
                                <h6 className='text-light'>Post Graduation</h6>
                                <h5 className='text-light'>MCA,Kerala Technological University</h5>
                               
                            </div>
                            <div className='mt-3 p-3 edudiv'>
                                <h6 className='text-light'>Intern</h6>
                                <h5 className='text-light'>ME(A)RN Stack,Luminar TechnoLab Pvt Ltd</h5>
                               
                            </div>
                            
                        </motion.div>
                    </Col>
                </Row>
              
            </div>
        </>
    )
}

export default About