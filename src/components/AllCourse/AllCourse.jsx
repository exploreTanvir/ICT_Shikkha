import "./AllCourse.css"

const AllCourse = () => {
  return (
    <section className="allCourse ">
        <div className="container">
        <div className="faqTitle text-center mt-5 mb-4">
         <span>আমাদের সকল কোর্সসমূহ</span> 
         </div>
            <div className="row">
            <div class="col-lg-4 col-md-12 py-4">
          <div class="card" id="card">
            <div>
             <div className="cardImg"></div>
             <div class="card-body">
             <h5 className="text-center">HSC ICT সম্পূর্ণ একাডেমিক অফলাইন কোর্স</h5>
              <h5 class="card-title my-3">৳ ৫০০০</h5>
              <div><a href="/course/ict" className='allCoursesBtn d-flex align-items-center fs-5 justify-content-center me-4'>বিস্তারিত দেখুন</a></div>
              <div class="desc mt-4">
                <div className="d-flex justify-content-between align-items-center">
                <p>
                  <i class="fa-solid fa-user-group me-2"></i>কোর্সটি করছেন ১০৪৫
                  জন
                </p>
                <p>
                  <i class="fa-regular fa-circle-play me-2"></i>২১৫ টি ভিডিও
                </p>
                </div>


                <div className="d-flex justify-content-between align-items-center">
                <p>
                  <i class="fa-solid fa-stopwatch me-2"></i>সময় লাগবে ৯৫ ঘন্টা
                </p>
                
                <p>
                  <i class="fa-solid fa-calendar-days me-2"></i>সময়সীমা ৩ মাস
                </p>
                </div>
              </div>
             </div>
            </div>
          </div>
        </div>
            <div class="col-lg-4 col-md-12 py-4">
          <div class="card" id="card">
            <div>
             <div className="cardImg2"></div>
             <div class="card-body">
             <h5 className="text-center">ফুল স্ট্যাক ওয়েব ডেভেলপমেন্ট</h5>
              <h5 class="card-title my-3">৳ ৪০০০</h5>
              <div><a href="/course/ict" className='allCoursesBtn d-flex align-items-center fs-5 justify-content-center me-4'>বিস্তারিত দেখুন</a></div>
              <div class="desc mt-4">
                <div className="d-flex justify-content-between align-items-center">
                <p>
                  <i class="fa-solid fa-user-group me-2"></i>কোর্সটি করছেন ৫০৬
                  জন
                </p>
                <p>
                  <i class="fa-regular fa-circle-play me-2"></i>১১৫ টি ভিডিও
                </p>
                </div>


                <div className="d-flex justify-content-between align-items-center">
                <p>
                  <i class="fa-solid fa-stopwatch me-2"></i>সময় লাগবে ৬৫ ঘন্টা
                </p>
                
                <p>
                  <i class="fa-solid fa-calendar-days me-2"></i>সময়সীমা ৪ মাস
                </p>
                </div>
              </div>
             </div>
            </div>
          </div>
        </div>
            <div class="col-lg-4 col-md-12 py-4">
          <div class="card" id="card">
            <div>
             <div className="cardImg3"></div>
             <div class="card-body">
             <h5 className="text-center">কম্পিউটার বেসিক ট্রাইনিং</h5>
              <h5 class="card-title my-3">৳ ৩০০০</h5>
              <div><a href="/course/ict" className='allCoursesBtn d-flex align-items-center fs-5 justify-content-center me-4'>বিস্তারিত দেখুন</a></div>
              <div class="desc mt-4">
                <div className="d-flex justify-content-between align-items-center">
                <p>
                  <i class="fa-solid fa-user-group me-2"></i>কোর্সটি করছেন ২০৯
                  জন
                </p>
                <p>
                  <i class="fa-regular fa-circle-play me-2"></i>১০১ টি ভিডিও
                </p>
                </div>


                <div className="d-flex justify-content-between align-items-center">
                <p>
                  <i class="fa-solid fa-stopwatch me-2"></i>সময় লাগবে ৫৫ ঘন্টা
                </p>
                
                <p>
                  <i class="fa-solid fa-calendar-days me-2"></i>সময়সীমা ৩ মাস
                </p>
                </div>
              </div>
             </div>
            </div>
          </div>
        </div>
            </div>
        </div>
        <a href="/course"><div className='topArrow'><i class="fa-solid fa-arrow-up"></i></div></a>
    </section>
  )
}

export default AllCourse