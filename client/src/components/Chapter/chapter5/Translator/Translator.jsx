import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import comingSoon from "../../../../assets/comingSoon.jpg"
import { Chpt5SubDetail } from '../../../chapterSub/Chpt5Sub/Chpt5SubDetail'
import Footer from '../../../Footer/Footer'
import Nav from '../../../Nav/Nav'
import Newsletter from '../../../newsletter/Newsletter'
import TopBar from '../../../topbar/TopBar'
import "../../chapter1/GlobalVillage/GlobalVillage.css"

const Translator = () => {
  return (
        <div>
            <TopBar/>
            <Nav/>
        <div className="container chapterOneMain">
            <div className="row chapterOneMain py-3">
                <div className="col-lg-9">
                <div className="booktop">
                <h1>পঞ্চম অধ্যায়</h1>
            <h3>প্রোগ্রামিং ভাষা</h3>
            <h3>অনুবাদক(Translator)</h3>
        </div>
                <div className='text-center'>
                    <img className='w-75' src={comingSoon} alt="" />
                </div>
        
                </div>
                <div className="col-lg-3 ">
                <div className="chapterLeft">
                {
                Chpt5SubDetail.map((item,index)=>{
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

export default Translator