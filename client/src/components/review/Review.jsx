import axios from 'axios';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "./Review.css";

import "./Review.css";


import { EffectCoverflow } from 'swiper/modules';
import swipIMG from "../../assets/157248-removebg-preview.png";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ReviewText } from './../ReviewText';

const Review = () => {
  const notify = () => toast("👌 সফলভাবে রিভিউ প্রেরন হয়েছে! শিঘ্রই আপনার রিভিউটি যুক্ত করা হবে! ");

  const [name, setName] = useState()
  const [message, setMessage] = useState()
  const [batch, setBatch] = useState()
//   const [data, setData] = useState([]);


//   useEffect(() => {
//     fetch("http://localhost:5000/api/auth/reviewText")
//         .then(res => res.json())
//         .then(data => setData(data))
//         .catch(err => console.log(err));
// }, []);



  const handleSubmit=(event)=>{
    event.preventDefault();
      axios.post("http://localhost:5000/api/auth/reviews",{name,message,batch})
      .then(res=>{
        console.log(res)
      })
      .catch(err=>{
        console.log(err)
      })
  }
  return (
    <>
    <div className="faqTitle text-center mt-5 mb-4 wow fadeInUp">
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
       <div key={index} className="testimonialBox">
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

    </section>
    <button
  type="button"
  className="btn reviewModal text-white w-100 my-2 fw-bold fs-4"
  data-bs-toggle="modal"
  data-bs-target="#exampleModal"
>
<i className="fa-solid fa-pen-to-square"></i>  রিভিউ যুক্ত করুন
</button>

<div
  className="modal fade"
  id="exampleModal"
  tabindex="-1"
  aria-labelledby="exampleModalLabel"
  aria-hidden="true"
>
 <div className="col-lg-12">
 <div
    className="reviewModalBox  modal-dialog modal-dialog-centered modal-dialog-scrollable"
  >
    <div className="modal-content ">
      <div className="modal-header">
        <button
          type="button"
          className="btn-close p-0"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>
      <div className="modal-body">
        <div className="row">
          <div className="col-md-12">
            <form onSubmit={handleSubmit} action="/POST" method="post" enctype="multipart/form-data" >
              <div className="mb-3">
                {/* <label for="name" className="form-label fw-bold"
                  >আপনার ছবি দিন :</label>
                <input type="file" name="" id="" /> */}
              </div>
              <div className="mb-3">
                <label for="name" className="form-label fw-bold"
                  >আপনার নাম :</label>
                  <input name='name' onChange={e=>setName(e.target.value)} className=' px-3 py-1 w-100 rounded border-1' type="text" placeholder='বাংলায় আপনার নাম লিখুন... ' />
              </div>

              <div className="mb-3">
                <label for="reviewText" className="form-label fw-bold">আপনার রিভিউ লিখুন : </label>
                <textarea
                name='title'
                onChange={e=>setMessage(e.target.value)}
                  className="form-control shadow-sm"
                  id="reviewText"
                  rows="4"
                  placeholder="বাংলায় রিভিউ লিখুন ..."
                ></textarea>
              </div>

              <div className="mb-3">
                <label for="rating" className="form-label fw-bold">আপনার ব্যাচ নং সিলেক্ট করুণ : </label>
                <select className="form-select" name='work' onChange={e=>setBatch(e.target.value)} id="rating">
                  <option value="ব্যাচ-১">ব্যাচ-১</option>
                  <option value="ব্যাচ-২">ব্যাচ-২</option>
                  <option value="ব্যাচ-৩">ব্যাচ-৩</option>
                </select>
              </div>

              <button type="submit" onClick={notify} className="btn btn-primary w-100">রিভিউ সাবমিট করুন</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
 </div>
 <ToastContainer
      position="bottom-right"
      autoClose={5000}
      closeOnClick
      rtl
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
</div>

   </>
  )
}

export default Review