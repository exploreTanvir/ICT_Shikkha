import { useEffect, useState } from "react"
import aboutIcon from "../../assets/aboutIcon.png"
import aboutImg from "../../assets/aboutImg.png"
import touhidSir from "../../assets/touhidSir34.png"
import "./about.css"

const About = () => {
    const [data, setData] = useState([]);
    const [datatwo, setDataTwo] = useState([]);




  useEffect(() => {
    fetch("http://localhost:5000/abouttext")
        .then(res => res.json())
        .then(data => setData(data))
        .catch(err => console.log(err));
}, []);

useEffect(() => {
    fetch("http://localhost:5000/aboutostad")
        .then(res => res.json())
        .then(data => setDataTwo(data))
        .catch(err => console.log(err));
}, []);
  return (
    <section className="about">
<div className="advice">
<div className="container">
        <div className="faqTitle text-center mt-5 mb-4 wow fadeInUp">
         <span>আমাদের সম্পর্কে বিস্তারিত</span> 
         </div>
            <div className="row align-items-center">
                <div className="col-lg-5 wow fadeInLeft">
                    <img src={aboutImg} className="aboutImg w-100" alt="" />
                </div>
                <div className="col-lg-7 col-sm-12 wow fadeInRight">
                    <div className="row mb-2">
                    {data.map((item,index)=>{
                        return(
                            <div className="col-lg-6 mb-2 col-sm-12 px-4">
                        <div className="d-flex gap-3">
                            <i className="fa-solid fa-check fs-4"></i>
                            <h4>{item.title}</h4>
                        </div>
                        <p>{item.description}</p>
                    </div>
                        )
                    })}
                    </div>
                </div>
            </div>
        </div>
</div>
   <div className="writing">
   <div className="container ">
    <div className="faqTitle text-center pt-5 mb-4 wow fadeInUp">
         <span>প্রতিষ্ঠাতার বক্তব্য</span> 
         </div>
        <div className="row writing-about">
            <div className="col-lg-7 col-sm-12 aboutLeft wow fadeInLeft">
            {datatwo.map((item,index)=>{
                return(
                    <p>{item.title}</p>
                )
            })}
           
            </div>
            <div className="col-lg-5 wow fadeInRight col-sm-12 px-5 d-flex flex-column aboutRight">
                <img className="touhidSirImg" src={touhidSir} alt="" />
                <div className="touhidSirInfo">
           <p className="text-end touhidSir fs-5">প্রকৌশলী মো. তৌহিদ হোসেন</p>
            <p className="text-end">প্রতিষ্ঠাতা আইসিটি শিক্ষা</p>
            <p className="text-end">ইনস্ট্রাক্টর কম্পিউটার, মাগুরা পলিটেকনিক ইন্সটিটিউট, মাগুরা</p>
           </div>
           <img src={aboutIcon} className="aboutIcon" alt="" />
            </div>
        </div>
    </div>
   </div>

   
    </section>
  )
}

export default About