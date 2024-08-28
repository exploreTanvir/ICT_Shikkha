import { Link } from 'react-router-dom/cjs/react-router-dom.min'

import { Chpt1SubDetail } from '../../../chapterSub/Chpt1Sub/Chpt1SubDetail'
import Footer from '../../../Footer/Footer'
import Nav from '../../../Nav/Nav'
import Newsletter from '../../../newsletter/Newsletter'
import TopBar from '../../../topbar/TopBar'
import "../GlobalVillage/GlobalVillage.css"

const BioInformatics = () => {
  return (
        <div>
            <TopBar/>
            <Nav/>
        <div className="container chapterOneMain">
            <div className="row chapterOneMain py-3">
                <div className="col-lg-9">
                <div className="booktop">
            <h1>প্রথম অধ্যায়</h1>
            <h3>তথ্য ও যোগাযোগ প্রযুক্তি : বিশ্ব ও বাংলাদেশ প্রেক্ষিত</h3>
            <h2>বায়োইনফরমেটিক্স (Bio Informatics)</h2>
        </div>
        <p className='mt-4'>জীববিজ্ঞানে তথ্য প্রযুক্তির প্রয়োগ হলো বায়োইনফরমেটিক্স। বিজ্ঞানের যে শাখায় তথ্য ও প্রযুক্তির সাহায্যে জীববিজ্ঞান সংক্রান্ত কাজে ব্যবহৃত ডেটার সংরক্ষণ, আহরণ, সাজানো এবং বিশ্লেষণ করা হয় তাকে বায়োইনফরমেটিক্স বলে। সংক্ষেপে  জীববিজ্ঞানের সমস্যাগুলো যখন কম্পিউটার প্রস্তুতি কৌশল ব্যবহার করে সমাধান করা হয়, তখন সেটাকে বলা হয় বায়োইনফরমেটিক্স। </p>
        <p>বায়োইনফরমেটিক্স মূলত জীববিদ্যা, গণিত, পরিসংখ্যান ও কম্পিউটার বিজ্ঞানের সমন্বয়ে গঠিত। “Paulian hogeweg” নামের একজন গবেষক ১৯৭৮ সালে বায়োইনফরমেটিক্স শব্দটি প্রথম ব্যবহার করেন। বায়োইনফরমেটিক্স-এর মূল উদ্দেশ্য হচ্ছে জৈবিক পদ্ধতি সম্পর্কে সঠিক ধারণা লাভ করা।</p>
        
        <h4><b>বায়োইনফরমেটিক্সের ব্যবহার : </b></h4>
        
      

        <ul>
            <li>জিনোম সিকোয়েন্স, প্রোটিন সিকোয়েন্স এর গঠন উপাদানের ধারণা নিতে।</li>
            <li>ক্যান্সার কোষের গবেষণার ক্ষেত্রে।</li>
            <li>মলিকিউলার মেডিসিন তৈরিতে।</li>
            <li>ঔষধ উন্নয়ন করতে।</li>
            <li>বায়োটেকনোলজি এর গবেষণাসমূহে।</li>
            <li>খাবারের পুষ্টির মান উন্নয়নে।</li>               
            <li>প্রতিরক্ষামূলক ব্যবস্থায়</li>               
            </ul>
         
             </div>
                <div className="col-lg-3 ">
                <div className="chapterLeft">
                {
      Chpt1SubDetail.map((item,index)=>{
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

export default BioInformatics