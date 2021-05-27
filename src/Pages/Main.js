import React, { useState } from 'react'
import Footer from '../components/Footer'
import GlobalStyles from '../components/GlobalStyles'
import Navbar from '../components/Navbar'
import { SliderImage } from '../data/SliderImage'
import About from './About'
import Contact from './Connect'
import Home from './Home'
import Skills from './Feature'
import Teams from './Gallery'
import Achievements from './Achievements'
import Dropdown from '../components/Dropdown'
import { ProfileSliderImage } from '../data/ProfileSlideImage'

function Main() {
    const [isOpen,setIsOpen]=useState(false);
    const toggle =()=>{
      setIsOpen(!isOpen);
    }
  
    return (
        <>
        <GlobalStyles/>
        <Navbar toggle={toggle}/>
       <Dropdown isOpen={isOpen} toggle={toggle}/>
        <Home slides={SliderImage}/>
        <About/>
        <Achievements/>
        <Skills/>
        <Teams/>
        <Contact images={ProfileSliderImage}/>
        <Footer/>
        </>
    )
}

export default Main
