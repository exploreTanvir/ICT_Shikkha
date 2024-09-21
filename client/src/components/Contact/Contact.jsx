import axios from 'axios';
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./contact.css";
import { divisionsDistrictInfo } from "./district";



const Contact = () => {
  const notify = () => toast("👌 সফলভাবে মেসেজ প্রেরন হয়েছে! ধন্যবাদ  ");

  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [phone, setPhone] = useState()
  const [collage, setCollage] = useState()
  const [divisions, setDivisions] = useState()
  const [district, setDistrict] = useState()
  const [message, setMessage] = useState()
  const [data, setData] = useState([]);


  useEffect(() => {
    fetch("http://localhost:5000/api/auth/contactdetail")
        .then(res => res.json())
        .then(data => setData(data))
        .catch(err => console.log(err));
}, []);

  useEffect(() => {
    const selectDivision = document.getElementById("divisions");
    const selectDistrict = document.getElementById("district");

    selectDistrict.disabled = true;

    for (let division in divisionsDistrictInfo) {
      selectDivision.options[selectDivision.options.length] = new Option(division, division);
    }

    selectDivision.onchange = (e) => {
      selectDistrict.disabled = false;
      selectDistrict.length = 1; 
      const districts = divisionsDistrictInfo[e.target.value];

      for (let i = 0; i < districts.length; i++) {
        selectDistrict.options[selectDistrict.options.length] = new Option(districts[i], districts[i]);
      }
    };
  }, []);



  const handleSubmit=(event)=>{
    event.preventDefault();
      axios.post("http://localhost:5000/api/auth/user",{name,email,phone,collage,divisions,district,message})
      .then(res=>{
        console.log(res)
      })
      .catch(err=>{
        console.log(err)
      })
  }
  

  return (
    <section className="contact">
      <div className="faqTitle text-center pt-5 pb-4 wow fadeInUp">
         <span>যোগাযোগের মাধ্যম</span> 
      </div>
      <div className="container">
        <div className="row pt-2 pb-5 align-items-center">
          <div className="left-form col-md-12 wow fadeInLeft col-lg-6 col-sm-12">
            <div className="row gap-4 mb-4 contactRow">

              {data.map((item,index)=>{
                return(
                  <div className={item.class}>
                <i className={item.subClass}></i>
                <h3>{item.title}</h3>
                <p>
                  {item.description}
                </p>
              </div>
                )
              })}
              
          </div>
            
        </div>
        <form onSubmit={handleSubmit} action="/POST" method="post" enctype="multipart/form-data" className="left-form col-md-12 col-lg-6 col-sm-12 wow fadeInRight">
          <div>
            <div className="row gy-4">
              <div className="col-lg-6">
                <input type="text"
                  name="name"  
                  onChange={e=>setName(e.target.value)}
                  required  id="name" className="form-control" placeholder="নাম"/> 
              </div>
              <div className="col-lg-6 ">
                <input type="email"
                  name="email"
                  required className="form-control" onChange={e=>setEmail(e.target.value)}  placeholder="ইমেইল" />
              </div>
              <div className="col-lg-6">
                <input
                  required type="phone" name="phone"  onChange={e=>setPhone(e.target.value)} className="form-control" placeholder="মোবাইল নাম্বার"/>                
              </div>
              <div className="col-lg-6">
                <input
                  required type="text" name="collage"  onChange={e=>setCollage(e.target.value)} className="form-control" placeholder="স্কুল/কলেজ"/>                
              </div>
              <div className="col-lg-6">
                <div className="select-wrapper">
                  <select name="divisions" id="divisions" className="selected-Info" onChange={e=>setDivisions(e.target.value)} >
                    <option>-- আপনার বিভাগ --</option>
                  </select>
                </div>             
              </div>
              <div className="col-lg-6">
                <div className="select-wrapper">
                  <select name="district" id="district" className="selected-Info" onChange={e=>setDistrict(e.target.value)}>
                    <option>-- আপনার জেলা --</option>
                  </select>  
                 
                </div>             
              </div>
              <div className="col-md-12">
                <textarea       
                 
                  onChange={e=>setMessage(e.target.value)}
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
