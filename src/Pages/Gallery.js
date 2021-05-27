import React from 'react'
import styled from 'styled-components'
import Carousel from 'react-elastic-carousel';
import { GalleryImage } from '../data/GellaryImages';
function Gallery() {
    const breakPoints=[
        {width:500,itemsToShow:1},
        {width:768,itemsToShow:3},
      
    ];
    return (
        
    <GallerySection  id="gallery">
    <MaxWidth >
        <Title class="title">My Gallery</Title>
        <Carousel 
        showArrows="true"
        autoPlaySpeed={8000}
       enableAutoPlay={true}

        breakPoints={breakPoints}>
        {GalleryImage.map((img,index)=>(
            <Card >
                <Box >
                    <Image src={img.Image} alt=""/>
                </Box>
            </Card>
        ))}
        </Carousel>
    </MaxWidth>
</GallerySection>


    )
}

export default Gallery
const GallerySection =styled.div`
  padding: 100px 0;
  font-family: 'Poppins', sans-serif;
  background: #111;
  color: #fff;
 
  .rec.rec-arrow {
    border-radius: 0;
    color: #cd853f;
    background:#111;
  
}
.rec.rec-arrow:hover {
    border-radius: 50%;
   background:#cd853f;
   color:#000
}
/* hide disabled buttons */
.rec.rec-arrow:disabled {
    visibility: hidden;
}
.rec.rec-dot {
visibility: hidden;
}
@media screen and (max-width: 947px) {
  .rec.rec-arrow {
    visibility: hidden;
}

}
@media screen and (device-width: 1024px) and (device-height: 1366px){
   .rec.rec-arrow{
       visibility: hidden;
   }
   
   }
  @media (max-width: 991px) {
width: 100%;

}
`;
const MaxWidth =styled.div`
    width: 100%;
    padding: 0 80px;
    margin: auto;
    @media (max-width: 991px) {

    padding: 0 ;

}

@media (max-width: 690px) {
    
    
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
    width: 180px;
    height: 3px;
    background: #fff;
    transform: translateX(-50%);
}
&::after{
    position: absolute;
    bottom: 0px;
    left: 50%;
    font-size: 20px;
    color: #cd853f;
    padding: 0 5px;
    background: #111;
    transform: translateX(-50%);
    content: "My Pictures";
}

`;
const Image =styled.img`
  height: 50;
    width: 100%;
    object-fit: cover;
    
    transition: all 0.3s ease;
    overflow: hidden;
`;
const Card = styled.div`
  background:rgba(255,255,255,0.05);
  box-shadow: 0 15px 35px rgba(0,0,0,0.2);
  backdrop-filter: blur(10px);
    border-radius: 6px;
    text-align: center;
    overflow: hidden;
    width:95%;
    transition: all 0.3s ease;
    &:hover{
        background: green;
    }
    &:hover ${Image}{
        border-color: #fff;
    }
`;
const Box =styled.div`
 display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    &:hover{
        transform: scale(1.05);
    }
`;

