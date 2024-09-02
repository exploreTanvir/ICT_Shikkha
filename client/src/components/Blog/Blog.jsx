import React, { useState } from 'react';
import blogImg from '../../assets/blog2.webp';
import blogImg4 from '../../assets/How-to-Transform-Blog-Articles-into-Animated-Videos-in-X-Easy-Steps.jpg';
import { default as blogImg1, default as blogImg2 } from '../../assets/ict4.jpg';
import blogImg3 from '../../assets/postponed-concept_23-2148508247.avif';
import "./Blog.css";

const Blog = () => {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(true);
  };

  return (
    <section className='blog'>
      <div className="container">
        <div className="faqTitle text-center mt-2 mb-4">
          <span>আমাদের ব্লগসমূহ</span> 
        </div>
        <div className="row pt-3 pb-3">
          <div className="col-lg-7 d-flex gap-4">
            <div className="col-lg-12">
              <div className="card blogCard" id="card">
                <div className='cardImg blogimage'>
                  <img src={blogImg1} alt="" />
                </div>
                <div className='px-2 py-3'>
                  <h5 className='py-2'>ক্যারিয়ার গ্রোথ নিয়ে কিছু কথা</h5>
                  <p>ক্যারিয়ার গ্রোথ কি? ক্যারিয়ার গ্রোথ হল সেই প্রক্রিয়া - যার মাধ্যমে সময়ের সাথে সাথে কর্মক্ষেত্রে তোমার কাজের তুমি যেক্ষেত্রেই কাজ - বলো তো? যদি তোমার উত্তর হয়ক্যারিয়ার গ্রোথ কি? ক্যারিয়ার গ্রোথ হল সেই প্রক্রিয়া - যার মাধ্যমে সময়ের সাথে সাথে কর্মক্ষেত্রে তোমার কাজের তুমি যেক্ষেত্রেই কাজ - বলো তো? যদি তোমার উত্তর হয়ক্যারিয়ার গ্রোথ কি? ক্যারিয়ার গ্রোথ হল সেই প্রক্রিয়া - যার মাধ্যমে সময়ের সাথে সাথে কর্মক্ষেত্রে তোমার কাজের তুমি যেক্ষেত্রেই কাজ - বলো তো? যদি তোমার উত্তর হয়... </p>
                  <button className='fs-5 btn1 d-flex  justify-content-around align-items-center gap-2 course'>
                    আরও পড়ুন<i className="fa fa-arrow-right "></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 blogImgs">
            <div className="col-lg-12 d-flex justify-content-center gap-3 mb-2 align-items-center ms-4">
              <img className='w-50' src={blogImg} alt="" />
              <div>
                <h6>ক্যারিয়ার গ্রোথ কি? সেই প্রক্রিয়াক্যারিয়ার..</h6>
                <p>ক্যারিয়ার গ্রোথ কি? ক্যারিয়ার গ্রোথ হল সেই প্রক্রিয়া - যার মাধ্যমে সময়ের সাথে সাথে...</p>
              </div>
            </div>
            <hr />
            <div className="col-lg-12 d-flex justify-content-center gap-3 mb-2 align-items-center ms-4">
              <img className='w-50' src={blogImg2} alt="" />
              <div>
                <h6>ক্যারিয়ার গ্রোথ কি? সেই প্রক্রিয়াক্যারিয়ার..</h6>
                <p>ক্যারিয়ার গ্রোথ কি? ক্যারিয়ার গ্রোথ হল সেই প্রক্রিয়া - যার মাধ্যমে সময়ের সাথে সাথে...</p>
              </div>
            </div>
            <hr />
            <div className="col-lg-12 d-flex justify-content-center gap-3 mb-2 align-items-center ms-4">
              <img className='w-50' src={blogImg3} alt="" />
              <div>
                <h6>ক্যারিয়ার গ্রোথ কি? সেই প্রক্রিয়াক্যারিয়ার..</h6>
                <p>ক্যারিয়ার গ্রোথ কি? ক্যারিয়ার গ্রোথ হল সেই প্রক্রিয়া - যার মাধ্যমে সময়ের সাথে সাথে...</p>
              </div>
            </div>
            <hr />
            <div className="col-lg-12 d-flex justify-content-center gap-3 mb-2 align-items-center ms-4">
              <img className='w-50' src={blogImg4} alt="" />
              <div>
                <h6>ক্যারিয়ার গ্রোথ কি? সেই প্রক্রিয়াক্যারিয়ার..</h6>
                <p>ক্যারিয়ার গ্রোথ কি? ক্যারিয়ার গ্রোথ হল সেই প্রক্রিয়া - যার মাধ্যমে সময়ের সাথে সাথে...</p>
              </div>
            </div>
            <hr />
          </div>

          <div className="col-lg-12 blogDetail d-flex gap-4 pt-3">
            <div className="col-lg-4">
              <div className="card blogCard" id="card">
                <div className='cardImg'>
                  <img src={blogImg} alt="" />
                </div>
                <div className='px-2 py-3'>
                  <h5 className='py-2'>ক্যারিয়ার গ্রোথ নিয়ে কিছু কথা</h5>
                  <p>ক্যারিয়ার গ্রোথ কি? ক্যারিয়ার গ্রোথ হল সেই প্রক্রিয়া...</p>
                  <button className='fs-5 btn1 d-flex  justify-content-around align-items-center gap-2 course'>
                    আরও পড়ুন<i className="fa fa-arrow-right "></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card blogCard" id="card">
                <div className='cardImg blogImg'>
                  <img src={blogImg3} alt="" />
                </div>
                <div className='px-2 py-3'>
                  <h5 className='py-2'>ইংরেজিতে কমিউনেকেশনের দক্ষতা কি করে..</h5>
                  <p>আচ্ছা, তুমি যেক্ষেত্রেই কাজ করো না কেন...</p>
                  <button className='fs-5 btn1 d-flex  justify-content-around align-items-center gap-2 course'>
                    আরও পড়ুন<i className="fa fa-arrow-right "></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card blogCard" id="card">
                <div className='cardImg blogImg'>
                  <img src={blogImg4} alt="" />
                </div>
                <div className='px-2 py-3'>
                  <h5 className='py-2'>ইংরেজিতে কমিউনেকেশনের দক্ষতা কি করে..</h5>
                  <p>আচ্ছা, তুমি যেক্ষেত্রেই কাজ করো না কেন...</p>
                  <button className='fs-5 btn1 d-flex  justify-content-around align-items-center gap-2 course'>
                    আরও পড়ুন<i className="fa fa-arrow-right "></i>
                  </button>
                </div>
              </div>
            </div>
          </div>

         
          {showMore && (
           <div>
             <div className="col-lg-12 blogDetail d-flex gap-4 py-4">
              <div className="col-lg-4">
                <div className="card blogCard" id="card">
                  <div className='cardImg'>
                    <img src={blogImg} alt="" />
                  </div>
                  <div className='px-2 py-3'>
                    <h5 className='py-2'>ক্যারিয়ার গ্রোথ নিয়ে কিছু কথা</h5>
                    <p>ক্যারিয়ার গ্রোথ কি? ক্যারিয়ার গ্রোথ হল সেই প্রক্রিয়া...</p>
                    <button className='fs-5 btn1 d-flex  justify-content-around align-items-center gap-2 course'>
                      আরও পড়ুন<i className="fa fa-arrow-right "></i>
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card blogCard" id="card">
                  <div className='cardImg blogImg'>
                    <img src={blogImg3} alt="" />
                  </div>
                  <div className='px-2 py-3'>
                    <h5 className='py-2'>ইংরেজিতে কমিউনেকেশনের দক্ষতা কি করে..</h5>
                    <p>আচ্ছা, তুমি যেক্ষেত্রেই কাজ করো না কেন...</p>
                    <button className='fs-5 btn1 d-flex  justify-content-around align-items-center gap-2 course'>
                      আরও পড়ুন<i className="fa fa-arrow-right "></i>
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card blogCard" id="card">
                  <div className='cardImg blogImg'>
                    <img src={blogImg4} alt="" />
                  </div>
                  <div className='px-2 py-3'>
                    <h5 className='py-2'>ইংরেজিতে কমিউনেকেশনের দক্ষতা কি করে..</h5>
                    <p>আচ্ছা, তুমি যেক্ষেত্রেই কাজ করো না কেন...</p>
                    <button className='fs-5 btn1 d-flex  justify-content-around align-items-center gap-2 course'>
                      আরও পড়ুন<i className="fa fa-arrow-right "></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
             
           </div>
          )}
        </div>

        {!showMore && (
          <div className='d-flex justify-content-center'>
            <button onClick={handleShowMore} className='fs-5 mb-4 btn3 d-flex justify-content-around align-items-center gap-2 course'>
              আরও দেখুন<i className="fa-solid fa-chevron-down"></i>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Blog;
