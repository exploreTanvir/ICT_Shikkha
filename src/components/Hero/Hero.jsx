import React from 'react'
import img1 from "../../assets/elements1.png"
import img2 from "../../assets/lite-icons1.svg"
import img3 from "../../assets/sound-icons1.svg"
import "./hero.css"

const Hero = () => {
  return (
   <section className="hero d-flex align-items-center ">
    <div className="container">
        <div className="row">
            <div className="col-lg-6 col-md-12 cont">
                <p className='title ms-1 text-end'>Online & Offline e-learning course</p>
                <h1 className='overflow-hidden py-2'>বাংলাদেশে আইসিটি শিক্ষায় <br />
                    অন্যতম অনলাইন প্ল্যাটফর্ম</h1>
                    <p className='desc fs-5 py-2'>আমাদের প্রতিষ্ঠান আইসিটি শিক্ষার ক্ষেত্রে অনলাইন ও অফলাইন শিক্ষাদান ও প্রশিক্ষণ প্রদানের জন্য অগ্রণী ভূমিকা পালন করছে। আমাদের মূল লক্ষ্য হলো শিক্ষার্থীদের তথ্যপ্রযুক্তির সর্বশেষ জ্ঞান ও দক্ষতা অর্জনে সহায়তা করা এবং তাদেরকে ভবিষ্যতের প্রযুক্তি-নির্ভর চাকরির বাজারের জন্য প্রস্তুত করা।</p>
                <div className='d-flex gap-4 fs-5 align-items-center'>
                    <p className='d-flex align-items-center gap-2'><i class="fa-regular fa-circle-check bg-black rounded-circle text-white"></i> Online</p>
                    <p className='d-flex align-items-center gap-2'><i class="fa-regular fa-circle-check bg-primary rounded-circle text-white"></i> Offline</p>
                    <p className='d-flex align-items-center gap-2'><i class="fa-regular fa-circle-check bg-danger rounded-circle text-white"></i> MentorShip</p>
                </div>
                <div className="btn-group mt-3">
                    <a href="/" className='btn gap-2 p-3 d-flex align-items-center fs-5 course me-4 rounded'>আমাদের গ্রুপে যুক্ত হোন <i class="fa fa-arrow-right"></i></a>
                    <a href="/" className='btn gap-2 d-flex align-items-center p-3 fs-5 fbGrpBtn rounded'>আমাদের কোর্সসমূহ <i class="fa fa-arrow-right "></i></a>
                </div>
            </div>
        </div>
    </div>
    <div className="img1 animated1"><img src={img1} alt="" /></div>
    <div className="img2 animated2"><img src={img2} alt="" /></div>
    <div className="img3 animated3"><img className='w-75' src={img3} alt="" /></div>
   </section>
  )
}

export default Hero