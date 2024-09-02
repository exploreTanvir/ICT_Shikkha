import React, { useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import bkash from '../../assets/bkash.png';
import { AllCourseMenu } from "../AllCourse/AllCourseMenu";
import "./course.css";
import { courseDeta } from './CourseDetail';

const Course = () => {

  const { courseId } = useParams();
  const course = AllCourseMenu[courseId];


  const notify = () => toast("সফলভাবে প্রেরন হয়েছে! আমাদের সাপোর্ট টিম কিছু সময়ের মধ্যেই আপনার রিকুয়েস্টটি ভেরিফাই করবে। অনুগ্রহ করে অপেক্ষা করুণ ।");


  const handleCopyClick = () => {
    toast("👌সফলভাবে কপি হয়েছে ! ")
    const textToCopy = document.getElementById("copyText").innerText; 
    navigator.clipboard.writeText(textToCopy)
  };

  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState({
    accountType: "বিকাশ",
    accountNumber: "01721554216",
  });

  const updatePaymentInfo = (event) => {
    const selectedOption = event.target.options[event.target.selectedIndex];
    setSelectedPaymentMethod({
      accountType: selectedOption.text,
      accountNumber: selectedOption.getAttribute("data-account"),
    });
  };

  return (
    <section className="py-5">
      <div className="faqTitle text-center mb-4">
        <span>কোর্স সম্পর্কে বিস্তারিত</span>
      </div>

      <div className="container">
        <div className="row courseRow">
          <div className="col-lg-8 faqRight">
            <div className="accordion accordion-flush" id="accordionFlushExample">
              <div className="accordion-item">
                <h2 className="accordion-header rounded" id="panelsStayOpen-headingOne">
                  <button
                    className="accordion-button fs-5"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseOne"
                    aria-expanded="true"
                    aria-controls="panelsStayOpen-collapseOne"
                  >
                    কোর্সটি যাদের জন্য:
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="panelsStayOpen-headingOne"
                >
                  <div className="accordion-body">
                    <ul type="square">
                      <li>যারা পড়াশোনার পাশাপাশি নিজের স্কিল ডেভেলপ করতে চান।</li>
                      <li>যারা বিভিন্ন কোম্পানির ওয়েব ডিজাইন/ডেভেলপমেন্ট রিলেটেড ফিক্সড জব করতে চান।</li>
                      <li>যারা প্রযুক্তির প্রতি আগ্রহী এবং একটি সফল ক্যারিয়ার গড়তে চান।</li>
                      <li>যারা প্রোগ্রামিং ভাষায় দক্ষতা অর্জন করতে চান এবং সফটওয়্যার ডেভেলপমেন্টের পথে এগোতে চান।</li>
                      <li>যারা এক্সপার্ট টিউটর থেকে সরাসরি শেখার মাধ্যমে দ্রুত প্রফেশনাল স্কিল অর্জন করতে চান।</li>
                      <li>যারা তাদের বর্তমান কাজের পাশাপাশি অতিরিক্ত আয়ের উৎস তৈরি করতে চান।</li>
                    </ul>
                  </div>
                </div>
              </div>
              {courseDeta.map((item, index) => (
                <div key={index} className="accordion-item">
                  <h1 className="accordion-header rounded" id={item.flushID}>
                    <button
                      className="accordion-button fs-5 collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={item.flushCollapsTarget}
                      aria-expanded="false"
                      aria-controls={item.flushCollaps}
                    >
                      {item.title}
                    </button>
                  </h1>
                  <div
                    id={item.flushCollaps}
                    className="accordion-collapse collapse"
                    aria-labelledby={item.flushID}
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      <ul type="square">
                        <p>{item.item3}</p>
                        <li>{item.item}</li>
                        <p>{item.item2}</p>
                      </ul>
                    </div>
                  </div>
                </div>
              ))}

              <div
                className="modal fade"
                id="exampleModal"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div
                  className="paymentContainer modal-dialog modal-dialog-centered modal-dialog-scrollable"
                >
                  <div className="modal-content">
                    <div className="modal-header pt-">
                      <button
                        type="button"
                        className="btn-close p-0"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <div className="row">
                        <div className="col-md-6">
                          <form>
                            <div className="mb-3">
                              <label
                                htmlFor="paymentMethod"
                                className="form-label fw-bold"
                              >
                                পেমেন্ট মেথড বেছে নিন
                              </label>
                              <select
                                className="form-select"
                                id="paymentMethod"
                                onChange={updatePaymentInfo}
                              >
                                <option value="বিকাশ" data-account="01721554216">
                                 <img src={bkash} alt="" /> বিকাশ
                                </option>
                                <option value="রকেট" data-account="0845421541">
                                  রকেট
                                </option>
                                <option value="নগদ" data-account="09542515421">
                                  নগদ
                                </option>
                              </select>
                            </div>
                            <div className="mb-3">
                              <label
                                htmlFor="senderMobile"
                                className="form-label fw-bold"
                              >
                                অর্থের পরিমান
                              </label>
                              <input
                                type="number"
                                className="form-control"
                                id="senderMobile"
                                placeholder={course.price}
                                value={course.price}
                              />
                            </div>
                            <div className="mb-3">
                              <label
                                htmlFor="senderMobile"
                                className="form-label fw-bold"
                              >
                                প্রেরকের মোবাইল নাম্বার
                              </label>
                              <input
                                type="number"
                                className="form-control"
                                id="senderMobile"
                                placeholder=""
                              />
                            </div>
                            <div className="mb-3">
                              <label
                                htmlFor="transactionId"
                                className="form-label fw-bold"
                              >
                                ট্রানজেকশন আইডি (TrxID)
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="transactionId"
                                placeholder=""
                              />
                            </div>
                            <button
                              type="button"
                              id="liveToastBtn"
                              className="py-2 w-100 mt-4 btn1"
                              onClick={notify}
                            >
                              প্রেরণ করুন <i className="fa fa-arrow-right ms-2"></i>
                            </button>
                          </form>
                        </div>
                        <div className="col-md-6 px-4 paymentRight">
                          <h4 className="fw-bold Instruction mb-3 mt-sm-3">
                            নির্দেশসমূহ অনুসরণ করুন
                          </h4>
                          <p>
                            <b id="accountType">{selectedPaymentMethod.accountType}</b> একাউন্ট এ
                            আপনার কোর্স ফি পাঠান
                          </p>
                          <ul>
                            <li id="accountNumber">
                              <b>{selectedPaymentMethod.accountType}</b> পারসোনাল:{" "}
                             <button id="copyText" onClick={handleCopyClick} className="bg-white border-0"> <b><i className="fa-regular fa-copy ms-3 me-1"></i>{selectedPaymentMethod.accountNumber}</b></button>
                            
                            </li>
                          </ul>
                          <p>
                            ফি পাঠানোর পরে, আপনার তালিকাভুক্তির অনুরোধ সম্পূর্ণ করার জন্য
                            লেনদেন আইডি (TrxID) এবং প্রেরকের মোবাইল নম্বর ব্যবহার করুন।
                            যখন আমরা আপনার অনুরোধ পাই, আমরা এটি 10-15 মিনিটের মধ্যে
                            সক্রিয় করব, তারপর আপনি কোর্সটি শুরু করতে পারবেন।
                          </p>
                          <p>
                            আরও সাহায্যের জন্য আমাদের হেল্পলাইনে যোগাযোগ করুন : <br />
                            <b
                              ><i className="fa-solid fa-headset"></i> হেল্পলাইন :
                              ০১৪১৮৭৮৪৪৫</b>
                          </p>
                          <p>
                            <b><i className="fa-solid fa-phone-volume"></i> মোবাইল:</b>
                            <i>০১৮৫৫৮৮২২৫</i> <br />
                            <b><i className="fa-brands fa-whatsapp"></i> হোয়াটসঅ্যাপ:</b>
                            <i>০১৮৮২৫৫৫২২</i>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>



          <div className="col-lg-4 col-md-12">
            <div className="card" id="card">
              <div>
              <div className={course.class}>
                  <img src={course.courseImg} alt="" />
                 </div>
                <div className="px-3">
                <h4 className="text-center courseTitle mt-3">{course.tilte}</h4>
               <div className="d-flex align-items-center justify-content-between py-2">
               <h5 className="card-title mb-3">৳ {course.price} <del className="fs-6 text-black-50">{course.pastPrice}</del></h5>
               <div className="d-flex gap-2 align-items-center">
                    <h6>{course.instructorName}</h6>
                    <img className="Instructor" src={course.instructor} alt="" />
                  </div>
               </div>
                <div>
                  <button
                    type="button"
                    className="allCoursesBtn d-flex align-items-center fs-5 justify-content-center me-4"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    এনরোল করুন <i className="fa fa-arrow-right ms-2 courseIcon"></i>
                  </button>
                </div>
                <div className="desc mt-4">
                  <p>
                    <i className="fa-solid fa-user-group me-2"></i>কোর্সটি করছেন {course.people} জন
                  </p>
                  <p>
                    <i className="fa-solid fa-stopwatch me-2"></i>সময় লাগবে {course.time}
                  </p>
                  <p>
                    <i className="fa-regular fa-circle-play me-2"></i>{course.vdo} টি ভিডিও
                  </p>
                  <p>
                    <i className="fa-solid fa-calendar-days me-2"></i>সময়সীমা {course.mnth} মাস
                  </p>
                </div>
                </div>
              </div>
            </div>



        </div>



        </div>
        <ToastContainer
      position="top-right"
      autoClose={5000}
      closeOnClick
      rtl
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
      </div>
    </section>
  );
};

export default Course;
