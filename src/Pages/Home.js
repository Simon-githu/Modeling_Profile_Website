import React, { useEffect, useRef, useState } from 'react'
import styled,{css} from 'styled-components/macro'
import {IoArrowForward,IoArrowBack} from 'react-icons/io5'

function Home({slides}) {
    const [current,setCurrent]=useState(0);
    const length = slides.length;
    const timeout =useRef(null)



useEffect(()=>{
    const nextSlide=()=>{
        setCurrent(current=>(current === length-1 ? 0:current + 1))
    }
    timeout.current=setTimeout(nextSlide,5000);
    return function(){
        if(timeout.current){
            clearTimeout(timeout.current)
        }
    }
    
    
    },[current,length])

    const nextSlide=()=>{
        if(timeout.current){
            clearTimeout(timeout.current)
        }
        setCurrent(current === length-1 ? 0:current + 1);

  
    }
    const prevSlide=()=>{
        if(timeout.current){
            clearTimeout(timeout.current)
        }
        setCurrent(current === 0?length-1:current-1)
       
    }

    return (
       <HomeSection id="home">
           <HomeWrapper>
           {slides.map((slide,index)=>{
                 return(
                     <HomeSlide key={index}>
                     {index===current&&(
                        <HomeSlider>
                             <HomeImage src={slide.image} alt={slide.alt}/>
                                 <HomeContent>
                                     <h1>{/*slide.title*/} </h1>
                                     
                                     <p>{/*slide.name*/}</p>
                                     
                                   
                                 </HomeContent>
                             
                         </HomeSlider>
                     )}
                        
                     </HomeSlide>
                 )
             })}
             <SliderButtons>
                  <PrevArrow onClick={prevSlide}/>
                  <NextArrow onClick={nextSlide}/>
             </SliderButtons>
           </HomeWrapper>
       </HomeSection>
    )
}

export default Home

const HomeSection =styled.section`
height:100vh;
position:relative;

`;


const HomeWrapper = styled.div`
width:100%;
height:100%;
display:flex;
justify-content:center;
align-items:center;

position:relative;
`;

const HomeSlide = styled.div`
z-index: 1;
width: 100%;
height:100%;
`;

const HomeSlider = styled.div`
 position: absolute;
 top: 0;
 left: 0;
 width: 100%;
height:100%;
display:flex;
align-items:center;
justify-content:center;
overflow-y:hidden;
&::before{
    content:'';
    position:absolute;
    z-index:2;
    width:100%;
    height:100vh;
    bottom:0vh;
    left:0;
    overflow:hidden;
    opacity:0.4;
    background:linear-gradient(0deg,
        rgba(0,0,0,0.2)0%,
        rgba(0,0,0,0.2)50%,
        rgba(0,0,0,0.6)100%
        )
}
`;

const HomeImage = styled.img`
position: absolute;
top: 0;
left: 0;
width:100vw;
height:100vh;
object-fit:cover;


@media screen and (max-width:768px){
    height: 100vh;
}
`;

const HomeContent  = styled.div`
position: relative;
z-index: 10;
display:flex;
flex-direction:column;
max-width:1600px;
width:calc(100%-100px);
color: #fff;

h1{
    font-size:clamp(1rem,8vw,2rem);
    font-weight:400;
    text-transform:uppercase;
    text-shadow:0px 0px 20px rgba(0,0,0,0.4);
    text-align:left;
    margin-bottom:0.8rem;
    animation:slide 5s linear infinite

    
}
p{
    margin-bottom:1.2rem;
    text-shadow:0px 0px 20px rgba(0,0,0,0.4);
}
@keyframes slide{
    0%{margin-top:-100px}
    25%{margin-top:-50px}
    50%{margin-top:0px}
   
    
}

`;



const SliderButtons = styled.div`
position:absolute;
bottom: 50px;
right: 50px;
display: flex;
z-index: 10;
overflow: hidden;
`
const arrowButtons =  css`
width:50px;
height:50px;
color:#fff;
cursor:pointer;
background:#000d1a;
border-radius:50px;
padding:10px;
margin-right:1rem;
user-select:none;
transition:0.3s;

&:hover{
    background:#cd853f;
    transform:scale(1.05);
}
`;
const PrevArrow =styled(IoArrowBack)`
${arrowButtons}
`;

const NextArrow =styled(IoArrowForward)`
${arrowButtons}
`;
