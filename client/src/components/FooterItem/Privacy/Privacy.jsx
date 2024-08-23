import Footer from "../../Footer/Footer"
import Nav from "../../Nav/Nav"
import Newsletter from "../../newsletter/Newsletter"
import TopBar from "../../topbar/TopBar"
import "../Terms/Terms.css"

const Privacy = () => {
  return (
    <div>
        <TopBar/>
        <Nav/>
        <div className="footerItem">
        <div className="container ">
        <div className="faqTitle text-center mt-5 mb-4">
            <span>প্রাইভেসি পলিসি</span> 
            </div>
            <div className="row">
                <div className="col-lg-12 termsAndCondition">
                   <div className="footerSubItem">
                   <h4>সংগ্রহকৃত তথ্য :</h4>
                    <p>আমরা ব্যবহারকারীদের থেকে বিভিন্ন ধরনের তথ্য সংগ্রহ করি, যেমন:</p>
                    <ul>
                        <li><b>ব্যক্তিগত তথ্য : </b>নাম, ইমেইল ঠিকানা, ফোন নম্বর।</li>
                        <li><b>অ্যাকাউন্ট তথ্য : </b>ব্যবহারকারীর লগইন তথ্য, পাসওয়ার্ড।</li>
                        <li><b>পছন্দ এবং শেখার অভ্যাস : </b> ব্যবহারকারীর শেখার প্রগ্রেস, কোর্স সম্পূর্ণতার হার, কুইজ রেজাল্ট।</li>
                        <li> <b>ট্রানজাকশনাল তথ্য :</b> যেকোনো লেনদেনের তথ্য, পেমেন্টের বিবরণ।</li>
                    </ul>
                   </div>



                   <div className="footerSubItem">
                   <h4>তথ্য সুরক্ষা :</h4>
                   <p>আমরা ব্যবহারকারীর ব্যক্তিগত তথ্য সুরক্ষার জন্য যথাসম্ভব সব ধরনের প্রযুক্তিগত এবং সাংগঠনিক ব্যবস্থা গ্রহণ করি। তবে, ইন্টারনেট ব্যবহারের সময় ডেটার সম্পূর্ণ সুরক্ষা নিশ্চিত করা সম্ভব নয়।</p>
                   </div>
                   

                   <div className="footerSubItem">
                   <h4>তৃতীয় পক্ষের সাথে তথ্য শেয়ারিং :</h4>
                    <p>আমরা তৃতীয় পক্ষের সাথে আপনার তথ্য শেয়ার করি না, যদি না:</p>
                    <ul>
                        <li>আপনার সম্মতি থাকে।</li>
                        <li>আইনের প্রয়োজনে।</li>
                        <li>আমাদের সেবার কার্যক্রম পরিচালনার জন্য নির্ধারিত তৃতীয় পক্ষের প্রয়োজন হয়।</li>
                    </ul>
                   </div>


                   <div className="footerSubItem">
                   <h4>আপনার অধিকার :</h4>
                   <p>আপনি আপনার ব্যক্তিগত তথ্য অ্যাক্সেস, সংশোধন, বা মুছে ফেলার অধিকার রাখেন। এছাড়া, যদি আপনি আমাদের বিজ্ঞাপন বা প্রচারমূলক ইমেইল পেতে না চান, আপনি সেগুলো থেকে নাম প্রত্যাহার করতে পারেন।</p>
                   </div>
                    <div className="footerSubItem">
                        <h4>পলিসির পরিবর্তন :</h4>
                    <p>আমরা সময়ে সময়ে আমাদের প্রাইভেসি পলিসি আপডেট করতে পারি। যেকোনো পরিবর্তন কার্যকর হবে যখন আমরা এটি আমাদের ওয়েবসাইটে প্রকাশ করবো।</p>
                    </div>
                    <div className="footerSubItem">
                    <h4>যোগাযোগের ঠিকানা :</h4>
                    <p>আপনার যদি আমাদের প্রাইভেসি পলিসি সম্পর্কে কোনো প্রশ্ন থাকে, তাহলে নিচের ঠিকানায় আমাদের সাথে যোগাযোগ করুন:</p>
                    
                    <ul>
                        <li>[ই-মেইল ঠিকানা]</li>
                        <li>[ফোন নম্বর]</li>
                        <li>[অফিসের ঠিকানা]</li>
                    </ul>
                    </div>
                </div>
            </div>
        </div>

        </div>
        
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default Privacy