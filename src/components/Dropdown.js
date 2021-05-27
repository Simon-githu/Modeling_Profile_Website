import React, { useState } from 'react'
import { Link } from "react-scroll";
import styled from 'styled-components'
import { menuData } from '../data/MenuData'
import {FaTimes} from 'react-icons/fa'



function Dropdown({isOpen,toggle}) {
    const [selected]=useState(false)
    return (
        <DropdownContainer isOpen={isOpen} onClick={toggle}>
<Icon onClick={toggle}>
<CloseIcon/>
</Icon>
<DropdownWrapper>
    <DropdownMenu>
    <h1>Mpho Khosana</h1>
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
    onClick={toggle}
>{item.title}</Links>
        ))}
    </DropdownMenu>
   
</DropdownWrapper>
        </DropdownContainer>
            
        
    )
}

export default Dropdown
const DropdownContainer = styled.div`
position: fixed;
z-index:999;
width:100%;
height:100%;
background:#cd853f;
display:grid;
align-items:center;
top:0;
left:0;
transition:0.3s ease-out;
opacity:${({isOpen})=>(isOpen?'1':'0')};
top:${({isOpen})=>(isOpen?'0':'-100%')};

`;
const Icon = styled.div`
position:absolute;
top:1.2rem;
right:1.5rem;
background:transparent;
font-size:2rem;
cursor:pointer;
outline:none;
`;
const CloseIcon = styled(FaTimes)`
color: #000d1a;
`;
const DropdownWrapper = styled.div``;
const DropdownMenu = styled.div`
display:grid;
grid-template-columns:1fr;
grid-template-rows:repeat(4,80px);
text-align:center;
margin-bottom:4rem;

@media screen and (max-width:480px){
    grid-template-rows:repeat(4,60px)
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
        margin: 10px 0;
        font-size: 25px;
    }

&:Hover{
    color:${props=>props.selected?'':'#cd853f'}
}
`;