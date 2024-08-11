import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Footer from '../../components/Footer/Footer';
import Nav from '../../components/Nav/Nav';
import Newsletter from '../../components/newsletter/Newsletter';
import TopBar from '../../components/topbar/TopBar';
import { HscChapterDetail } from './HscChapterDetail';
import "./hsc.css";

const HSC = () => {
  return (
    <div>
        <TopBar/>
        <Nav/>
.
<div className="container">
<div className="faqTitle text-center mt-1 mb-4">
         <span>HSC ICT বই</span> 
         </div>
    <div className="row gap-4 pb-3 justify-content-center">
        {
            HscChapterDetail.map((item,index)=>{
                return(
                    <Link to={item.chapter}  className={item.class}>
            <h2 >{item.title}</h2>
            <h3>{item.desc}<br />{item.desc2}</h3>
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

export default HSC