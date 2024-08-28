import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import logo from "../../assets/logo.png";
import "./footer.css";

const Footer = () => {
  return (
    <div>
        <section id="footer" className="text-white">
      <div className="container">
        <div className="row footerRow py-5 justify-content-around gap-md-5" >
          
          <div className="col-lg-4 col-md-5">
          <div className='d-flex footerTop align-items-center pt-1 gap-3  mt-4'>
          <img src={logo} alt="" className='footerLogo'  />
          <h4 >"বাংলাদেশে আইসিটি শিক্ষায়,<br />
          অন্যতম অনলাইন প্ল্যাটফর্ম"</h4>
                      

          </div>
            <p className="py-3">
            এইচএসসি আইসিটি বিষয়কে সবাই থিওরি সাবজেক্ট হিসেবে বিবেচনা করে। কিন্তু এটি একটি সম্পূর্ণ ব্যবহারিক বিষয় তাই সকল শিক্ষার্থীর এই বিষয় পড়া উচিত এবং তাদের কম্পিউটার দক্ষতা উন্নত করতে হবে, অন্যথায় তারা বর্তমান যুগের সাথে তাল মিলিয়ে চলতে পারবে না।
            </p>
            
            
          </div>

          <div className="col-lg-2 col-md-5 mt-4 ">
          <h4 className='fw-bold pt-1'>নীতিমালা</h4>
            <Link to="/terms&condition"><p className='mt-3'>টার্মস এবং শর্তাবলী</p></Link>
            <Link to="/privacy-policy"><p>প্রাইভেসি পলিসি</p></Link>
            <Link to="/refund"><p>রিফান্ড পলিসি</p></Link>
            <Link to="/contact"><p>সাপোর্ট</p></Link>
            
          </div>
          <div className="col-lg-2 col-md-5 mt-4 ">
          <h4 className='fw-bold pt-1'>কোর্সসমূহ</h4>
            <Link to="/"><p className='mt-3'>বেসিক কম্পিউটার প্রশিক্ষন</p></Link>
            <Link to="/contact"><p>
            HSC ICT সম্পূর্ণ একাডেমিক অফলাইন কোর্স 
            </p></Link>
            <Link to="/course"><p>ওয়েব ডেভেলপমেন্ট</p></Link>
          </div>
          <div className="col-lg-2 col-md-5  mt-4">
          <h4 className='fw-bold pt-1'>যোগাযোগ</h4>
          <p className='mt-3 d-flex align-items-center'>
              <i className="fa-location-dot fa-solid me-2"></i> মাগুরা পুলিশ লাইন, মাগুরা।
            </p>
            <p className='d-flex align-items-center'><i className="fa-phone fa-solid me-2"></i> +8801818301681</p>
            <p className='d-flex align-items-center'><i className="fa-solid fa-envelope me-2"></i>anneshon@gmail.com</p>
            <div className="lastIcon d-flex align-items-center gap-3 fs-5 ">
              <a href="#"><i className="fa-brands fa-facebook-f "></i></a>
              <a href="#"><i className="fa-brands fa-twitter "></i></a>
              <a href="#"><i className="fa-brands fa-linkedin "></i></a>
              <a href="#"><i className="fa-brands fa-youtube"></i></a>
              <a href="#"><i className="fa-brands fa-instagram"></i></a>
            </div>
            
          </div>


        </div>
      </div>
      <div className="copy text-white d-flex align-items-center justify-content-center fw-bold">
      <h6>Copyright © ICT-Shikkha. All Right Reserved. 2024</h6>
    </div>
    </section>
    
    </div>
  )
}

export default Footer