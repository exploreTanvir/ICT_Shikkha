import { Link } from 'react-router-dom/cjs/react-router-dom.min';

import Footer from '../../Footer/Footer';
import Nav from '../../Nav/Nav';
import Newsletter from '../../newsletter/Newsletter';
import TopBar from '../../topbar/TopBar';
import "../Chpt1Sub/Chpt1Sub.css";
import { Chpt5SubDetail } from './Chpt5SubDetail';

const Chpt5Sub = () => {
  return (
    <div>
      <TopBar/>
        <Nav/>
<div className="Sub">
<div className="container">
    <div className="row">
    <div className="col-lg-12 subChapter py-3 text-center text-white rounded mb-5">
        <h2>পঞ্চম অধ্যায়</h2>
        <h3>প্রোগ্রামিং ল্যাঙ্গুয়েজ</h3>
    </div>         
        
    </div>
    <div className="row justify-content-between jcc">
    {
      Chpt5SubDetail.map((item,index)=>{
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

export default Chpt5Sub