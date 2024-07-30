import "./footer.css"

const Footer = () => {
  return (
    <div>
        <section className='footer'>
        <div className="newsletter">
          <div className="container">
              <div className="row justify-content-center">
                  <div className="col-lg-12 text-center">
                      <h4>সাবস্ক্রাইব করো</h4>
                      <p>নতুন নতুন এক্সপার্ট টিপস পেতে তোমার ইমেইল দিয়ে এখনই সাবস্ক্রাইব করে ফেলো। </p>
                  </div>
                  <div className="col-lg-6">
                      <form ><input type="email" name="email" /><input className="ms-4 px-4 py-2" type="submit" value="সাবস্ক্রাইব"/></form>
                  </div>
              </div>
          </div>
      </div>
      <div className="footer-top">
          <div className="container">
              <div className="row gy-4">
                  <div className="col-lg-5 col-md-12 footer-info"><a className="logo d-flex align-items-center"><span className="footer-span">আইসিটি
                              এক্সপার্ট</span></a>
                      <p>তথ্য ও যোগাযোগ প্রযুক্তি বিষয়টিকে সবাই থিওরি বিষয় হিসেবে গণনা করে। কিন্তু এটি সম্পূর্ণ ব্যবহারিক ভিত্তিক একটি বিষয় তাই সকল শিক্ষার্থীর উচিত এই বিষয়টি পড়ার পাশাপাশি অবশ্যই কম্পিউটার স্কিল বাড়াতে হবে, না হয় বর্তমান যুগের সাথে তাল মিলিয়ে চলতে পারবেনা।</p>
                      <div className="social-links mt-3">
                          <a href="#" className="youtube"><i className="fa-brands fa-youtube"></i></a>
                          <a href="#" className="facebook"><i className="fa-brands fa-facebook"></i></a>
                      </div>
                  </div>
                  <div className="col-lg-2 col-6 footer-links">
                      <h4>প্রয়োজনীয় লিঙ্ক</h4>
                           <p> 
                            <i className="fa-solid fa-angle-right"></i>
                            <a href="#">হোমপেজ</a></p>
                          <p>
                               <i className="fa-solid fa-angle-right"></i>
                              <a href="#">ভিডিও লেকচার</a>
                          </p>
                          <p>
                               <i className="fa-solid fa-angle-right"></i>
                              <a href="#">লেকচার নোট</a>
                          </p>
                          <p>
                               <i className="fa-solid fa-angle-right"></i>
                              <a href="#">আইসিটি কুইজ</a>
                          </p>
                          <p>
                               <i className="fa-solid fa-angle-right"></i>
                              <a href="#">এক্সপার্ট ব্লগ</a>
                          </p>
                  </div>
                  <div className="col-lg-2 col-6 footer-links">
                      <h4>আমাদের কোর্সসমূহ</h4>
                      <div className="footer-links-ul">
                              <p>
                                   <i className="fa-solid fa-angle-right"></i>
                                  <a href="#">গ্রাফিক্স ডিজাইন</a>
                              </p>
                              <p>
                                   <i className="fa-solid fa-angle-right"></i>
                                  <a href="#">HSC ICT সম্পূর্ণ একাডেমিককোর্স ২০২৪-২৫</a>
                              </p>
                              <p>
                                   <i className="fa-solid fa-angle-right"></i>
                                  <a href="#">ওয়েব ডেভেলপমেন্ট (ASP.NET, SQL 2019)</a>
                              </p>
                              <p>
                                   <i className="fa-solid fa-angle-right"></i>
                                  <a href="#">মাইক্রোসফট অফিস প্রোগ্রাম</a>
                              </p>
                                                  </div>
                  </div>
                  <div className="col-lg-3 col-md-12 footer-contact text-center ">
                      <h4 className="cnt">যোগাযোগ</h4>
                      <p>Magura police Line,Magura</p>
                      <p><strong>ফোন: </strong>018*********</p>
                      <p className="my-0"><strong>ইমেইল: </strong>ictshikkha@gmail.com</p>
                  </div>
              </div>
          </div>
      </div>
    </section>
    </div>
  )
}

export default Footer