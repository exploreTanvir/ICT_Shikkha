import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Footer from '../../components/Footer/Footer';
import Nav from '../../components/Nav/Nav';
import Newsletter from '../../components/newsletter/Newsletter';
import TopBar from '../../components/topbar/TopBar';
import "./hsc.css";
import { HscChapterDetail, HscSuggestion } from './HscChapterDetail';

const HSC = () => {
  
  return (
    <div>
        <TopBar/>
        <Nav/>
<div className="HSC audioBook">
<div className="container">
<div className="faqTitle text-center my-3">
         <span>HSC ICT হ্যান্ড নোট</span> 
         </div>
    <div className="row gap-4 flex-wrap pb-3 justify-content-center">
        {
            HscChapterDetail.map((item,index)=>{
                return(
                    <Link to={item.chapter}  className={item.class}>
            <h2 >{item.title}</h2>
            <h3 className="play-icon">
            <i className="fa-solid fa-book-open-reader me-2"></i>
            পড়ুন  
                  </h3>
            <h3>{item.desc}<br />{item.desc2}</h3>
        </Link>
                )
            })
        }
    </div>
    <div className="faqTitle text-center my-3">
         <span>সাজেশন এবং মডেল টেস্ট</span> </div>

    <div className="row hscSuggestionRow justify-content-between pb-4">
    
         {
            HscSuggestion.map((item,index)=>{
                return(
                    <Link key={index} to={item.chapter}  className={item.class}>
            <h1 >{item.title}</h1>
            <h3 className="play-icon">
            <i className="fa-solid fa-book-open-reader me-2"></i>
            দেখুন  
                  </h3>
            <h3>{item.desc}<br />{item.desc2}</h3>
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

export default HSC