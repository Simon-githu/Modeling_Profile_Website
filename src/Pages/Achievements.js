import React from 'react'
import styled from 'styled-components'
import {FaYoutube} from 'react-icons/fa'

function Achievements() {

    return (    
<AchievementsSection  id="achievements">
    <MaxWidth >
        <Title >My Achievements</Title>
        <AchievementsContent >
        {/* onMouseEnter={()=>setFaYoutubeColor('#fff')} onMouseLeave={()=>setFaYoutubeColor('green')} */}
           <Link href="https://youtu.be/zaBY5LT-4Fg"> 
           <Card >
                <CardBox >
                    
                    <CardText class="text" >G<span>Q</span><p>Best Dressed Men</p></CardText>
                    <Paragraph>Mpho Khosana GQ award winner of the Best Dressed Men</Paragraph>
                    <Youtube/>
                </CardBox>
            </Card>
            </Link>
            {/* <Card  onMouseEnter={()=>setFaMobileColor('#fff')} onMouseLeave={()=>setFaMobileColor('green')}>
                <CardBox >
                   <FaMobile
                      style={FaMobileStyle} 
                   />
                    <CardText class="text">Mobile Development</CardText>
                    <p>I develop mobile applications using React Native and currently i am to learn Ionic.</p>
                </CardBox>
            </Card> */}
            
           </AchievementsContent>
        </MaxWidth>
</AchievementsSection>
    )
}

export default Achievements
const AchievementsSection =styled.section`
 display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    font-family: 'Poppins', sans-serif;
    background: #111;
    color: #fff;
    padding: 100px 0;
  
`;
const MaxWidth =styled.div`
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
const Link = styled.a`
width: 100%;
height: 100%;
color:#fff
`;
const Title =styled.h2`
 position: relative;
    text-align: center;
    font-size: 40px;
    font-weight: 500;
    margin-bottom: 60px;
    padding-bottom: 20px;
    font-family: 'Ubuntu', sans-serif;
    color:#fff;
   overflow: hidden;
   @media screen and (device-width: 280px) and (device-height: 653px){
    font-size: 29px;
   
   }
   @media screen and (device-width: 320px) and (device-height: 568px){

font-size: 34px;
}
&::before{
    content: "";
    position: absolute;
    bottom: 8px;
    left: 50%;
    width: 200px;
    height: 3px;
    background: #fff;
    transform: translateX(-50%);
}
&::after{
    position: absolute;
    bottom: 0px;
    left: 50%;
    font-size: 18px;
    color: #cd853f;
    padding: 0 5px;
    background: #111;
    transform: translateX(-50%);
    content: "what i've achieved";
    @media screen and (device-width: 280px) and (device-height: 653px){
    font-size: 13px;
   
   }
   @media screen and (device-width: 320px) and (device-height: 568px){

    font-size: 15px;
   }
}
`;
const AchievementsContent =styled.div`
display: flex;
    flex-wrap: wrap;
    align-items: center;
justify-content:center;

    flex:1;
    
    `;
const CardBox=styled.div`
flex:1;
 transition: all 0.3s ease;
 overflow: hidden;
`;
const Paragraph =styled.p`
font-size: 8px;
position: relative;
right:20px;
@media screen and (device-width: 280px) and (device-height: 653px){
    right:11px;
    bottom:5px
   
   }
`;
const Youtube =styled(FaYoutube)`
  color:red;
        font-size:50px;
        transition: all 0.3s ease;
        position: relative;
        right: 30px;
        top:9px;
        @media screen and (device-width: 280px) and (device-height: 653px){
   top:5px
   
   }
`;
const Card=styled.div`
    width: 100%;
    height:100%;
    object-fit: cover;
    background: url("../images/mpho-12.jpeg") center / cover;
    text-align: center;
    border-radius: 6px;
    padding: 25px 25px;
    cursor: pointer;
    transition: all 0.3s ease;
    margin-right:10px;
    @media screen and (device-width: 280px) and (device-height: 653px){
   youtube{
       font-size: 1px;
   }
   @media screen and (device-width: 768px) and (device-height: 1024px){
   background-size:100%
   }
   }
  
&:hover{
    background: #cd853f;
${CardBox}{
    transform: scale(1.05);
}
}
&:hover ${CardBox}{
    transition: all 0.3s ease;
    
}
@media(max-width:947px){
    width: calc(50% - 10px);
        margin-bottom: 20px;
        
}
@media (max-width: 690px) {
   width:100%;
}

`;

const CardText=styled.div`
 font-size: 25px;
 display:flex;
    font-weight: bold;
    margin: 10px 0 7px 0;
 
 
    span{
        color: red
    };
    p{
      
        font-size:14px
    }
`;




