import React from 'react'
import '../Css/Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

function Footer() {
    return (
        <>
            <div className='w-100 d-flex align-items-center justify-content-center flex-column p-5' style={{ backgroundColor: "red" }}>
                 <div className='d-flex align-items-center justify-content-center p-5'> 
                    <div className='icon-container ' style={{ width: "200px", height: "200px" }}>
                      
                            <div className="box1" style={{position:"relative"}}><FontAwesomeIcon icon={faGithub}  style={{position:"absolute",bottom:"25px",right:"25px",fontSize:"30px"}} /></div>
                            <div className="box2" style={{position:"relative"}}><FontAwesomeIcon icon={faLinkedin} style={{position:"absolute",bottom:"25px",left:"25px",fontSize:"30px"}} /></div>
                            <div className="box3" style={{position:"relative"}}><FontAwesomeIcon icon={faInstagram}  style={{position:"absolute",top:"25px",right:"25px",fontSize:"30px"}} /></div>
                            <div className="box4" style={{position:"relative"}}><FontAwesomeIcon icon={faWhatsapp}  style={{position:"absolute",top:"25px",left:"25px",fontSize:"30px"}} /></div>
                    

                    </div>
                    
                 </div> 
                 <div style={{width:"500px",height:"2px",backgroundColor:"white"}}className=''></div>
            </div>
        </>
    )
}

export default Footer