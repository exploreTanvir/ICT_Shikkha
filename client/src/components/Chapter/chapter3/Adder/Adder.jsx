import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import { Chpt3SubDetail } from '../../../chapterSub/Chpt3Sub/Chpt3SubDetail'
import Footer from '../../../Footer/Footer'
import Nav from '../../../Nav/Nav'
import Newsletter from '../../../newsletter/Newsletter'
import TopBar from '../../../topbar/TopBar'
import "../../chapter1/GlobalVillage/GlobalVillage.css"

const Adder = () => {
  return (
        <div>
            <TopBar/>
            <Nav/>
        <div className="container chapterOneMain">
            <div className="row chapterOneMain py-3">
                <div className="col-lg-9">
                <div className="booktop">
                <h1>তৃতীয় অধ্যায়</h1>
            <h3>সংখ্যা পদ্ধতি ও ডিজিটাল ডিভাইস</h3>
            <h3>অ্যাডার(Adder)</h3>
        </div>
        <div className='text-center py-5'>
       <iframe title='audio' className='w-100' src="https://lottie.host/embed/499764f9-fd43-48b8-ba69-bfd7058d32fe/XZQXXEVLna.json"></iframe>
       </div>
        
                </div>
                <div className="col-lg-3 ">
                <div className="chapterLeft">
                {
                Chpt3SubDetail.map((item,index)=>{
        return(
          <Link key={index} to={item.name} className="mb-4">
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

export default Adder