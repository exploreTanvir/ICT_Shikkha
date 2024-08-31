import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import { Chpt4SubDetail } from '../../../chapterSub/Chpt4Sub/Chpt4SubDetail'
import Editor from '../../../Editor/Editor'
import Footer from '../../../Footer/Footer'
import Nav from '../../../Nav/Nav'
import Newsletter from '../../../newsletter/Newsletter'
import TopBar from '../../../topbar/TopBar'
import "../../chapter1/GlobalVillage/GlobalVillage.css"

const SubSup = () => {
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
            <h3>সাবস্ক্রিপ্ট ও সুপারস্ক্রিপ্ট (Sub & Sup)</h3>
        </div>

       

        <p className='mt-4'>ওয়েব পেজে কোন লেখাকে স্বাভাবিক লেখার উপরে কিংবা নিচে প্রদর্শনের প্রয়োজন হয়। উপরের লেখাকে বলা হয় সুপারস্ক্রিপ্ট। যেমনঃ x2, এখানে x এর উপরে 2 পাওয়ার হিসেবে আছে যা একটি সুপারস্ক্রিপ্ট লেখা। কোন লেখাকে সুপারস্ক্রিপ্ট হিসেবে দেখাতে হলে উক্ত লেখাকে <sup> </sup> ট্যাগের মধ্যে লিখতে হয়। এখানে ‘sup’ মূলত Superscript এর প্রথম তিনটি বর্ণ। </p>
        <p>কোন স্বাভাবিক লেখার নিচের লেখাকে বলা হয় সাবস্ক্রিপ্ট। যেমনঃ x2, এখানে x এর নিচে 2 বেজ হিসেবে আছে যা একটি সাবস্ক্রিপ্ট লেখা। কোন লেখাকে সাবস্ক্রিপ্ট হিসেবে দেখাতে হলে উক্ত লেখাকে <sub> </sub> ট্যাগের মধ্যে লিখতে হয়। এখানে ‘sub’ মূলত Subscript এর প্রথম তিনটি বর্ণ। </p>
        
        
        <p>sup ও sub ট্যাগের ব্যবহার নিচে ictShikkha -এর html viewer এ দেখানো হলো।  <br/><br/>
        <i className='text-primary'>[ নিজের মত এডিট করে তার ফলাফল দেখে শিখে নাও আরো ভালোভাবে। ]</i>
        </p>
        
        
        <Editor cText="" jsText=""  text={`<!DOCTYPE html>
                        <html>
                        <head>
                            <title>Html Heading</title>
                        </head>
                        <body>
                        <p> (a+b)<sup>2</sup> = a<sup>2</sup>+ 2ab + b<sup>2</sup> </p>

                        <p> f<sub>n</sub> = f<sub>n-1</sub> + <sub>n-2</sub> </p>
                        </body>
                        </html>`}/>
                         <p className='mt-3'>নিজে করে দেখোঃ <br/><b>f<sub>n-1</sub> = x.( y<sup>2</sup> + z<sup>2</sup> )<sup>n-1</sup> + z<sub>n</sub></b></p>
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

export default SubSup