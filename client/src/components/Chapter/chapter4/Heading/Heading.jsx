import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import { Chpt4SubDetail } from '../../../chapterSub/Chpt4Sub/Chpt4SubDetail'
import Editor from '../../../Editor/Editor'
import Footer from '../../../Footer/Footer'
import Nav from '../../../Nav/Nav'
import Newsletter from '../../../newsletter/Newsletter'
import TopBar from '../../../topbar/TopBar'
import "../../chapter1/GlobalVillage/GlobalVillage.css"

const Heading = () => {
  return (
        <div>
            <TopBar/>
            <Nav/>
        <div className="container chapterOneMain">
            <div className="row chapterOneMain py-3">
                <div className="col-lg-9">
                <div className="booktop">
            <h1>চতুর্থ অধ্যায়</h1>
            <h3>ওয়েব ডিজাইন পরিচিতি ও HTML</h3>
            <h3> হেডিং (Heading)</h3>
        </div>

       

        <p className='mt-4'>খবরের কাগজের Heading বা শিরোনামের মত ওয়েব পেজেও বিভিন্ন সাইজের হেডিং ব্যবহারের প্রয়োজন পড়ে। হেডিং -এর ফন্ট সাইজ অপেক্ষাকৃত বড় ও বোল্ড হয়ে থাকে। হেডিং ট্যাগ হিসেবে h1 থেকে h6 মোট ৬টি ট্যাগ আছে।</p>
        <p>h1 সবথেকে বড় এবং ক্রমান্বয়ে ছোট হতে হতে h6 সবথেকে ছোট ফন্টের হেডিং লিখতে ব্যবহৃত হয়। h1 থেকে h6 এর ব্যবহার নিচের ictoons -এর Html Viewer -এ দেখানো হলো।</p>
        
        
        <p>যে ট্রান্সমিশনে ডেটা বা তথ্য পর্যায়ক্রমে ১ বিট করে আদান প্রদান করে তাকে সিরিয়াল ডেটা ট্রান্সমিশন বলে। ইউএসবি (USB: Universal Serial Bus) পোর্ট একটি সিরিয়াল ট্রান্সমিশনের উদাহরণ। <br/><br/>
        <i className='text-primary'>[ নিজের মত এডিট করে তার ফলাফল দেখে শিখে নাও আরো ভালোভাবে। ]</i>
        </p>
        
        
        <Editor cText="" jsText="" text={`<!DOCTYPE html>
  <html>
    <head>
      <title>Html Heading</title>
    </head>
    <body>
         <h1>This is heading 1</h1>
         <h2>This is heading 2</h2>
         <h3>This is heading 3</h3>
         <h4>This is heading 4</h4>
         <h5>This is heading 5</h5>
         <h6>This is heading 6</h6>
    </body>
  </html>`}/>                      
                </div>
                <div className="col-lg-3 ">
                <div className="chapterLeft">
                {
      Chpt4SubDetail.map((item,index)=>{
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

export default Heading