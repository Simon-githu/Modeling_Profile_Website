import React from 'react'
import styled from 'styled-components'
import { FaInstagram} from 'react-icons/fa'
import {SiGmail} from 'react-icons/si'
function Connect() {
    return (
    
    <ConnectSection  id="connect">
    <MaxWidth >
        <Title >Connect</Title>
        <ConnectContent >
            <ColumnLeft >
                <Text >Get in Touch</Text>
                <Paragraph>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos harum corporis fuga corrupti. Doloribus quis soluta nesciunt veritatis vitae nobis?</Paragraph>
            <Card>
            <CardContent>
                <ImgBx>
                    <img src="../images/mpho-9.jpeg" alt="Mpho Khosana"/>
                </ImgBx>
                <ContentBx>
                <h3>Mpho Khosana<br/><span>mphokhosana67@gmail.com<br/>068 229 3803</span></h3>     
                </ContentBx>
            </CardContent>
            <ul className="sci">
               <li  >
               <h3 style={{color:"#E1306C"}}>2.4k<br/><FaInstagram color="#E1306C"/></h3>
               </li>
              {/* <li >
               <h3 style={{color:"#4267B2"}}>1k<br/><FaFacebookF color="#4267B2"/></h3>
               </li>
               <li >
               <h3 style={{color:"#1DA1F2"}}>500<br/><FaTwitter color="#1DA1F2"/></h3>
               </li>*/}
               
           </ul>
            </Card>
            </ColumnLeft>
            <ColumnRight >
                {/* <Text>Message me</Text> */}
                <SocialContainer data-aos="fade-up">
               
               <InstagramLink href="https:www.instagram.com/mpho_longstar"><FaInstagram size="40%" /></InstagramLink>
               {/*<FacebookLink href="#"><FaFacebookF size="40%"/></FacebookLink>*/}
               {/* <WhatsappLink href="#"><FaWhatsapp size="40%"/></WhatsappLink> */}
               <MailLink href="mailto:mphokhosana67@gmail.com"><SiGmail size="40%"/></MailLink>
               </SocialContainer>
               <ImageCard>
               <ImageCardContent>
                <ImgCardBx>
                    <img src="../images/mpho-9.jpeg" alt="Mpho Khosana"/>
                </ImgCardBx>
                </ImageCardContent>
            </ImageCard>
                          </ColumnRight>
        </ConnectContent>
    </MaxWidth>
</ConnectSection>

    )
}

export default Connect
const ConnectSection=styled.div`
 padding: 100px 0;
 font-family: 'Poppins', sans-serif;
 background: #fff;

`;
const CardContent =styled.div`
display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
      flex-direction: column;
      opacity: 0.5;
      transition: 0.5s;
    
`;
const ImageCardContent =styled.div`
display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
      flex-direction: column;
      opacity: 0.5;
      transition: 0.5s;
    
`;
const Card = styled.div`
position: relative;
    width: 300px;
    height: 400px;
    background:rgba(255,255,255,0.05);
    margin: 20px;
    box-shadow: 0 15px 35px rgba(0,0,0,0.2);
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
  backdrop-filter: blur(10px);
  ul{
    position: absolute;
    bottom: 50px;
    display: flex;
    overflow: hidden;
    li{
        list-style: none;
  margin: 0 10px;
   transform: translateY(40px); 
   transition: 0.5s;
   opacity: 0;
   transition-delay: calc(0.1s * var(--i));
   
    }
  }
  @media screen and (device-width: 768px) and (device-height: 1024px){
  left: 160px;
}
@media screen and (device-width: 540px) and (device-height: 720px){
  
  left:80px
}
@media screen and (device-width: 280px) and (device-height: 653px){
width:230px;
  right:18px;
  
}
@media screen and (device-width: 320px) and (device-height: 568px){
  width:260px;
  right:13px
}
@media screen and (device-width: 411px) and (device-height: 823px){
left:10px ;
}
@media screen and (device-width: 411px) and (device-height: 731px){
left:11px
}
@media screen and (device-width: 360px) and (device-height: 640px){
right:13px ;
}
  &:hover{
      li{
        transform: translateY(0px);  
    opacity: 1;
    margin-top:100rem
      }
      ${CardContent}{
    opacity: 1;
    transform: translateY(-20px);
  }
  }
  
`;
const ImageCard = styled.div`
position: relative;
    width: 500px;
    height: 400px;
    background:rgba(255,255,255,0.05);
    margin: 20px;
    box-shadow: 0 15px 35px rgba(0,0,0,0.2);
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
  backdrop-filter: blur(10px);
  @media(max-width:947px){
    position: relative;
    width:300px;
    box-shadow:none
    
}
@media(max-width:500px){
    position: relative;
    width:330px;
    box-shadow:none
    
}
@media(max-width:400px){
    position: relative;
    width:230px;
    box-shadow:none   
}
@media screen and (device-width: 320px) and (device-height: 568px){
  width:270px;
  right:18px
}
@media screen and (device-width: 375px) and (device-height: 667px){
  width:299px;
}
@media screen and (device-width: 375px) and (device-height: 812px){
  width:290px;
}
@media screen and (device-width: 768px) and (device-height: 1024px){
  width:600px;
}
@media screen and (device-width: 540px) and (device-height: 720px){
  width:450px;
  
}
@media screen and (device-width: 280px) and (device-height: 653px){
  width:235px;
  right: 20px;
}
@media screen and (device-width: 1024px) and (device-height: 1366px){
width: 380px;
}
@media screen and (device-width: 360px) and (device-height: 640px){
width:280px
}
  &:hover{
      li{
        transform: translateY(0px);  
    opacity: 1;
    margin-top:100rem
      }
      ${ImageCardContent}{
    opacity: 1;
    
  }
  }
 
`;

const ImgBx = styled.div`
  position: relative;
    width: 150px ;
    height: 150px;
    border-radius: 50%;
    overflow: hidden;
    border:10px solid #cd853f;
    img{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    
    }
    
`;
const ImgCardBx = styled.div`
  position: relative;
    width: 500px ;
    height: 400px;
    overflow: hidden;
    
    img{
        border-radius:15px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    
    }
    
`;

const ContentBx = styled.div`
h3{
    color: #000;
   text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 18px;
  font-weight: 500;
  text-align: center;
margin: 10px 0 50px;
line-height: 1.1em;
span{
    font-size: 12px;
    font-weight: 300;
    text-transform: initial;
    margin-bottom:50px;
    
}
}
`;
const SocialContainer =styled.div`
  
    display:flex;
    padding-right:2rem;
    width:400px;
    @media screen and (device-width: 280px) and (device-height: 653px){
  width: 250px;

}
@media screen and (device-width: 320px) and (device-height: 568px){
  width:300px;

}
@media screen and (device-width: 375px) and (device-height: 812px){
  width:350px;
}
@media screen and (device-width: 1024px) and (device-height: 1366px){
  position: relative;
  left:25px;
}
@media screen and (device-width: 540px) and (device-height: 720px){
  position: relative;
  left:55px;
   
   }
   @media screen and (device-width: 375px) and (device-height: 667px){
        width:360px
}
@media screen and (device-width: 411px) and (device-height: 823px){
  width:380px;
  left:10px; 
   position: relative;
}
@media screen and (device-width: 411px) and (device-height: 731px){
width: 395px;
}
@media screen and (device-width: 360px) and (device-height: 640px){
width:340px
}
@media screen and (device-width: 768px) and (device-height: 1024px){
  left: 130px;
  position: relative;
}
`;
const InstagramLink = styled.a`
color: transparent;
display:inline-block;
transition:0.5s;
border-radius:10px;
display:flex;
justify-content:center;
align-items:center;
text-decoration:none;
font-size:2rem;
border:1px solid rgba(255,255,255,0.4);
border-right:1px solid rgba(255,255,255,0.2);
border-bottom:1px solid rgba(255,255,255,0.2);
box-shadow:0 5px 45px  rgba(0,0,0,0.1);
backdrop-filter:blur(2px);
overflow:hidden;
margin:0px 15px;


@media screen and (max-width:947px){
      color:#E1306C
}
@media screen and (device-width: 280px) and (device-height: 653px){
  border: 1px solid #E1306C;
  box-shadow:none;
}
@media screen and (device-width: 540px) and (device-height: 720px){
  border: 1px solid #E1306C;
  box-shadow:none;
   
   }
   @media screen and (device-width: 1024px) and (device-height: 1366px){
    border: 1px solid #E1306C;
  box-shadow:none;
  color:#E1306C
   }
   @media screen and (device-width: 320px) and (device-height: 568px){
    border: 1px solid #E1306C;
  box-shadow:none;
  color:#E1306C
}
   @media screen and (device-width: 375px) and (device-height: 812px){
    border: 1px solid #E1306C;
  box-shadow:none;
  color:#E1306C
}
@media screen and (device-width: 414px) and (device-height: 736px){
  border: 1px solid #E1306C;
  box-shadow:none;
  color:#E1306C
}
@media screen and (device-width: 375px) and (device-height: 667px){
  border: 1px solid #E1306C;
  box-shadow:none;
  color:#E1306C
}
@media screen and (device-width: 411px) and (device-height: 823px){
    border: 1px solid #E1306C;
  box-shadow:none;
  color:#E1306C
}
@media screen and (device-width: 411px) and (device-height: 731px){
  border: 1px solid #E1306C;
  box-shadow:none;
  color:#E1306C
}
@media screen and (device-width: 360px) and (device-height: 640px){
  border: 1px solid #E1306C;
  box-shadow:none;
  color:#E1306C
}
@media screen and (device-width: 768px) and (device-height: 1024px){
  border: 1px solid #E1306C;
  box-shadow:none;
  color:#E1306C
}
&:hover{

color: #E1306C;
&::before{
  transform:skewX(45deg)translate(-150px);  transform:skewX(45deg)translate(-150px);
}

}

&::before{
content:'';
position:absolute;
top:0;
left:0;
width:50px;
height:100%;
background: #E1306C;
transform:skewX(45deg)translate(150px);
transition:0.5s;
}
`;
// const WhatsappLink = styled.a`


// color: transparent;
// display:inline-block;
// transition:0.5s;
// border-radius:10px;
// display:flex;
// justify-content:center;
// align-items:center;
// text-decoration:none;
// font-size:2rem;
// border:1px solid rgba(255,255,255,0.4);
// border-right:1px solid rgba(255,255,255,0.2);
// border-bottom:1px solid rgba(255,255,255,0.2);
// box-shadow:0 5px 45px  rgba(0,0,0,0.1);
// backdrop-filter:blur(2px);
// overflow:hidden;
// margin:0px 15px;
// ;

// @media screen and (max-width:768px){
//        color:green;
       
// }
// &:hover{
// transform:translateY(-20px);
// color: green;
// &::before{
//   transform:skewX(45deg)translate(-150px);
// }

// }

// &::before{
// content:'';
// position:absolute;
// top:0;
// left:0;
// width:50px;
// height:100%;
// background: green;
// transform:skewX(45deg)translate(150px);
// transition:0.5s;
// }


// `;
const MailLink = styled.a`


color: transparent;
display:inline-block;
transition:0.5s;
border-radius:10px;
display:flex;
justify-content:center;
align-items:center;
text-decoration:none;
font-size:2rem;
border:1px solid rgba(255,255,255,0.4);
border-right:1px solid rgba(255,255,255,0.2);
border-bottom:1px solid rgba(255,255,255,0.2);
box-shadow:0 5px 45px  rgba(0,0,0,0.1);
backdrop-filter:blur(2px);
overflow:hidden
;
@media screen and (max-width:768px){
       color:lightblue;

}  
@media screen and (device-width: 280px) and (device-height: 653px){
  border: 1px solid lightblue;
  box-shadow:none;   
}
@media screen and (device-width: 540px) and (device-height: 720px){
  border: 1px solid lightblue;
  box-shadow:none;
   
   }
   @media screen and (device-width: 1024px) and (device-height: 1366px){
    border: 1px solid lightblue;
  box-shadow:none;
  color:lightblue;
   }
   @media screen and (device-width: 375px) and (device-height: 812px){
    border: 1px solid lightblue;
  box-shadow:none;
  color:lightblue
}
@media screen and (device-width: 414px) and (device-height: 736px){
  border: 1px solid lightblue;
  box-shadow:none;
  color:lightblue
}
@media screen and (device-width: 375px) and (device-height: 667px){
  border: 1px solid lightblue;
  box-shadow:none;
  color:lightblue
}
@media screen and (device-width: 320px) and (device-height: 568px){
    border: 1px solid lightblue;
  box-shadow:none;
  color:lightblue
}
@media screen and (device-width: 411px) and (device-height: 823px){
    border: 1px solid lightblue;
  box-shadow:none;
  color:lightblue
}
@media screen and (device-width: 411px) and (device-height: 731px){
  border: 1px solid lightblue;
  box-shadow:none;
  color:lightblue
}
@media screen and (device-width: 360px) and (device-height: 640px){
  border: 1px solid lightblue;
  box-shadow:none;
  color:lightblue
}
@media screen and (device-width: 768px) and (device-height: 1024px){
  border: 1px solid lightblue;
  box-shadow:none;
  color:lightblue
}
&:hover{

color: skyblue;
&::before{
  transform:skewX(45deg)translate(-150px);
}

}

&::before{
content:'';
position:absolute;
top:0;
left:0;
width:50px;
height:100%;
background: lightblue;
transform:skewX(45deg)translate(150px);
transition:0.5s;
}

`;



const MaxWidth=styled.div`
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
const Title =styled.h2`
position: relative;
    text-align: center;
    font-size: 40px;
    font-weight: 500;
    margin-bottom: 60px;
    padding-bottom: 20px;
    font-family: 'Ubuntu', sans-serif;
    overflow-y: hidden;
    &::before{
    content: "";
    position: absolute;
    bottom: 8px;
    left: 50%;
    width: 140px;
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
    content: "with me";
}
`;
const ConnectContent=styled.div`
 display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
  
`;



const ColumnRight =styled.div`
width: calc(50% - 30px);
@media (max-width:947px){
    width: 100%;
        margin-bottom: 35px;
 }
`;
const ColumnLeft =styled.div`
width: calc(50% - 30px);
@media (max-width:947px){
    width: 100%;
        margin-bottom: 35px;
 }
`;

const Text =styled.div`
 font-size: 20px;
    font-weight: 600;
    margin-bottom: 10px;
`;

const Paragraph =styled.p`
text-align: justify;
`;