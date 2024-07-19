import { TextField } from '@mui/material'
import React from 'react'
import '../Css/Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHouse, faPhone } from '@fortawesome/free-solid-svg-icons'
import { LinearGradient } from 'react-text-gradients'
import { motion } from 'framer-motion'
import { fadeIn, scaleIn } from '../Variants'

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
                <motion.div
                variants={scaleIn(0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="container  mt-5">
                    <div className="row ">
                        <div className="col-md-3"></div>
                        
                        <div className="col-md-6  ">
                          <div className=' p-5 border border-primary rounded' style={{backgroundColor:"0B1F45",boxShadow:"0 0 15px white"}}>
                                {/* <p className='text-light'>If you have any questions or concerns,please don't hesitate to contact me iam open to any work oppurtunities that align with my skills and interests.</p> */}
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
                        <div className="col-md-3"></div>
                        {/* <div className="col-md-5 d-flex align-items-center justify-content-center ">
                            <div className='icons d-flex flex-column '>
                                    <div className='d-flex    ' style={{alignItems:"center"}}>
                                    <button className='btn rounded-5 btn-light text-light me-3 '><FontAwesomeIcon icon={faEnvelope} /></button>
                                    <p className='text-light mt-2'>seamjaseem@gmail.com</p>
                                    </div>
                                    <div className='d-flex   mt-3  ' style={{alignItems:"center"}}>
                                    <button className='btn rounded-5 btn-light text-light me-3 '><FontAwesomeIcon icon={faPhone} /></button>
                                    <p className='text-light mt-2'>+91 7034295539</p>
                                    </div>
                                    <div className='d-flex mt-4 ' >
                                   <div> <button className='btn rounded-5 btn-light text-light me-3 '><FontAwesomeIcon icon={faHouse} /></button></div>
                                    <div className='d-flex flex-column'>
                                        <span className='text-light '>Choondathodi(H)</span>
                                        <span className='text-light mt-2 '>Ezhuvanthala(p.o)</span>
                                        <span className='text-light mt-2 '>Nellaya,Palakkad</span>
                                        <span className='text-light mt-2 '>679335</span>
                                        
                                    </div>
                                    </div>
                                    
                                    <div className='mt-5' style={{height:"1px",backgroundColor:"grey"}}></div>
                                    
                               
                            </div>
                        </div> */}
                    </div>
                </motion.div>
            </div>
        </>
    )
}

export default ContactUs