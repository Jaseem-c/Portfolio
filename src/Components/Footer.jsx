import React from 'react'
import '../Css/Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

function Footer() {
    return (
        <>
            <div className='w-100 d-flex align-items-center justify-content-center flex-column p-5 ' style={{ backgroundColor: "#322966" }}>
                 <div className='d-flex align-items-center justify-content-center border  flex-column'> 
                    <div className='icon-container p-5 ' style={{ width: "300px", height: "300px" }}>
                      
                            <div className="box1" style={{position:"relative"}}><FontAwesomeIcon icon={faGithub}  style={{position:"absolute",bottom:"25px",right:"25px",fontSize:"30px"}} /></div>
                            <div className="box2" style={{position:"relative"}}><FontAwesomeIcon icon={faLinkedin} style={{position:"absolute",bottom:"25px",left:"25px",fontSize:"30px"}} /></div>
                            <div className="box3" style={{position:"relative"}}><FontAwesomeIcon icon={faInstagram}  style={{position:"absolute",top:"25px",right:"25px",fontSize:"30px"}} /></div>
                            <div className="box4" style={{position:"relative"}}><FontAwesomeIcon icon={faWhatsapp}  style={{position:"absolute",top:"25px",left:"25px",fontSize:"30px"}} /></div>
                    

                    </div>
                    <div style={{width:"90%",height:"2px",backgroundColor:"white"}}className=''></div>
                 </div> 

                 <div className='d-flex mt-4 mb-3'>
                    <h6 className='text-light me-3'>Home</h6>
                    <h6 className='text-light me-3'>About</h6>
                    <h6 className='text-light me-3'>Service</h6>
                    <h6 className='text-light me-3'>Project</h6>
                    <h6 className='text-light me-3'>Contact</h6>
                 </div>
                 <div style={{width:"40%",height:"2px",backgroundColor:"white"}}className=''></div>
                 <p className='text-light mt-4'>© 2024 JASEEM C. All rights reserved. This portfolio website is created by Jaseem C.</p>
            </div>
        </>
    )
}

export default Footer