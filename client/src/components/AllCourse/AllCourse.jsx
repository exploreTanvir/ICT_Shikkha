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
              <div class="col-lg-4 col-sm-12 col-md-6 py-4">
              <Link to="/course-detail">
              <div class="card" id="card">
                <div>
                 <div className={item.class}></div>
                 <div class="card-body">
                 <h5 className="text-center">{item.tilte}</h5>
                 <div className="d-flex justify-content-between my-3">
                 <div className="d-flex align-items-end gap-2"> 
                 <h5 class="card-title">{item.price}
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
                  <Link to="/course-detail" className='allCoursesBtn d-flex align-items-center fs-5 justify-content-center me-4'>বিস্তারিত দেখুন</Link>
                  <div class="desc mt-4">
                    <div className="d-flex courseDetails justify-content-between align-items-center">
                    <p>
                      <i class="fa-solid fa-user-group me-2"></i>{item.people}
                    </p>
                    <p>
                      <i class="fa-regular fa-circle-play me-2"></i>{item.vdo}
                    </p>
                    </div>
    
    
                    <div className="d-flex courseDetails justify-content-between align-items-center">
                    <p>
                      <i class="fa-solid fa-stopwatch me-2"></i>{item.time}
                    </p>
                    
                    <p>
                      <i class="fa-solid fa-calendar-days me-2"></i>{item.mnth}
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
        {/* <a href="/course"><div className='topArrow'><i class="fa-solid fa-arrow-up"></i></div></a> */}
    </section>
  )
}

export default AllCourse