import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import comingSoon from "../../../../assets/comingSoon.jpg"
import { Chpt2SubDetail } from '../../../chapterSub/Chpt2Sub/Chpt2SubDetail'
import Footer from '../../../Footer/Footer'
import Nav from '../../../Nav/Nav'
import Newsletter from '../../../newsletter/Newsletter'
import TopBar from '../../../topbar/TopBar'
import "../../chapter1/GlobalVillage/GlobalVillage.css"

const Cloud_Computing = () => {
  return (
        <div>
            <TopBar/>
            <Nav/>
        <div className="container chapterOneMain">
            <div className="row chapterOneMain py-3">
                <div className="col-lg-9">
                <div className="booktop">
            <h1>দ্বিতীয় অধ্যায়</h1>
            <h3>কমিউনিকেশন সিস্টেম ও নেটওয়ার্কিং</h3>
            <h3>ক্লাউড কম্পিউটিং (Cloud Computing)</h3>
        </div>
                <div className='text-center'>
                    <img className='w-75' src={comingSoon} alt="" />
                </div>
        
                </div>
                <div className="col-lg-3 ">
                <div className="chapterLeft">
                {
                Chpt2SubDetail.map((item,index)=>{
        return(
          <Link to={item.name} className="mb-4">
             <h4 className='chapterOne'>{item.title}</h4>
          </Link>
        )
      })
    }
                </div>
                </div>
        </div>
      </div>
      <Newsletter/>
      <Footer/>
        </div>
  )
}

export default Cloud_Computing