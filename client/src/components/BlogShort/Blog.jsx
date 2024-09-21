import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { Swiper, SwiperSlide } from 'swiper/react';
import vr from '../../assets/vr.webp';
import "../Blog/Blog.css";
import "./BlogShort.css";

import { EffectCards } from 'swiper/modules';

const Blog = () => {

  const [data, setData] = useState([]);


  useEffect(() => {
    fetch("http://localhost:5000/api/auth/blogdetail")
        .then(res => res.json())
        .then(data => setData(data))
        .catch(err => console.log(err));
}, []);

  return (
    <section className='blog blogShort'>
      <div className="container">
        <div className="faqTitle text-center pt-5 mb-4">
          <span>আমাদের ব্লগ</span> 
        </div>
        <div className="row pt-3 pb-3 justify-content-around align-items-center">
          <div className="col-lg-7 d-flex gap-4 pb-3">
            <div className="col-lg-12">
              <Link to="/blog-detail/vr">
              <div className="card blogCard" id="card">
                <div className='cardImg blogimage'>
                  <img src={vr} alt="" />
                </div>
                <div className='px-2 py-3'>
                  <h5 className='py-2'>ভার্চুয়াল রিয়েলিটি (VR) এবং অগমেন্টেড রিয়েলিটি (AR): ভবিষ্যতের ইন্টার‌্যাক্টিভ অভিজ্ঞতা</h5>
                  <p>ভার্চুয়াল রিয়েলিটি (VR) এবং অগমেন্টেড রিয়েলিটি (AR) প্রযুক্তি বর্তমানে বিনোদন, শিক্ষা, এবং ব্যবসায়িক ক্ষেত্রে নতুন সম্ভাবনা সৃষ্টি করছে। VR সম্পূর্ণ একটি সিমুলেটেড পরিবেশ তৈরি করে যেখানে ব্যবহারকারী সম্পূর্ণভাবে অন্য একটি দুনিয়ায় প্রবেশ করতে পারেন, যেমন ভিডিও গেমস বা ভার্চুয়াল ট্যুর। অন্যদিকে, AR বাস্তব জগতের উপরে ডিজিটাল উপাদানগুলি যুক্ত করে, যেমন মোবাইল অ্যাপ্লিকেশন বা স্মার্ট গ্লাস। এই ব্লগ পোস্টে VR এবং AR এর মূল পার্থক্য, তাদের ব্যবহারিক প্রয়োগ এবং ভবিষ্যতের সম্ভাবনা নিয়ে আলোচনা করা যাবে... </p>
                  <div className='d-flex align-items-center justify-content-between'>
                  <button className='fs-5 btn1 d-flex  justify-content-around align-items-center gap-2 course'>
                    আরও পড়ুন<i className="fa fa-arrow-right "></i>
                  </button>
                  <div>
                    <p className='p-0 text-black-50'><i class="fa-regular fa-calendar"></i> ১৭ জুলাই ২০২৪</p>
                  </div>
                  </div>
                </div>
              </div></Link>
            </div>
          </div>
          <div className="col-lg-4 blogImgs">
          <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
       
        
        {data.map((item,index)=>{
          return(
            <SwiperSlide>
          <Link to={item.url}>
          <div className="card blogCard" id="card">
                <div className='cardImg'>
                <img src={item.blogImg} alt="" />
              </div>
              <div className='px-2 py-3'>
                <h5 className='py-2'>{item.blogTitle}</h5>
                <p>{item.blogDesc}</p>
                <div className='d-flex align-items-center justify-content-between'>
                <button className='fs-5 btn1 d-flex  justify-content-around align-items-center gap-2 course'>
                  আরও পড়ুন<i className="fa fa-arrow-right "></i>
                </button>
                <div>
                  <p className='p-0 text-black-50'><i class="fa-regular fa-calendar me-2"></i>{item.blogTime}</p>
                </div>
                </div>
              </div>
              </div>
          </Link>
              </SwiperSlide>
              )
            })}
      </Swiper>

          </div>

       

      
        </div>

  
      </div>
    </section>
  );
}

export default Blog;
