import "./contact.css"

const Contact = () => {
  return (
    <section className="contact">
      <div className="faqTitle text-center mt-5 pb-4">
         <span>আমাদের সাথে যোগাযোগের মাধ্যম</span> 
         </div>
        <div className="container">
        <div className="row mt-2 pb-5">
          <div className="left-form col-md-12 col-lg-6 col-sm-12">
            <div className="row gap-4 mb-4 contactRow">

              <div className="sub-form col-md-5 col-sm-12">
                <i className="fa-solid fa-location-dot"></i>
                <h3>ঠিকানা</h3>
                <p>
                  মাগুরা পুলিশ লাইন,মাগুরা
                </p>
              </div>
              <div className="sub-form col-md-5 col-sm-12">
                <i className="fa-solid fa-phone"></i>
                <h3>ফোন করো</h3>
                <p>
                  016*********
                </p>
                <p>
                  018*********
                </p>
              </div>
          </div>
            <div className="row gap-4 contactRow">

              <div className="sub-form col-md-5 col-sm-12">
                <i className="fa-solid fa-envelope"></i>
                <h3>ইমেইল করো</h3>
                <p>
                  ictshikkha@gmail.com
                </p>
                <p>
                  anneshon@gmail.com
                </p>
              </div>
              <div className="sub-form col-md-5 col-sm-12">
                <i className="fa-regular fa-clock"></i>
                <h3>অফিস টাইম</h3>
                <p>
                  শনিবার - বৃহস্পতিবার
                </p>
                <p>
                  সকাল ৮-৯ টা, বিকেল ৩-৬ টা
                </p>
              </div>
          </div>
        </div>
          <div className="left-form col-md-12 col-lg-6 col-sm-12">
            <div className="row gy-4">
              <div className="col-md-6">
                  <input type="text"className="form-control" placeholder="নাম"/> 
                  
              </div>
              <div className="col-md-6 ">
                  <input type="email" className="form-control"placeholder="ইমেইল" />
                
              </div>
              <div className="col-md-12">
                  <input type="text" className="form-control" placeholder="মোবাইল নাম্বার"/>
                  
              </div>
              <div className="col-md-12">
                  <textarea className="form-control" rows="7" placeholder="মন্তব্য লিখুন ......"></textarea>
                  
              </div>
              <div className="col-md-12 text-center">
              <a href="/" className='fs-5 sendBtn  d-flex justify-content-around align-items-center gap-2 course'>মেসেজ সেন্ড করুন <i class="fa fa-arrow-right "></i></a>
              </div>
          </div>
          </div>
        
      </div>
    </div>
    </section>
  )
}

export default Contact