import { Link } from "react-router-dom/cjs/react-router-dom.min"
import "./AllCourse.css"
import { AllCourseMenu } from "./AllCourseMenu"

const AllCourse = () => {
  return (
    <section className="allCourse ">
        <div className="container">
        
         <div className="faqTitle text-center mt-5 mb-4">
         <span>আমাদের সকল কোর্সসমূহ</span> 
         </div>
            <div className="row">
            {AllCourseMenu.map((item,index)=>{
            return(
              <div key={index} className="col-lg-4 wow fadeInUp col-sm-12 col-md-6 py-4">
              <Link to={`/course-detail/${index}`}>
              <div className="card" id="card">
                <div>
                 <div className={item.class}>
                  <img src={item.courseImg} alt="" />
                 </div>
                 <div className="card-body">
                 <h5 className="text-center">{item.tilte}</h5>
                 <div className="d-flex justify-content-between my-3">
                 <div className="d-flex align-items-end gap-2"> 
                 <h5 className="card-title">৳ {item.price}
                    </h5>
                    <h6><s className="pastPrice">{item.pastPrice}</s></h6>
                 </div>
                 <div className="d-flex gap-2 align-items-end" >
                 <div className="d-flex gap-2 align-items-end">
                    <h6 className="instructorName">{item.instructorName}</h6>
                    <img className="courseInstructor" src={item.instructor} alt="" />
                  </div>

                 </div>
                 </div>
                  <Link to={`/course-detail/${index}`} className='allCoursesBtn d-flex align-items-center fs-5 justify-content-center me-4'>বিস্তারিত দেখুন <i className="fa fa-arrow-right ms-2 courseIcon"></i></Link>
                  <div className="desc mt-4">
                    <div className="d-flex courseDetails justify-content-between align-items-center">
                    <p>
                      <i className="fa-solid fa-user-group me-2"></i>কোর্সটি করছেন {item.people} জন
                    </p>
                    <p>
                      <i className="fa-regular fa-circle-play me-2"></i>{item.vdo} টি ভিডিও
                    </p>
                    </div>
    
    
                    <div className="d-flex courseDetails justify-content-between align-items-center">
                    <p>
                      <i className="fa-solid fa-stopwatch me-2"></i>সময় লাগবে {item.time}
                    </p>
                    
                    <p>
                      <i className="fa-solid fa-calendar-days me-2"></i>সময়সীমা {item.mnth} মাস
                    </p>
                    </div>
                  </div>
                 </div>
                </div>
              </div>
              </Link>
            </div>
            )
           })}
            </div>
        </div>
       
    </section>
  )
}

export default AllCourse