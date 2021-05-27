import React from 'react'
import styled from 'styled-components'
import Vid from '../images/mpho-vid.mp4'
function Feature() {
    return (
    
    <FeatureSection  id="feature">
    <MaxWidth>
    <Title>Mpho Khosana</Title>
    <Video src={Vid} autoPlay loop muted />
    </MaxWidth>
</FeatureSection>

    )
}

export default Feature
const FeatureSection = styled.div`
font-family: 'Poppins', sans-serif;


`;
const MaxWidth = styled.div`
 max-width: 1300px;
    padding: 0 80px;
    margin: auto;
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
const Video = styled.video`
object-fit: cover;
    width: 100%;
    z-index: -1;
    border-radius:300px;
   
`;

const Title = styled.h2`
 position: relative;
 top:20px;
 color: #cd853f;
    text-align: center;
    font-size: 30px;
    font-weight: bold;
    padding-bottom: 20px;
    font-family: 'Ubuntu', sans-serif;
    overflow-y: hidden;
    @media screen and (device-width: 280px) and (device-height: 653px){
    top:10px;
    }
    @media screen and (device-width: 375px) and (device-height: 812px){
        top:10px;
}

@media screen and (device-width: 414px) and (device-height: 736px){
        top:10px;
}
@media screen and (device-width: 375px) and (device-height: 667px){
        top:10px;
}
@media screen and (device-width: 320px) and (device-height: 568px){

top:10px
}
@media screen and (device-width: 411px) and (device-height: 731px){
top:10px
}
@media screen and (device-width: 360px) and (device-height: 640px){
top:10px
}
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
    content: "#Longstar";
}
`;

