import React, { useState } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import vr from '../../assets/vr.webp';
import "./Blog.css";
import { blogDetail, blogDetail2, blogDetail3 } from './BlogDetail';

const Blog = () => {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(true);
  };

  return (
    <section className='blog'>
      <div className="container">
        <div className="faqTitle text-center mt-2 mb-4">
          <span>আমাদের ব্লগ</span> 
        </div>
        <div className="row pt-3 pb-3">
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
          <div className="col-lg-5 blogImgs">
            {blogDetail3.map((item,index)=>{
              return(
                <div>

                  <Link to={item.url}>
                  <div className="col-lg-12 d-flex justify-content-center text-black gap-3 mb-2 align-items-center ms-4">
              <img className='w-50 blogmiddleImg' src={item.blogImg} alt="" />
              <div>
                <h6>{item.blogTitle}</h6>
                <p>{item.blogDesc}</p>
              </div>
            </div>
                  </Link>
            <hr />
                </div>
              )
            })}

          </div>

          <div className="col-lg-12 blogDetail d-flex gap-4 pt-3">
            
              
              {blogDetail.map((item,index)=>{
            return(
              <div className="col-lg-4">
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
                </div>
                )
              })}
             
            
           
          </div>

         
          {showMore && (
           <div>
             <div className="col-lg-12 blogDetail d-flex gap-4 py-4">
              
             {blogDetail2.map((item,index)=>{
            return(
              <div className="col-lg-4">
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
                    <p className='pb-0 text-black-50'><i class="fa-regular fa-calendar me-2"></i> {item.blogTime}</p>
                  </div>
                  </div>
                </div>
                </div>
              </Link>
                </div>
                )
              })}
             
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
