
import { Link } from "react-router-dom/cjs/react-router-dom.min"
import "./skill.css"
import { skillMenu } from "./SkillMenu"

const Skill = () => {
  return (
    <section className="skill pb-5">
        <div className="faqTitle text-center pt-5 ">
         <span>স্কিল ডেভেলপমেন্ট ও ক্যাটাগরিসমূহ</span> 
         </div>
        <div className="container">
            <div className="row">
               {skillMenu.map((item,index)=>{
                 return(
                    <div key={index} className="col-lg-3 skillCard col-md-6 col-sm-12 pt-3">
               <Link to={item.src}>
               <div className={item.class}>
                     <img src={item.img} alt="" />
                     <h2 className="fw-bold">{item.title}</h2>
                     <div className="skillBtn py-1 d-flex align-items-center justify-content-center">
                         <Link to={item.src} className=" d-flex align-items-center gap-2 ">{item.btn} <i className="fa fa-arrow-right"></i></Link>
                     </div>
                 </div></Link>
             </div>
                 )
               })}
            </div>
        </div>
    </section>
  )
}

export default Skill