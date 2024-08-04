import React from 'react';
import "./Review.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import "./Review.css";


// import required modules
import { EffectCoverflow } from 'swiper/modules';
import swipIMG from "../../assets/157248-removebg-preview.png";

import { ReviewText } from '../ReviewText';

const Review = () => {
  return (
    <>
    <div className="faqTitle text-center mt-5 mb-4">
         <span>আমাদের সম্পর্কে ছাত্রদের মন্তব্য</span> 
         </div>
    <section className="review">
      
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: true,
        }}
        loop={true}
        modules={[EffectCoverflow]}
      > 
      
{ReviewText.map((item,index)=>{
          return(
         <SwiperSlide>
       <div className="testimonialBox">
        <img src={swipIMG} className='testimonialImg' alt="" />
        
            <div className="content">
          <p>{item.title}</p>
          <div className="detail d-flex justify-content-between">
            <div className="imgBox">
              <img src={item.img} alt="" />
            </div>
          <div className="text-end">
          <h4>{item.name}</h4>
          <p>{item.work}</p>
          </div>

          </div>
        </div>
        
       </div>
        </SwiperSlide>
          )
        })}
       

       
       </Swiper>
    </section></>
  )
}

export default Review