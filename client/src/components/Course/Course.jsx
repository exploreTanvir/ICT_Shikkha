import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import jsVdo from "../../assets/js-13.mp4";
import { courseDeta } from "./CourseDetail";
import "./course.css";

const Course = () => {
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
                      <li>যারা ওয়েব ডিজাইন/ডেভেলপমেন্ট শিখে ফ্রিলান্স মার্কেটপ্লেসে কাজ করতে চান।</li>
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
                                  বিকাশ
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
                                placeholder=""
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
                              প্রেরণ করুন
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
            <div className="card">
              <div className="card-body">
                <video className="video w-100" controls src={jsVdo}>
                  <source />
                </video>
                <h5 className="card-title my-3">৳ ****</h5>
                <div>
                  <button
                    type="button"
                    className="allCoursesBtn d-flex align-items-center fs-5 justify-content-center me-4"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    এনরোল করুন
                  </button>
                </div>
                <div className="desc mt-4">
                  <p>
                    <i className="fa-solid fa-user-group me-2"></i>কোর্সটি করছেন ***
                    জন
                  </p>
                  <p>
                    <i className="fa-solid fa-stopwatch me-2"></i>সময় লাগবে ** ঘন্টা
                  </p>
                  <p>
                    <i className="fa-regular fa-circle-play me-2"></i>*** টি ভিডিও
                  </p>
                  <p>
                    <i className="fa-solid fa-calendar-days me-2"></i>সময়সীমা * মাস
                  </p>
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
