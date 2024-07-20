import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../Variants'
import { LinearGradient } from 'react-text-gradients'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Css/Project.css'
import wataburger from '../assets/wat a burger.jpg'
import funday from '../assets/funday.jpg'
import weather from '../assets/weather.jpg'
import bmi from '../assets/Bmi.jpg'
import nike from '../assets/Nike.png'
import mediaplayer from '../assets/MediaPlayer.png'
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 3
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 768, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
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
         <div className="p-5">
    <Carousel 
      responsive={responsive} 
      infinite={true} 
      autoPlay={false} 
      keyBoardControl={true} 
      showDots={true}
      containerClass="carousel-container"
      itemClass="carousel-item-padding-40-px"
    >
      <div className="card card-item  p-3" style={{width:"350px",height:"350px"}}>
        <img src={wataburger} className="card-img-top" alt="..." />
        <div className="overlay">
          <div className="overlay-content p-3">
          <h3 className='text-light text-center mt-3'>Wat a Burger</h3>
            <p className="card-text mt-3" style={{fontSize:"12px"}}>The Wat a burger Clone Website project utilizes HTML and CSS to replicate the official site, focusing on creating a responsive, visually appealing design. It includes a functional navigation bar, detailed menu section, and interactive locations page, showcasing front-end development skills.</p>
           <div className='m-auto'> 
            <a href="https://jaseem-12.github.io/wat_a_burger_website/" target='_blank' ><button className="btn rounded-5 px-3 text-light custom-button me-3"  >Visit</button></a>
            <a href="https://github.com/Jaseem-c/Css-Projects/tree/main/Wat_a_burger_website"  target='_blank' ><button className="btn rounded-5 px-3 text-light custom-button"  >Repository</button></a>
            </div>
          </div>
        </div>
      </div>
      <div className="card card-item p-3" style={{width:"350px",height:"350px"}}>
        <img src={funday} className="card-img-top" alt="..."  />
        <div className="overlay">
          <div className="overlay-content p-3">
          <h3 className='text-light text-center mt-3'>Funday Holidays</h3>
            <p className="card-text mt-3" style={{fontSize:"12px"}}>The Funday Holidays travel website, built using HTML, CSS, and Bootstrap, features a responsive and visually appealing design. It includes interactive destination guides, booking options, and travel tips, showcasing front-end development skills and a user-friendly interface.</p>
            <div className='m-auto'> 
            <a href="https://jaseem-c.github.io/Funday_holidays/" target='_blank' ><button className="btn rounded-5 px-3 text-light custom-button me-3"  >Visit</button></a>
            <a href="https://github.com/Jaseem-c/Bootstrap_projects/tree/main/Funday_Holidays"  target='_blank' ><button className="btn rounded-5 px-3 text-light custom-button"  >Repository</button></a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="card card-item p-3 "  style={{width:"350px",height:"350px"}}>
        <img src={weather} className="card-img-top" alt="..." />
        <div className="overlay">
          <div className="overlay-content p-3">
          <h3 className='text-light text-center mt-3'>Weather APP</h3>
            <p className="card-text mt-3" style={{fontSize:"12px"}}>The Weather App uses the Fetch API to retrieve real-time weather data. Built with HTML, CSS, and JavaScript, it features user input for city searches, a responsive design, and displays detailed weather conditions in an intuitive interface.</p>
            <div className='m-auto'> 
            <a href="https://bucolic-monstera-8f35ee.netlify.app/" target='_blank' ><button className="btn rounded-5 px-3 text-light custom-button me-3"  >Visit</button></a>
            <a href="https://github.com/Jaseem-c/WeatherAPP_using_Js"  target='_blank' ><button className="btn rounded-5 px-3 text-light custom-button"  >Repository</button></a>
            </div>
          </div>
        </div>
      </div>
      <div className="card card-item p-3" style={{width:"350px",height:"350px"}}>
        <img src={bmi} className="card-img-top" alt="..." />
        <div className="overlay">
          <div className="overlay-content p-3">
          <h3 className='text-light text-center mt-3' >BMI Calculator</h3>
            <p className="card-text mt-3" style={{fontSize:"12px"}}>The BMI Calculator, developed with React.js, calculates Body Mass Index and integrates an audio feature to enhance user experience. The app features a sleek, responsive design for easy input and clear, spoken feedback on results. This combination of functionality and accessibility ensures users receive accurate BMI information in an inclusive, user-friendly manner.</p>
            <div className='m-auto'> 
            <a href="https://bmi-calculator-orcin-omega.vercel.app/" target='_blank' ><button className="btn rounded-5 px-3 text-light custom-button me-3"  >Visit</button></a>
            <a href="https://github.com/Jaseem-c/BMI_Caluclator"  target='_blank' ><button className="btn rounded-5 px-3 text-light custom-button"  >Repository</button></a>
            </div>
          </div>
        </div>
      </div>
      <div className="card card-item p-3"  style={{width:"350px",height:"350px"}}>
        <img src={nike} className="card-img-top" alt="..." />
        <div className="overlay">
          <div className="overlay-content p-3">
          <h3 className='text-light text-center mt-3' >Nike</h3>
            <p className="card-text mt-3" style={{fontSize:"12px"}} >The Nike Website Clone project, built with React, Bootstrap, and CSS, replicates the design and functionality of the official Nike site. It features a responsive layout, interactive product displays, and a sleek navigation system, showcasing front-end skills and providing a polished, user-friendly shopping experience.</p>
            <div className='m-auto'> 
            <a href="https://nike-clone-three-cyan.vercel.app/" target='_blank' ><button className="btn rounded-5 px-3 text-light custom-button me-3"  >Visit</button></a>
            <a href="https://github.com/Jaseem-c/Nike_Clone"  target='_blank' ><button className="btn rounded-5 px-3 text-light custom-button"  >Repository</button></a>
            </div>
          </div>
        </div>
      </div>
      <div className="card card-item p-3"  style={{width:"350px",height:"350px"}}>
        <img src={mediaplayer} className="card-img-top" alt="..." />
        <div className="overlay">
          <div className="overlay-content p-3">
          <h3 className='text-light text-center mt-3' >Media Player</h3>
            <p className="card-text mt-3" style={{fontSize:"12px"}} >The Media Player project, built with React, JSON Server, and Axios, provides a robust platform for managing video content. Users can add or delete videos, organize them into categories, and track their watching history. The app features a responsive interface for seamless video playback and efficient media management, enhancing user experience and content organization.</p>
            <div className='m-auto'> 
            <a href="https://media-player-front-end-hazel.vercel.app/" target='_blank' ><button className="btn rounded-5 px-3 text-light custom-button me-3"  >Visit</button></a>
            <a href="https://github.com/Jaseem-c/Nike_Clone"  target='_blank' ><button className="btn rounded-5 px-3 text-light custom-button"  >Repository</button></a>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  </div>       
   </div>
   </>
  )
}

export default Projects