
import { Link } from "react-router-dom/cjs/react-router-dom.min"
import "./skill.css"
import { skillMenu } from "./SkillMenu"

const Skill = () => {
  return (
    <section className="skill mb-5 pb-5">
        <div className="faqTitle text-center mt-5 mb-4">
         <span>স্কিল ডেভেলপমেন্ট</span> 
         </div>
        <div className="container">
            <div className="row">
               {skillMenu.map((item,index)=>{
                 return(
                    <div className="col-lg-3 skillCard col-md-6 col-sm-12 pt-3">
                 <div className={item.class}>
                     <img src={item.img} alt="" />
                     <h2 className="fw-bold">{item.title}</h2>
                     <div className="skillBtn py-1 d-flex align-items-center justify-content-center">
                         <Link to={item.src} className=" d-flex align-items-center gap-2 ">{item.btn} <i class="fa fa-arrow-right"></i></Link>
                     </div>
                 </div>
             </div>
                 )
               })}
            </div>
        </div>
    </section>
  )
}

export default Skill