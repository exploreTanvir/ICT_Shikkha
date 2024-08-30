import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import { Chpt4SubDetail } from '../../../chapterSub/Chpt4Sub/Chpt4SubDetail'
import Editor from '../../../Editor/Editor'
import Footer from '../../../Footer/Footer'
import Nav from '../../../Nav/Nav'
import Newsletter from '../../../newsletter/Newsletter'
import TopBar from '../../../topbar/TopBar'
import "../../chapter1/GlobalVillage/GlobalVillage.css"
import "./Text_Formatting.css"

const TextFormetting = () => {
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
            <h3> টেক্সট ফরমেটিং (Text Formetting)</h3>
        </div>

       

        <p className='mt-4'>ওয়েব পেজের লেখা বা text -কে সঠিক আকারে (size) , রুপে ও দৃষ্টিনন্দন করে উপস্থাপন করার পদ্ধতিই টেক্সট ফরমেটিং। CSS ব্যবহার না করেই শুধুমাত্র ট্যাগ ব্যবহার করেই আমরা টেক্সট ফরমেটিং করতে পারি। </p>
        <p>নিচের ছকে কিছু গুরুত্বপূর্ণ ফরমেটিং ট্যাগ ও তাদের কাজ বর্ণনা করা হলোঃ </p>
        
        <table className='textFormetting'>
        <thead>
            <tr>
                <th>ট্যাগের নাম</th>
                <th>বর্ণনা</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>&lt;b&gt;</td>
                <td>লেখাকে বোল্ড করতে ব্যবহৃত হয়</td>
            </tr>
            <tr>
                <td>&lt;i&gt;</td>
                <td>লেখাকে ইটালিক করতে ব্যবহৃত হয়</td>
            </tr>
            <tr>
                <td>&lt;u&gt;</td>
                <td>লেখায় আন্ডারলাইন করতে ব্যবহৃত হয়</td>
            </tr>
            <tr>
                <td>&lt;sub&gt;</td>
                <td>সাবস্ক্রিপ্ট টেক্সট দেখাতে ব্যবহৃত হয়</td>
            </tr>
            <tr>
                <td>&lt;sup&gt;</td>
                <td>সুপারস্ক্রিপ্ট টেক্সট দেখাতে ব্যবহৃত হয়</td>
            </tr>
        </tbody>
    </table>
        <p>b , i ও u ট্যাগের ব্যবহার নিচের ictShikkha -এর html  viewer -এ দেখানো হলো।<br/><br/>
        <i className='text-primary'>[নিজেদের মত Edit করে তার আউটপুটও দেখে নিতে পারো যা তোমাদের ভালোভাবে বুঝতে সহায়ক হবে। ]</i>
        </p>
        
        
        <Editor cText="" jsText=""  text="<!DOCTYPE html>
                        <html>
                        <head>
                            <title>Text Formatting</title>
                        </head>
                        <body>
                            <p>This is normal text</p>
                            <b>This is bold text</b> <br/>
                            <i>This is italic text</i> <br/>
                            <u>This is underlined text</u>
                        </body>
                        </html>"/>
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

export default TextFormetting