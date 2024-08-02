import skillImg1 from "../../assets/skill.jpg"
import skillImg2 from "../../assets/skill1.jpg"
import skillImg4 from "../../assets/skill2.jpg"
import skillImg3 from "../../assets/skill3.png"
import "./skill.css"

const Skill = () => {
  return (
    <section className="skill mb-5 pb-5">
        <div className="faqTitle text-center mt-5 mb-4">
         <span>স্কিল ডেভেলপমেন্ট এবং কোর্সসমূহ</span> 
         </div>
        <div className="container">
            <div className="row">
                <div className="col-lg-3 skillCard col-md-6 col-sm-12 pt-3">
                    <div className="skillCard1 mt-3 card text-center p-3" href="www.facebook.com">
                        <img src={skillImg1} alt="" />
                        <h2 className="fw-bold">আইসিটি কুইজ</h2>
                        <div className="skillBtn py-1 d-flex align-items-center justify-content-center">
                            <a href="/quiz" className=" d-flex align-items-center gap-2 ">কুইজে অংশ নিন <i class="fa fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 skillCard col-md-6 col-sm-12 pt-3">
                    <div className="skillCard2 mt-3 card text-center p-3" href="www.facebook.com">
                        <img src={skillImg2} alt="" />
                        <h2 className="fw-bold">আইসিটি ভিডিও</h2>
                        <div className="skillBtn py-1 d-flex align-items-center justify-content-center">
                            <a href="/" className=" d-flex align-items-center gap-2 ">ভিডিও ক্লাস দেখো <i class="fa fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 skillCard col-md-6 col-sm-12 pt-3">
                    <div className="skillCard3 mt-3 card text-center p-3" href="www.facebook.com">
                        <img src={skillImg3} alt="" />
                        <h2 className="fw-bold">আইসিটি কুইজ</h2>
                        <div className="skillBtn py-1 d-flex align-items-center justify-content-center">
                            <a href="/quiz" className=" d-flex align-items-center gap-2 ">কুইজে অংশ নিন <i class="fa fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 skillCard col-md-6 col-sm-12 pt-3">
                    <div className="skillCard4 mt-3 card text-center p-3" href="www.facebook.com">
                        <img src={skillImg4} alt="" />
                        <h2 className="fw-bold">আইসিটি কুইজ</h2>
                        <div className="skillBtn py-1 d-flex align-items-center justify-content-center">
                            <a href="/quiz" className=" d-flex align-items-center gap-2 ">কুইজে অংশ নিন <i class="fa fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skill