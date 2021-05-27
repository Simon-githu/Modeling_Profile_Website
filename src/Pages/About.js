import React from 'react'
import styled from 'styled-components'
import Image from '../images/mpho-5.jpeg'
function About() {
    return (
       
    <AboutSection id="about">
    <MaxWidth >
        <Title >About me</Title>
        <AboutContent >
            <ColumnLeft >
                <img src={Image} alt=""/>
            </ColumnLeft>
            <ColumnRight >
                <Text >I'm Mpho Khosana<span class="typing-2"></span></Text>
                <p>For the last 6 years, I worked as a photo model. 
                I have a huge passion for acting and I love being in front of the camera. 
                I mainly shoot fashions, but I also enjoy creative projects. 
                I am currently a freelance Model  and working with individual photographers, 
                but have worked with JUSTYOU Agency was part of CASTLE advert as an extra and also a GQ BEST DRESS MAN 2020 S.A,
                Fashion runway at SOUTH AFRICAN STATE THEATRE. I am available for photoshoots in Pretoria and Johannesburg , 
                but available to travel to other destinations in the South Africa 
                I am tall (5’11’), l am Black hair , Brown eyes , well body build which makes me a good model for swimwear photos.
                I enjoy working with photographers and agencies that have a creative approach. 
                I bring my energy and passion for modelling to every project I work on.</p>
                <a href="https:www.instagram.com/mpho_longstar">For more...</a>
            </ColumnRight>
        </AboutContent>
    </MaxWidth>
 </AboutSection>
    )
}

export default About
const AboutSection =styled.section`
 padding: 100px 0;

h2{
    &::after{
  content:"who am i"
    }
    overflow: hidden;
}
`;
const MaxWidth =styled.div`
  max-width: 1300px;
    padding: 0 80px;
    margin:auto;
    @media (max-width: 991px) {
        padding: 0 50px;
    }
@media (max-width:947px){
    max-width: 930px;
}
@media (max-width: 690px) {
    
    padding: 0 23px;
}
`;
const Title = styled.h2`
position: relative;
    text-align: center;
    font-size: 40px;
    font-weight: 500;
    margin-bottom: 60px;
    padding-bottom: 20px;
    font-family: 'Ubuntu', sans-serif;
    &::before{
        content: "";
    position: absolute;
    bottom: 8px;
    left: 50%;
    width: 180px;
    height: 3px;
    background: #111;
    transform: translateX(-50%);
    }
    &::after{
        position: absolute;
    bottom: 0px;
    left: 50%;
    font-size: 20px;
    color: #cd853f;
    padding: 0 5px;
    background: #fff;
    transform: translateX(-50%);
    }
`;
const AboutContent =styled.div`
display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
`;
const ColumnLeft =styled.div`
width:45%;
img{
    height: 400px;
    width: 400px;
    object-fit: cover;
    
    border-radius: 6px;
    @media (max-width: 1104px) {
    
        height: 350px;
        width: 350px;
    }
}
@media (max-width:947px){
    width: 100%;
    display: flex;
        justify-content: center;
        margin: 0 auto 60px;
}
`;
const ColumnRight =styled.div`
width:55%;
p{
    text-align:justify;
}
a{
    display: inline-block;
    background: #cd853f;
    color: #fff;
    font-size: 20px;
    font-weight: 500;
    padding: 10px 30px;
    margin-top: 20px;
    border-radius: 6px;
    border: 2px solid #cd853f;
    transition: all 0.3s ease;
    &:hover{
        color:#cd853f;
        background:none;
    }
}
@media (max-width:947px){
  flex:100%;
  width: 100%;
}
`;
const Text =styled.div`
font-size: 25px;
    font-weight: 600;
    margin-bottom: 10px;
    span{
        color:green;
    }
    @media (max-width: 500px) {
   
   font-size: 19px;
}
`;