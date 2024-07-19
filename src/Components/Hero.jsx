import React from 'react'
import '../Css/Hero.css'
import profile from '../assets/profile.png'
import { motion } from 'framer-motion'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { LinearGradient } from 'react-text-gradients'
import { Col, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn'
import { faGithub, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import resume from '../assets/resume 1.pdf'
function Hero() {
  const [text] = useTypewriter({
    words: ['Web Developer.', 'FrontEnd Developer.'],
    loop: {},
    delay: 50,
    typeSpeed: 100,
    deleteSpeed: 50,
  })
  return (
    <>
      <div className='hero px-lg-5 py-4'>
        <Row className=' d-flex justify-content-center align-items-center ps-4 h-100 mt-3 ' style={{ width: "100%", height: "100%" }} >
          
          <Col md={7} className='p-3 '>
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: "1", delay: ".5" }}   >
              <h3 className='text-light'>Hello,</h3>
              <h2 className='text-light mt-4 fs-1'>This is <LinearGradient gradient={['to left', '#17acff ,#ff68f0']}><span className=' fw-bold me-3'>Jaseem.C</span></LinearGradient>And I'm a</h2>
              <h2 className='text-light mt-3'>Professional <LinearGradient gradient={['to left', '#17acff ,#ff68f0']}><span className='fs-1 fw-bold'>{text}</span></LinearGradient></h2>
              <div className='d-flex'>
                <button className="btn rounded-5 px-3 text-light custom-button mt-3 me-3"  >Hire Me</button>
                <a href={resume} download><button className="btn rounded-5 px-3 text-light custom-button mt-3">Download CV</button></a>
              </div>
              <div className="icons d-flex mt-4">
                <a href='https://www.linkedin.com/in/jaseem-c-18569625b/' target='_blank'><button className='btn rounded-5 btn-light text-light  me-3'><FontAwesomeIcon icon={faLinkedinIn} /></button></a>
                <a href='https://github.com/Jaseem-c' target='_blank'><button className='btn rounded-5 btn-light text-light  me-3 '><FontAwesomeIcon icon={faGithub} /></button></a>
                <a href="mailto:seamjaseem@gmail.com" target='_blank'><button className='btn rounded-5 btn-light text-light me-3'><FontAwesomeIcon icon={faEnvelope} /></button></a>
                <a href='https://www.instagram.com/jaseem_vpz' target='_blank'><button className='btn rounded-5 btn-light text-light  me-3'><FontAwesomeIcon icon={faInstagram} /></button></a>
                <a href='https://wa.me/7034295539' target='_blank'><button className='btn rounded-5 btn-light text-light me-3'><FontAwesomeIcon icon={faWhatsapp} /></button></a>
                
              </div>
            </motion.div>
          </Col>
          <Col md={5} className='d-flex justify-content-center align-items-center px-md-4 py-5 '>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 2, delay: 0.5 }}
              className='d-flex justify-content-center align-items-center imagediv '
              style={{
                width: '100%', // Adjust this percentage as needed
                paddingBottom: '100%', // This maintains the aspect ratio (1:1 in this case)
                borderRadius: '50%',
                position: 'relative',
              }}
            >
              <motion.img
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 2, delay: 0.5 }}
                src={profile}
                alt=""
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  objectFit: 'cover', // Ensures the image covers the div without distortion
                }}
              />
            </motion.div>
          </Col>

        </Row>
      </div>
    </>
  )
}

export default Hero