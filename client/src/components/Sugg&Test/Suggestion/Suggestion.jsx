
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import Footer from '../../Footer/Footer'
import { HscChapterDetail, HscSuggestion } from '../../HSC/HscChapterDetail'
import Nav from '../../Nav/Nav'
import Newsletter from '../../newsletter/Newsletter'
import TopBar from '../../topbar/TopBar'

const Suggestion = () => {
  return (
        <div>
            <TopBar/>
            <Nav/>
        <div className="container chapterOneMain">
            <div className="row chapterOneMain py-3">
                <div className="col-lg-9">
                <div className="booktop">
                <h1>এইস.এস.সি. আই.সি.টি সাজেশন</h1>
        </div>
        <div className='py-5'>
        <h4><b>তথ্য ও যোগাযোগ প্রযুক্তি (ICT) : </b></h4>     
      <ul>
          <li >
         <b>তথ্য প্রযুক্তির মৌলিক ধারণা :</b> তথ্য, ডেটা, বিট, বাইট, কম্পিউটার, হার্ডওয়্যার এবং সফটওয়্যার।
          </li>
          <li >
          <b>কম্পিউটার নেটওয়ার্ক :</b> LAN, WAN, MAN, ইন্টারনেট, ইন্টারনেট প্রোটোকল, আইপি অ্যাড্রেস, DNS।
          </li>
          <li >
          <b>ডাটাবেজ ম্যানেজমেন্ট সিস্টেম (DBMS) :</b> ডাটাবেসের ধারণা, রিলেশনাল ডাটাবেস, SQL।
          </li>
          <li >
          <b>ওয়েব ডিজাইন :</b> HTML, CSS, JavaScript এর বেসিক।
          </li>
          <li >
          <b>কম্পিউটার নিরাপত্তা :</b> ভাইরাস, ম্যালওয়্যার, ফায়ারওয়াল, এনক্রিপশন, সাইবার ক্রাইম।
          </li>
          </ul>
        <h4 className='mt-4'><b>প্রোগ্রামিং : </b></h4>     
      <ul>
          <li >
         <b>অ্যালগরিদম ও ফ্লোচার্ট :</b> অ্যালগরিদম তৈরির নিয়ম, ফ্লোচার্টের প্রতীকসমূহ।
          </li>
          <li >
          <b>সি প্রোগ্রামিং :</b> ভেরিয়েবল, ডেটা টাইপ, লুপ, কন্ডিশনাল স্টেটমেন্ট, ফাংশন।
          </li>
          <li >
          <b>অ্যারে ও স্ট্রিং :</b> অ্যারে এবং স্ট্রিং নিয়ে কাজ করা, অ্যারে এর অপারেশনস।
          </li>
          </ul>
        <h4 className='mt-4'><b>সংখ্যা পদ্ধতি ও লজিক গেট :</b></h4>     
      <ul>
          <li >
         <b>অ্বাইনারি ও দশমিক সংখ্যা পদ্ধতি :</b> বাইনারি থেকে দশমিক এবং দশমিক থেকে বাইনারি রূপান্তর।
          </li>
          <li >
          <b>লজিক গেট :</b> AND, OR, NOT, NAND, NOR গেটের কাজ।
          </li>
          </ul>
        <h4 className='mt-4'><b>তথ্য ও যোগাযোগ প্রযুক্তির নৈতিক ও সামাজিক বিষয় :</b></h4>     
      <ul>
          <li >
         <b>তথ্য গোপনীয়তা :</b> তথ্য সুরক্ষা এবং গোপনীয়তার ধারণা।
          </li>
          <li >
          <b>সামাজিক মাধ্যমের প্রভাব :</b> সামাজিক মাধ্যমের ইতিবাচক ও নেতিবাচক দিক।
          </li>
          </ul>
        <h4 className='mt-4'><b>সাম্প্রতিক প্রযুক্তি ও উদ্ভাবন :</b></h4>     
      <ul>
          <li >
         <b>এআই (AI) :</b> কৃত্রিম বুদ্ধিমত্তার ধারণা এবং এর ব্যবহার।
          </li>
          <li >
          <b>ইন্টারনেট অব থিংস (IoT) :</b> IoT এর ধারণা এবং এর প্রয়োগ।
          </li>
          </ul>
        <h4 className='mt-4'><b>মাল্টিমিডিয়া ও ডিজিটাল কনটেন্ট :</b></h4>     
      <ul>
          <li >
         <b>মাল্টিমিডিয়া :</b> মাল্টিমিডিয়ার বিভিন্ন উপাদান যেমন টেক্সট, ইমেজ, অডিও, ভিডিও, অ্যানিমেশন।
          </li>
          <li >
          <b>ডিজিটাল কনটেন্ট :</b> কনটেন্ট তৈরির সফটওয়্যার, ডিজিটাল কনটেন্ট ব্যবস্থাপনা।
          </li>
          </ul>
        <h4 className='mt-4'><b>মাইক্রোসফট অফিস এবং ডকুমেন্ট প্রসেসিং :</b></h4>     
      <ul>
          <li >
         <b>মাইক্রোসফট ওয়ার্ড :</b> ডকুমেন্ট তৈরি, পেজ লেআউট, টেবিল ইনসার্ট করা, মার্জিন সেট করা।
          </li>
          <li >
          <b>মাইক্রোসফট এক্সেল :</b> ডেটা এন্ট্রি, ফর্মুলা ব্যবহার, চার্ট তৈরি, ডাটা বিশ্লেষণ।
          </li>
          <li >
          <b>মাইক্রোসফট পাওয়ারপয়েন্ট :</b> প্রেজেন্টেশন তৈরি, স্লাইড ডিজাইন, ট্রানজিশন, অ্যানিমেশন।
          </li>
          </ul>
       </div>
        
                </div>
                <div className="col-lg-3 ">
                <div className="chapterLeft">
               <div className='mb-5'>
               {
                HscSuggestion.map((item,index)=>{
        return(
          <Link key={index} to={item.chapter} className="mb-4">
             <h4 className='chapterOne'>{item.title}</h4>
          </Link>
        )
      })
    }
               </div>
               <h4 className='text-center text-black-50'>HSC ICT হ্যান্ড নোট</h4>
                {
                HscChapterDetail.map((item,index)=>{
        return(
          <Link key={index} to={item.chapter} className="mb-4">
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

export default Suggestion