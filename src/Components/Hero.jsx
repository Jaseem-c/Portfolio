import React from 'react'
import '../Css/Hero.css'
import profile from '../assets/profile.png'
import {motion} from 'framer-motion'
import { useTypewriter ,Cursor} from 'react-simple-typewriter'
import { LinearGradient } from 'react-text-gradients'
import { Col, Row } from 'react-bootstrap'

function Hero() {
  const [text]=useTypewriter({
    words:['Web Developer','FrontEnd Developer'],
    loop:{},
    delay:50,
    typeSpeed:100,
    deleteSpeed:50,
  })
  return (
   <>
   {/* <div className='hero'>
     <div className="row w-100 p-5 ">
      <div className="col-md-7 d-flex  flex-column" >
        <motion.div  initial={{scale:0}} animate={{scale:1}} transition={{duration:"1",delay:".5"}} style={{marginTop:"100px",marginLeft:"50px"}}  >
          <h2 className='text-light'>Hi,Myself</h2>
          <h1 className='text-light mt-4 fs-1'>Jaseem C</h1>
          <h2 className='text-light mt-3'>And I'm a <LinearGradient gradient={['to left', '#17acff ,#ff68f0']}><span className=' fw-bold' style={{fontSize:"50px"}}>{text}</span></LinearGradient></h2>
         <div className='d-flex'>
            <button className="btn rounded-5 px-3 text-light custom-button mt-3 me-3"  >Hire Me</button>
            <button className="btn rounded-5 px-3 text-light custom-button mt-3"  >Download CV</button>
         </div>
        </motion.div>
      </div>
      <div className="col-md-5 d-flex justify-content-center align-items-center">
        <motion.div  initial={{scale:0}} animate={{scale:1}} transition={{duration:"2",delay:".5"}} className='d-flex justify-content-center align-items-center imagediv' style={{width:"500px",height:"500px",borderRadius:"50%",position:"relative"}}>
          <motion.img initial={{scale:0}} animate={{scale:1}} transition={{duration:"2",delay:".5"}} src={profile} alt="" style={{position:"absolute",width:"590px"}} />
        </motion.div>
      </div>
     </div>
   </div> */}

   
    {/* <div className='hero p-5'>
       <Row className=' d-flex justify-content-center align-items-center ps-4 h-100 ' style={{width:"100%",height:"100%"}} >
       <Col md={1}></Col>
            <Col md={6} className='p-3 '>
            <motion.div  initial={{scale:0}} animate={{scale:1}} transition={{duration:"1",delay:".5"}}   >
              <h3 className='text-light'>Hi,Myself</h3>
              <h2 className='text-light mt-4 fs-1'>Jaseem C</h2>
              <h1 className='text-light mt-3'>And I'm a <LinearGradient gradient={['to left', '#17acff ,#ff68f0']}><span className='fs-1 fw-bold'>{text}</span></LinearGradient></h1>
             <div className='d-flex'>
                <button className="btn rounded-5 px-3 text-light custom-button mt-3 me-3"  >Hire Me</button>
                <button className="btn rounded-5 px-3 text-light custom-button mt-3"  >Download CV</button>
             </div>
            </motion.div>
            </Col>
           
            <Col md={5} className='d-flex justify-content-center align-items-center p-5 '>
            <motion.div  initial={{scale:0}} animate={{scale:1}} transition={{duration:"2",delay:".5"}} className='d-flex justify-content-center align-items-center imagediv' style={{width:"100%",height:"500px",borderRadius:"50%",position:"relative"}}>
              <motion.img initial={{scale:0}} animate={{scale:1}} transition={{duration:"2",delay:".5"}} src={profile} alt="" style={{position:"absolute",width:"115%",height:"115%"}} />
            </motion.div>
            </Col>
          </Row>
    </div> */}
   </>
  )
}

export default Hero