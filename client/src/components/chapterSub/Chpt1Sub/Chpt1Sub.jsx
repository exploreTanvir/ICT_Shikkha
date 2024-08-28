import { Link } from 'react-router-dom/cjs/react-router-dom.min';

import Footer from '../../Footer/Footer';
import Nav from '../../Nav/Nav';
import Newsletter from '../../newsletter/Newsletter';
import TopBar from '../../topbar/TopBar';
import "./Chpt1Sub.css";
import { Chpt1SubDetail } from './Chpt1SubDetail';

const Chpt1Sub = () => {
  return (
    <div>
      <TopBar/>
        <Nav/>
<div className="Sub">
<div className="container ">
    <div className="row">
    <div className="col-lg-12 subChapter py-3 text-center text-white rounded mb-5">
        <h2>প্রথম অধ্যায়</h2>
        <h3>তথ্য ও যোগাযোগ প্রযুক্তি, বিশ্ব ও বাংলাদেশ প্রেক্ষিত</h3>
    </div>         
        
    </div>
    <div className="row justify-content-between jcc">
    {
      Chpt1SubDetail.map((item,index)=>{
        return(
          <Link key={index} to={item.name} className="col-lg-4 mb-4 subChapterdetail">
             <h2>{item.title}</h2>
          </Link>
        )
      })
    }
    </div>
</div>
</div>
      
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default Chpt1Sub