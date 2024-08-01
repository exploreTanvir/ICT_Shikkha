import jsVdo from "../../assets/js-13.mp4"
import "./course.css"

const Course = () => {
  return (
    <section className="course py-5">
         <div className="faqTitle text-center mt-5 mb-4">
         <span>কোর্স সম্পর্কে বিস্তারিত</span> 
         </div>
     
    <div className="container">
    
      <div className="row">
        <div className="col-lg-8">
          
          <div className="course">
            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header rounded-3" id="faqOne">
                  <button
                    className="accordion-button collapsed faqbtn"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    <b>কোর্সের জন্য কি পূর্ববর্তী কোনো অভিজ্ঞতা প্রয়োজন?</b>
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="faqOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <ul type="square">
                    <li>
                      জাভাস্ক্রিপ্ট একটি জনপ্রিয় প্রোগ্রামিং ভাষা যা ওয়েব ডেভেলপমেন্টে ব্যবহৃত হয়। জাভাস্ক্রিপ্ট কোর্স করার জন্য কিছু প্রাথমিক পূর্বশর্ত রয়েছে যা আপনার শেখার অভিজ্ঞতাকে আরও সহজ এবং কার্যকর করতে সাহায্য করবে। নিচে জাভাস্ক্রিপ্ট শেখার জন্য প্রয়োজনীয় কিছু পূর্বশর্তের তালিকা দেওয়া হলো:
                      <ul>
                        <li>HTML এবং CSS এর মৌলিক ধারণা।</li>
                        <li> লজিক্যাল চিন্তা ও সমস্যা সমাধানের দক্ষতা।</li>
                        <li> মৌলিক প্রোগ্রামিং ধারণা।</li>
                        <li>কম্পিউটার এবং ইন্টারনেট ব্যবহারের দক্ষতা।</li>
                        <li>অনলাইনে শেখার ইচ্ছা ও ধৈর্য।</li>
                      </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header rounded-3" id="faqTwo">
                  <button
                    className="accordion-button collapsed faqbtn"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="true"
                    aria-controls="collapseTwo"
                  >
                    <b>কোর্সটি যাদের জন্য:</b>
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="faqTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <ul type="square">
                    <li>
                        যারা পড়াশোনার পাশাপাশি নিজের স্কিল ডেভেলপ করতে চান।
                      </li>
                      <li>
                        যারা ওয়েব ডিজাইন/ডেভেলপমেন্ট শিখে ফ্রিলান্স
                        মার্কেটপ্লেসে কাজ করতে চান।
                      </li>
                      <li>
                        যারা বিভিন্ন কোম্পানির ওয়েব ডিজাইন/ডেভেলপমেন্ট রিলেটেড
                        ফিক্সড জব করতে চান।
                      </li>
                      
                    </ul>
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header rounded-3" id="faqThree">
                  <button
                    className="accordion-button collapsed faqbtn"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="true"
                    aria-controls="collapseThree"
                  >
                    <b>কোর্স শেষ করতে যদি সমস্যা হয়, তাহলে কী করা উচিত?</b>
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="faqThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <ul type="square">
                      <li>
                      যদি কোর্স শেষ করতে কোনো সমস্যায় পড়েন, আপনি আমাদের সহায়ক দলের সাথে যোগাযোগ করতে পারেন। এছাড়াও, ফোরামে অন্যান্য শিক্ষার্থীদের সাথে আপনার সমস্যাগুলো আলোচনা করতে পারেন। আমাদের শিক্ষকরাও আপনার জন্য সহায়ক হতে পারেন।
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header rounded-3" id="faqFour">
                  <button
                    className="accordion-button collapsed faqbtn"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="true"
                    aria-controls="collapseFour"
                  >
                    <b> কোর্সের সময় অনলাইন পরীক্ষার জন্য প্রস্তুতি কিভাবে নিব?</b>
                  </button>
                </h2>
                <div
                  id="collapseFour"
                  className="accordion-collapse collapse"
                  aria-labelledby="faqFour"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <ul type="square">
                    <p>অনলাইন পরীক্ষার জন্য প্রস্তুতি নেওয়ার জন্য:</p>
        <ul>
          <li>প্রতিটি মডিউল মনোযোগ দিয়ে পড়ুন।</li>
          <li>প্র্যাকটিস কুইজগুলো সমাধান করুন।</li>
          <li>ইনস্ট্রাক্টরের সাথে আপনার প্রশ্নগুলি আলোচনা করুন।</li>
          <li>পূর্ববর্তী প্রশ্নপত্র এবং নমুনা প্রশ্নপত্র দেখুন।</li>
        </ul>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header rounded-3" id="faqFive">
                  <button
                    className="accordion-button collapsed faqbtn"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFive"
                    aria-expanded="true"
                    aria-controls="collapseFive"
                  >
                    <b>কিভাবে আপনি ক্যারিয়ার গাইডেন্স পেতে পারেন?</b>
                  </button>
                </h2>
                <div
                  id="collapseFive"
                  className="accordion-collapse collapse"
                  aria-labelledby="faqFive"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <ul type="square">
                    আমরা আমাদের শিক্ষার্থীদের জন্য ক্যারিয়ার গাইডেন্স এবং পরামর্শ প্রদান করি। আপনি আমাদের ক্যারিয়ার সার্ভিস টিমের সাথে যোগাযোগ করতে পারেন অথবা লাইভ ওয়েবিনারে অংশগ্রহণ করতে পারেন।
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-12">
          <div className="card" id="card">
            <div className="card-body">
              <video controls width="380px" src={jsVdo}>
                <source />
              </video>
              <h5 className="card-title my-3">৳ ৫০০০</h5>
              <div><a href="#" className='allCoursesBtn d-flex align-items-center fs-5 justify-content-center me-4'>এনরোল করুন</a></div>
              <div className="desc mt-4">
                <p>
                  <i className="fa-solid fa-user-group me-2"></i>কোর্সটি করছেন ১০৪৫
                  জন
                </p>
                <p>
                  <i className="fa-solid fa-stopwatch me-2"></i>সময় লাগবে ৯৫ ঘন্টা
                </p>
                <p>
                  <i className="fa-regular fa-circle-play me-2"></i>২১৫ টি ভিডিও
                </p>
                <p>
                  <i className="fa-solid fa-calendar-days me-2"></i>সময়সীমা ৩ মাস
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <a href="/course/ict"><div className='topArrow'><i className="fa-solid fa-arrow-up"></i></div></a>
  </section>
  )
}

export default Course