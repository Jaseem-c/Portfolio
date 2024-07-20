import { TextField } from '@mui/material'
import React from 'react'
import '../Css/Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHouse, faLocationDot, faPhone, faUser } from '@fortawesome/free-solid-svg-icons'
import { LinearGradient } from 'react-text-gradients'
import { motion } from 'framer-motion'
import {  fadeIn, scaleIn, } from '../Variants'

function ContactUs() {
    return (
        <>

            <div className='pb-5 px-md-5 ' style={{ backgroundColor: "black" }}>
            <motion.h1
                   variants={scaleIn(0.2)}
                   initial="hidden"
                   whileInView={"show"}
                   viewport={{ once: false, amount: 0.7 }}
                    className='text-light text-center fw-bold mb-5' style={{ fontSize: "60px" }}><LinearGradient gradient={['to left', '#17acff ,#ff68f0']}>CONTACT</LinearGradient></motion.h1>
                <div 
               
                 className="container  mt-5 pb-5">
                    <motion.div
                   variants={fadeIn("up", 0.5)}
                   initial="hidden"
                   whileInView={"show"}
                   viewport={{ once: false, amount: 0.7 }}
                     className="row ">
                    <div className="col-md-6  "> 
                        <div className='p-5'>
                            <h3 className='text-light'>Get in Touch</h3>
                            <p className='text-light mt-4 text-justify'>Do you want to hire me? Do you need any support or Guidance? on If you have any questions, please don't hesitate to connect with me by simply entering your info in the provided form or hook up with me through an mail.</p>
                            <div className='mt-5 d-flex '>
                               <div className='d-flex align-items-center'>
                               <FontAwesomeIcon icon={faUser}className='text-light fa-2x' />
                               </div>
                               <div className='ms-4  d-flex flex-column'>
                                <span className='text-light fw-bold'>Name</span>
                                <span className='text-light'>Jaseem</span>
                               </div>
                            </div>
                            <div className='mt-4 d-flex '>
                               <div className='d-flex align-items-center'>
                               <FontAwesomeIcon icon={faLocationDot} className='text-light fa-2x'/>
                               </div>
                               <div className='ms-4  d-flex flex-column'>
                                <span className='text-light fw-bold'>Address</span>
                                <span className='text-light'>Palakad,Kerala,India</span>
                               </div>
                            </div>
                            <div className='mt-4 d-flex '>
                               <div className='d-flex align-items-center'>
                               <FontAwesomeIcon icon={faEnvelope}  className='text-light fa-2x' />
                               </div>
                               <div className='ms-4  d-flex flex-column'>
                                <span className='text-light fw-bold'>Email</span>
                                <span className='text-light'>Seamjaseem@gmail.com</span>
                               </div>
                            </div>

                        </div>
                    </div>
                        <div className="col-md-6  ">
                          <div className=' p-5 border border-primary rounded' style={{backgroundColor:"0B1F45",boxShadow:"0 0 15px white"}}>
                                <TextField label="Enter Your Name" variant="outlined" className='custom-textfield-root w-100 mt-3' InputLabelProps={{
                                    style: { color: 'white' },
                                }} InputProps={{
                                    style: { color: 'white' }, // Change input text color to white
                                }} />
                                <TextField label="Enter Your Email" variant="outlined" className='custom-textfield-root w-100 mt-5' InputLabelProps={{
                                    style: { color: 'white' },
                                }} InputProps={{
                                    style: { color: 'white' }, // Change input text color to white
                                }} />
                                <label className='text-light mt-3'>Your Message:</label>
                                <textarea name="" id="" className='form-control border-primary mt-3' style={{ background: "transparent" }} rows={4}></textarea>
                                <div className='d-flex align-items-center justify-content-center mt-4'> <button className='btn rounded-5 px-3 text-light custom-button mt-3 '>Send Message <FontAwesomeIcon icon={faEnvelope} /></button></div>
                          </div>
                        </div>
                       
                    </motion.div>
                </div>
            </div>
        </>
    )
}

export default ContactUs