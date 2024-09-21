import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import Footer from '../../Footer/Footer'
import Nav from '../../Nav/Nav'
import Newsletter from '../../newsletter/Newsletter'
import TopBar from '../../topbar/TopBar'


const Chptr6Audio = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/api/auth/hsc")
        .then(res => res.json())
        .then(data => setData(data))
        .catch(err => console.log(err));
}, []);
  return (
        <div>
            <TopBar/>
            <Nav/>
        <div className="container chapterOneMain">
            <div className="row chapterOneMain py-3">
                <div className="col-lg-9">
                <div className="booktop">
                <h1>ষষ্ঠ অধ্যায়</h1>
            <h3>ডেটাবেজ ম্যানেজমেন্ট
            সিস্টেম</h3>
            
        </div>
        <div className='text-center py-5'>
       <iframe title='audio' className='w-100' src="https://lottie.host/embed/499764f9-fd43-48b8-ba69-bfd7058d32fe/XZQXXEVLna.json"></iframe>
       </div>
        
                </div>
                <div className="col-lg-3 ">
                <div className="chapterLeft">
                {
                data.map((item,index)=>{
        return(
          <Link key={index} to={item.url} className="mb-4">
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

export default Chptr6Audio