import { Link } from 'react-router-dom/cjs/react-router-dom.min'

import { Chpt1SubDetail } from '../../../chapterSub/Chpt1Sub/Chpt1SubDetail'
import Footer from '../../../Footer/Footer'
import Nav from '../../../Nav/Nav'
import Newsletter from '../../../newsletter/Newsletter'
import TopBar from '../../../topbar/TopBar'
import "../GlobalVillage/GlobalVillage.css"

const NanoTechnology = () => {
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
            <h2>ন্যানোটেকনোলজি (Nano Technology)</h2>
        </div>
        <p className='mt-4'>গ্রিক শব্দ ‘nanos‘ থেকে ন্যানো শব্দটির উৎপত্তি। ন্যানোমিটার হলো পরিমাপের একক (১ ন্যানোমিটার = ১০-৯ মিটার)। বিজ্ঞান এবং প্রযুক্তি ব্যবহার করে 1 থেকে 100 ন্যানোমিটার আকৃতির কোনো কিছু তৈরি করা এবং ব্যবহার করাকে ন্যানোটেকনোলজি বলে। এই আকৃতির কোনো কিছু তৈরি করা হলে তাকে সাধারণভাবে ন্যানো-পার্টিকেল বলে।</p>
        <p>এক  ন্যানোমিটার মানুষের চুলের ব্যাসের ৮০,০০০ ভাগের একভাগ। একটি দ্রব্যের বড় আকৃতিতে যে ধর্ম বা গুণাগুণ থাকে, ন্যানো পার্টিকেল হলে তার ভেতর কোয়ান্টাম পদার্থ বিজ্ঞানের প্রভাব দেখা যেতে শুরু করে বলে সেই ধর্ম বা গুণাগুন সম্পূর্ণ ভিন্ন হতে পারে। </p>
        
        <h4><b>ন্যানো প্রযুক্তি দুটি পদ্ধতিতে ব্যবহৃত হয় : </b></h4>
            <ul>
                <li><b>ক্ষুদ্র থেকে বৃহৎ (Bottom Up) : </b>এই পদ্ধতিতে ক্ষুদ্রাতিক্ষুদ্র আণবিক উপাদান থেকে শুরু করে ধীরে ধীরে বড় আকৃতির কোনো জিনিস তৈরি করা হয়।</li>
                <li><b>বৃহৎ থেকে ক্ষুদ্র (Top Down) : </b>এই পদ্ধতিতে একটু বড় আকৃতির কিছু থেকে শুরু করে তাকে ভেঙে ছোট করতে করতে কোনো বস্তুকে ক্ষুদ্রাকৃতির আকৃতিতে পরিণত করা হয়  </li>
    
            </ul>   
            <h4><b>ন্যানো প্রযুক্তির ব্যবহার :</b></h4>
            <ul>
                <li>খেলাধুলা ও ক্রিয়া সরঞ্জাম তৈরিতে। </li>
                <li>খাদ্যশিল্পে</li>
                <li>ন্যানোম্যাটেরিয়াল তৈরিতে। </li>
                <li>কম্পিউটার হার্ডওয়্যার তৈরিতে। </li>
                <li>ব্যাটারী শিল্পে। </li>
                <li>সৌর কোষ তৈরিতে এবং ব্যাটারী তৈরিতে। </li>
                <li>ইলেকট্রনিক্স শিল্পে। </li>
                <li>জ্বালানী তৈরিতে। </li>
                <li>রাসায়নিক শিল্পে। </li>
                <li>১চিকিৎসা ক্ষেত্রে।</li>
               
            </ul>           
            <h4><b> অসুবিধা :</b></h4>
            <ul>
                <li>পরিবেশ বান্ধব না।</li>
                <li>সবার কাছে এর গ্রহণযোগ্যতা নাই। </li>
                <li>আনবিক অস্ত্র তৈরি করা হয় যা অধিকতর ধ্বংসাত্বক। </li>
                <li>শারিরিক সমস্যা হয়।</li>
                <li>এই প্রযুক্তি অধিকমূল্যের জন্য সবাই ব্যবহার করতে পারে না।</li>
                <li>অত্যন্ত ব্যয়বহুল।</li>
               
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

export default NanoTechnology