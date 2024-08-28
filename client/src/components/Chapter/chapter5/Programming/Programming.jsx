import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import { Chpt5SubDetail } from '../../../chapterSub/Chpt5Sub/Chpt5SubDetail'
import Footer from '../../../Footer/Footer'
import Nav from '../../../Nav/Nav'
import Newsletter from '../../../newsletter/Newsletter'
import TopBar from '../../../topbar/TopBar'
import "../../chapter1/GlobalVillage/GlobalVillage.css"

const Programming = () => {
  return (
        <div>
            <TopBar/>
            <Nav/>
        <div className="container chapterOneMain">
            <div className="row chapterOneMain py-3">
                <div className="col-lg-9">
                <div className="booktop">
                <h1>পঞ্চম অধ্যায়</h1>
            <h3>প্রোগ্রামিং ভাষা</h3>
            <h3>প্রোগ্রামের ধারণা (Concept Of Program)</h3>
        </div>

        <h4 className='mt-4'><b>প্রোগ্রামের ধারণা (Concept Of Program) : </b></h4>

            <p className='mt-4'>আমরা যদি কম্পিউটার ব্যবহার করে একটি কাজ করতে চাই তবে কম্পিউটারকে নির্দেশ দিতে হয়। কারন কম্পিউটারের নিজ থেকে কাজ করার কোনো ক্ষমতা নেই। কম্পিউটার যে কাজগুলো করে তাকে সাধারণত কম্পিউটার এর ভাষায় বলা হয় task। আর এই কাজগুলো করনোর জন্য যে নির্দেশ দেয়া হয় তাকে বলা হয় instruction । </p>
            <p>কম্পিউটার ব্যবহার করে যখন আমরা কোনো সমস্যা সমাধান করবো তখন সেই সমস্যার উপর নির্ভর করে আমাদের এক বা একাধিক নির্দেশ বা instruction দেওয়ার প্রয়োজন হয়। একটি সমস্যা সমাধানের জন্য আমাদের এই নির্দেশ বা instruction এর সমন্বয়ে তৈরী হয় ঐ সমস্যা সমাধানের প্রোগ্রাম(program)।</p>
            <p>যে ব্যাক্তি এই নির্দেশের সমন্বয় করে একটি প্রোগ্রাম(program) তৈরি করেন বা লিখেন তাকে বলা হয় প্রোগ্রামার(programmer)। এবং একজন প্রোগ্রামারের একটি প্রোগ্রাম তৈরি করার এই প্রক্রিয়াকে বলা হয় প্রোগ্রামিং (programming)। </p>
            <p>লেখালেখির এই কাজটি তাহলে কোন ভাষায় করা হয়? একটি প্রোগ্রাম লিখার জন্য আমরা যে ভাষার ব্যবহার করি তাকে আমরা বলি প্রোগ্রামিং ল্যাংগুয়েজ(programming language) বা প্রোগ্রামের ভাষা। এই প্রোগ্রামের ভাষা সম্পর্কে আমরা জানবো পরবর্তী অংশে।</p>

            

                </div>
                <div className="col-lg-3 ">
       
                <div className="chapterLeft">
                {
      Chpt5SubDetail.map((item,index)=>{
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

export default Programming