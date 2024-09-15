import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../../components/Footer/Footer';
import Nav from '../../components/Nav/Nav';
import Newsletter from '../../components/newsletter/Newsletter';
import TopBar from '../../components/topbar/TopBar';
import "./hsc.css";
import { HscChapterDetail, HscSuggestion } from './HscChapterDetail';

const HSC = () => {
    const history = useHistory();

    const handleStart = (e, path) => {
        // const token = localStorage.getItem("token");
      
        // if (!token) {
        //   e.preventDefault(); 
        //   toast.error("সাজেশন ও মডেল টেস্ট দিতে আপনাকে প্রথমে লগইন করতে হবে !");
        // } else {
        //   history.push(path);  
        // }
    };

    return (
      <div>
          <TopBar/>
          <Nav/>
          <div className="HSC audioBook">
            <div className="container">
              <div className="faqTitle text-center py-3 wow fadeInUp">
                  <span>HSC ICT হ্যান্ড নোট</span> 
              </div>
              <div className="row gap-4 flex-wrap pb-3 justify-content-center">
                  {HscChapterDetail.map((item, index) => (
                      <Link to={item.chapter} className={item.class} key={index}>
                          <h2>{item.title}</h2>
                          <h3 className="play-icon">
                            <i className="fa-solid fa-book-open-reader me-2"></i>
                            পড়ুন  
                          </h3>
                          <h3>{item.desc}<br />{item.desc2}</h3>
                      </Link>
                  ))}
              </div>
              <div className="faqTitle text-center my-3 wow fadeInUp">
                  <span>সাজেশন এবং মডেল টেস্ট</span>
              </div>
              <div className="row hscSuggestionRow justify-content-between pb-4">
                  {HscSuggestion.map((item, index) => (
                      <Link 
                        onClick={(e) => handleStart(e, item.chapter)} 
                        key={index} 
                        to={item.chapter} 
                        className={item.class}
                      >
                          <h1>{item.title}</h1>
                          <h3 className="play-icon">
                              <i className="fa-solid fa-book-open-reader me-2"></i>
                              দেখুন  
                          </h3>
                          <h3>{item.desc}<br />{item.desc2}</h3>
                      </Link>
                  ))}
              </div>
              <ToastContainer />
            </div>
          </div>
          <Newsletter/>
          <Footer/>
      </div>
    );
};

export default HSC;
