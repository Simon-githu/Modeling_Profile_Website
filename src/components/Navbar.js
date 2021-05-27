import React, { useState } from 'react'
import styled from 'styled-components'
import { Link, animateScroll as scroll } from "react-scroll";
import {FaAngleUp,FaBars} from 'react-icons/fa'
import { menuData } from '../data/MenuData';

function Navbar({toggle}) {
    const [navbar,setNavbar]=useState(false)
    const [selected,setSelected]=useState(false)
    const [showButton,setShowButton]=useState(false)
    const [buttonSelected,setButtonSelected]=useState(false)
    // Change navbar color on scroll
    const changeNavbarBackground=()=>{
       if(window.scrollY>20){
           setNavbar(true)
           setSelected(true)
       }else{
           setNavbar(false)
           setSelected(false)
       }
    }
    window.addEventListener('scroll',changeNavbarBackground)
    // Show Button on scroll
    const showScrollTopButton=()=>{
if(window.scrollY>500){
    setShowButton(true)
    setButtonSelected(true)
}else{
    setShowButton(false)
    setButtonSelected(false)
}
    }
    window.addEventListener('scroll',showScrollTopButton)

    // Scroll to top function
    const scrollTop=()=>{
       scroll.scrollToTop({duration:300})
       setShowButton(false)
    setButtonSelected(false)
    setNavbar(false)
    setSelected(false)
    }

    return (
        <>
        {showButton?<ScrollUpButton defaultChecked={buttonSelected} onClick={scrollTop}>
        <FaAngleUp style={{marginTop:'5px'}}/>
    </ScrollUpButton>:null}
        <Nav style={navbar?{background:'#cd853f',padding:'15px 0'}:{background:'transparent'}}>
        <MaxWidthDiv class="max-width">
            <LogoDiv class="logo"><p>Portfo<span style={navbar?{color:'#fff'}:{color:'#cd853f'}}>lio.</span></p></LogoDiv>
            <Menu class="menu">
            {menuData.map((item,index)=>(
            <Links
            key={index}
    activeClass="active"
    to={item.name}
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}
    style={{cursor:'pointer'}}
    selected={selected}
>{item.title}</Links>
        ))}
            </Menu>
            <MenuButton  onClick={toggle}>
                <FaBars
                style={{

                }}
                />
            </MenuButton>
        </MaxWidthDiv>
    </Nav>
    </>
    )
}

export default Navbar
const Nav = styled.nav`
width: 100%;
position:fixed;
z-index:999;
padding:30px 0;
font-family:'Ubuntu',sans-serif;
transition:all 0.3s ease;

`;
const MaxWidthDiv = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
max-width: 1300px;
    padding: 0 80px;
    margin: auto;
    @media (max-width: 991px) {
        padding: 0 50px;
    }
    @media (max-width: 947px) {
        max-width: 930px;
    }   
    @media (max-width: 690px) {
    
        padding: 0 23px;
    } 
`;
const LogoDiv = styled.div`
p{
    color:#fff;
    font-size:35px;
    font-weight:600;
    span{
    color:#fff;
    transition:all 0.3s ease
}
}

`;
const Menu = styled.ul`
@media(max-width:947px){
    position: fixed;
        height: 100vh;
        width: 100%;
        left: -100%;
        top: 0;
        background: #111;
        text-align: center;
        padding-top: 80px;
        transition: all 0.3s ease;
        &:active{
            left:0
        }
}
`;
const Links =styled(Link)`
    color: #fff;
    font-size: 18px;
    font-weight: 500;
    margin-left: 25px;
    transition: color 0.3s ease;
    @media (max-width: 947px){
        display: inline-block;
        margin: 20px 0;
        font-size: 25px;
    }

&:Hover{
    color:${props=>props.selected?'':'#cd853f'}
}
`;
const MenuButton = styled.div`
color: #fff;
font-size:23px;
cursor: pointer;
display:none;
@media (max-width: 947px){
   
        display: block;
        z-index: 999;
}
`;
const ScrollUpButton=styled.div`
position:fixed;
height:45px;
width:42px;
background:#cd853f;
right:30px;
bottom:${props=>props.defaultChecked?'30px':'10px'};
text-align: center;
    line-height: 45px;
    color: #fff;
    z-index: 9999;
    font-size: 30px;
    border-radius: 6px;
    border-bottom-width: 2px;
    cursor: pointer;
    opacity:${props=>props.defaultChecked?'1':'0'} ;
    pointer-events: ${props=>props.defaultChecked?'auto':'none'};
    transition: all 0.3s ease;
    overflow-y: hidden;
    &:hover{
        filter:brightness(90%)
    }
    @media(max-width:500px){
        right: 15px;
        bottom: 15px;
        height: 38px;
        width: 35px;
        font-size: 23px;
        line-height: 38px;
    }
`;