import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Footer from '../Footer/Footer';
import Nav from '../Nav/Nav';
import Newsletter from '../newsletter/Newsletter';
import TopBar from '../topbar/TopBar';
import "./HSCSubChapter1.css";
import { HscSub1Detail } from './HscSub1Detail';

const HSCSubChapter1 = () => {
  return (
    <div className='HSCSubChapter'>
      <TopBar/>
        <Nav/>
.
<div className="container">
{/* <div className="faqTitle text-center mt-5 mb-4">
         <span>HSC ICT বই</span> 
         </div> */}
    <div className="row">
    <div className="col-lg-12 subChapter py-3 text-center text-white rounded mb-5">
        <h2>প্রথম অধ্যায়</h2>
        <h3>তথ্য ও যোগাযোগ প্রযুক্তি, বিশ্ব ও বাংলাদেশ প্রেক্ষিত</h3>
    </div>         
        
    </div>
    <div className="row justify-content-between jcc">
    {
      HscSub1Detail.map((item,index)=>{
        return(
          <Link to={item.name} className="col-lg-4 mb-4 subChapterdetail">
             <h2>{item.title}</h2>
          </Link>
        )
      })
    }
    </div>
</div>
      
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default HSCSubChapter1