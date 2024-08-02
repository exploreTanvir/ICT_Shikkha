import React from 'react';
import "./Review.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import "./Review.css";


// import required modules
import { EffectCoverflow } from 'swiper/modules';
import userImg from "../../assets/1000_F_315907715_vkJPxeMzlh59tE2k6DYxfN9ffYFQihGT.jpg";
import swipIMG from "../../assets/157248-removebg-preview.png";
const Review = () => {
  return (
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
        <SwiperSlide>
       <div className="testimonialBox">
        <img src={swipIMG} className='w-25' alt="" />
        <div className="content">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde animi ab, repudiandae vel iusto aspernatur asperiores optio maxime, quos vero quod voluptates distinctio magni eum.</p>
          <div className="detail">
            <div className="imgBox">
              <img src={userImg} alt="" />
              <h3>Someone Famous <br /><span>Creative Designer</span></h3>
            </div>
          </div>
        </div>
       </div>
        </SwiperSlide>
        <SwiperSlide>
       <div className="testimonialBox">
        <img src={swipIMG} className='w-25' alt="" />
        <div className="content">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde animi ab, repudiandae vel iusto aspernatur asperiores optio maxime, quos vero quod voluptates distinctio magni eum.</p>
          <div className="detail">
            <div className="imgBox">
              <img src={userImg} alt="" />
              <h3>Someone Famous <br /><span>Creative Designer</span></h3>
            </div>
          </div>
        </div>
       </div>
        </SwiperSlide>
        <SwiperSlide>
       <div className="testimonialBox">
        <img src={swipIMG} className='w-25' alt="" />
        <div className="content">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde animi ab, repudiandae vel iusto aspernatur asperiores optio maxime, quos vero quod voluptates distinctio magni eum.</p>
          <div className="detail">
            <div className="imgBox">
              <img src={userImg} alt="" />
              <h3>Someone Famous <br /><span>Creative Designer</span></h3>
            </div>
          </div>
        </div>
       </div>
        </SwiperSlide>
        <SwiperSlide>
       <div className="testimonialBox">
        <img src={swipIMG} className='w-25 quote' alt="" />
        <div className="content">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde animi ab, repudiandae vel iusto aspernatur asperiores optio maxime, quos vero quod voluptates distinctio magni eum.</p>
          <div className="detail">
            <div className="imgBox">
              <img src={userImg} alt="" />            
            </div>
            <h3>Someone Famous <br /><span>Creative Designer</span></h3>
          </div>
        </div>
       </div>
        </SwiperSlide>
        <SwiperSlide>
       <div className="testimonialBox">
        <img src={swipIMG} className='w-25' alt="" />
        <div className="content">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde animi ab, repudiandae vel iusto aspernatur asperiores optio maxime, quos vero quod voluptates distinctio magni eum.</p>
          <div className="detail">
            <div className="imgBox">
              <img src={userImg} alt="" />
              <h3>Someone Famous <br /><span>Creative Designer</span></h3>
            </div>
          </div>
        </div>
       </div>
        </SwiperSlide>

       
      </Swiper>

    </section>
  )
}

export default Review