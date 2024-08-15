import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./contact.css";
import { divisionsDistrictInfo } from "./district";


const Contact = () => {
  const notify = () => toast("👌 Data sent successfully ! ");

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
    email: '',
    subject: '',
    division: '',
    district: '',
  });

  useEffect(() => {
    const selectDivision = document.getElementById("divisions");
    const selectDistrict = document.getElementById("district");

    selectDistrict.disabled = true;

    for (let division in divisionsDistrictInfo) {
      selectDivision.options[selectDivision.options.length] = new Option(division, division);
    }

    selectDivision.onchange = (e) => {
      selectDistrict.disabled = false;
      selectDistrict.length = 1; // Reset district options
      const districts = divisionsDistrictInfo[e.target.value];

      for (let i = 0; i < districts.length; i++) {
        selectDistrict.options[selectDistrict.options.length] = new Option(districts[i], districts[i]);
      }
    };
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:5000/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <section className="contact">
      <div className="faqTitle text-center pt-5 pb-4">
         <span>আমাদের সাথে যোগাযোগের মাধ্যম</span> 
      </div>
      <div className="container">
        <div className="row pt-2 pb-5">
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
        <form onSubmit={handleSubmit} action="/POST" method="post" enctype="multipart/form-data" className="left-form col-md-12 col-lg-6 col-sm-12">
          <div>
            <div className="row gy-4">
              <div className="col-lg-6">
                <input type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required  id="name" className="form-control" placeholder="নাম"/> 
              </div>
              <div className="col-lg-6 ">
                <input type="email"
                  name="email"
                  required value={formData.email} className="form-control" onChange={handleChange}  placeholder="ইমেইল" />
              </div>
              <div className="col-lg-6">
                <input
                  required type="phone" name="phone" value={formData.phone} onChange={handleChange} className="form-control" placeholder="মোবাইল নাম্বার"/>                
              </div>
              <div className="col-lg-6">
                <input
                  required type="text" name="subject" value={formData.subject} onChange={handleChange} className="form-control" placeholder="সাবজেক্ট"/>                
              </div>
              <div className="col-lg-6">
                <div className="select-wrapper">
                  <select name="division" id="divisions" className="selected-Info" value={formData.division} onChange={handleChange} >
                    <option>-- Select Division --</option>
                  </select>
                </div>             
              </div>
              <div className="col-lg-6">
                <div className="select-wrapper">
                  <select name="district" id="district" className="selected-Info" value={formData.district} onChange={handleChange}>
                    <option>-- Select District --</option>
                  </select>  
                 
                </div>             
              </div>
              <div className="col-md-12">
                <textarea       
                  value={formData.message}
                  onChange={handleChange}
                  required name="message"   
                  className="form-control" 
                  rows="7" 
                  placeholder="মন্তব্য লিখুন ......">
                </textarea>
              </div>
              <div className="col-md-12 text-center">
                <button className="fs-5 sendBtn  d-flex justify-content-around align-items-center gap-2 course" type="submit" onClick={notify}>
                  মেসেজ সেন্ড করুন <i className="fa fa-arrow-right "></i>
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
    <ToastContainer
      position="bottom-right"
      autoClose={5000}
      closeOnClick
      rtl
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  </section>
  )
}

export default Contact;
