
import { useState } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import Footer from '../../Footer/Footer'
import { HscChapterDetail, HscSuggestion } from '../../HSC/HscChapterDetail'
import Nav from '../../Nav/Nav'
import Newsletter from '../../newsletter/Newsletter'
import TopBar from '../../topbar/TopBar'

const ModelTest = () => {
    const [showAnswers, setShowAnswers] = useState(false);

    const toggleAnswers = () => {
        setShowAnswers(!showAnswers);
    };
  return (
        <div>
            <TopBar/>
            <Nav/>
        <div className="container chapterOneMain">
            <div className="row chapterOneMain py-3">
                <div className="col-lg-9">
                <div className="booktop">
                <h1>এইস.এস.সি. আই.সি.টি মডেল টেস্ট</h1>
        </div>
        <div className='py-5'>
        <p className='text-danger text-center'>[পরীক্ষার সময়সীমা মেনে উত্তর প্রদান করুন। সকল প্রশ্নের উত্তর পরিষ্কার এবং সংক্ষিপ্তভাবে দিন।]</p> 
        <h4 className='text-center'><b>এইচএসসি আইসিটি মডেল টেস্ট ২০২৪ </b></h4>    
     <div className='d-flex justify-content-center gap-5'>
        <h5>সময়: ২ ঘণ্টা</h5>
        <h5>পূর্ণমান: ৫০</h5>
     </div>
                <div className='text-center mt-4'>
                <h5>বহুনির্বাচনী প্রশ্ন (MCQ)</h5>
                <h6>(প্রতিটি প্রশ্নের মান ১, মোট ২৫ নম্বর)</h6>
                <hr />
                </div>

                    <div className='row mt-4 justify-content-between'>
                      
                        <div className="col-lg-6">
                        <h5>১. কোনটি ইনপুট ডিভাইস?</h5>
                            <ul>
                                <li>
                                ক/ প্রিন্টার
                                </li>
                                <li>
                                খ/ স্ক্যানার
                                </li>
                                <li>
                                গ/ মনিটর
                                </li>
                                <li>
                                ঘ/ স্পিকার
                                </li>
                            </ul>
                        </div>

                        <div className="col-lg-6">
                        <h5>২. RAM এর সম্পূর্ণ অর্থ কী?</h5>
                            <ul>
                                <li>ক/ Random Access Memory</li>
                                <li>খ/ Read Access Memory</li>
                                <li>গ/ Remote Access Memory</li>
                                <li>ঘ/ Rapid Access Memory</li>
                            </ul>
                        </div>

                                
                        <div className="col-lg-6">
                        <h5>৩. HTML এর কোন ট্যাগটি শিরোনাম প্রদর্শনের জন্য ব্যবহৃত হয়?</h5>
                <ul>
                    <li>ক/ h1</li>
                    <li>খ/ head</li>
                    <li>গ/ header</li>
                    <li>ঘ/ title</li>
                </ul>
                        </div>

                        <div className="col-lg-6">
                        <h5>৪. কোনটি সাইবার নিরাপত্তার সাথে সম্পর্কিত নয়?</h5>
                            <ul>
                                <li>ক/ ফায়ারওয়াল</li>
                                <li>খ/ অ্যান্টিভাইরাস</li>
                                <li>গ/ গ্রাফিক্স কার্ড</li>
                                <li>ঘ/ এনক্রিপশন</li>
                            </ul>
                        </div>
                
                        <div className="col-lg-6">
                        <h5>৫. SQL এ কোনটি ডেটা আপডেট করার কমান্ড?</h5>
                            <ul>
                                <li>ক/ SELECT</li>
                                <li>খ/ INSERT</li>
                                <li>গ/ UPDATE</li>
                                <li>ঘ/ DELETE</li>
                            </ul>
                        </div>
                        

                        <div className="col-lg-6">
                        <h5>৬. কোনটি ইন্টারনেট প্রোটোকল (IP) এর একটি সংস্করণ নয়?</h5>
                            <ul>
                                <li>ক/ IPv4</li>
                                <li>খ/ IPv5</li>
                                <li>গ/ IPv6</li>
                                <li>ঘ/ IPv7</li>
                            </ul>
                        </div>
               
                        <div className="col-lg-6">
                        <h5>৭. ই-কমার্স এর কোন অংশটি অর্থ প্রদান সংক্রান্ত?</h5>
                            <ul>
                                <li>ক/ ই-ব্যাংকিং</li>
                                <li>খ/ ই-মার্কেটিং</li>
                                <li>গ/ ই-লগিস্টিক্স</li>
                                <li>ঘ/ ই-লিডারশিপ</li>
                            </ul>
                        </div>

                        <div className="col-lg-6">
                        <h5>৮. ফ্লোচার্টে সিদ্ধান্ত নেওয়ার জন্য কোন প্রতীকটি ব্যবহৃত হয়?</h5>
                            <ul>
                                <li>ক/ আয়তক্ষেত্র</li>
                                <li>খ/ ত্রিভুজ</li>
                                <li>গ/ রম্বস</li>
                                <li>ঘ/ বৃত্ত</li>
                            </ul>
                        </div>
               
                        <div className="col-lg-6">
                        <h5>৯. কম্পিউটারে কোনটি শুধুমাত্র পড়া যায়?</h5>
                            <ul>
                                <li>ক/ RAM</li>
                                <li>খ/ ROM</li>
                                <li>গ/ HDD</li>
                                <li>ঘ/ SSD</li>
                            </ul>
                        </div>

                        <div className="col-lg-6">
                        <h5>১০. নিম্নলিখিত কোনটি ডিজিটাল কনটেন্টের উদাহরণ?</h5>
                            <ul>
                                <li>ক/ সংবাদপত্র</li>
                                <li>খ/ ব্লগ পোস্ট</li>
                                <li>গ/ মুদ্রিত বই</li>
                                <li>ঘ/ ফটোকপি</li>
                            </ul>
                        </div>
                        
                        <div className="col-lg-6">
                        <h5>১১. C প্রোগ্রামিং ভাষায়, কোন অপারেটরটি লজিক্যাল 'AND' বোঝায়?</h5>
                            <ul>
                                <li>ক/ &&</li>
                                <li>খ/ ||</li>
                                <li>গ/ !</li>
                                <li>ঘ/ ==</li>
                            </ul>
                        </div>

                        <div className="col-lg-6">
                        <h5>১২. কোনটিতে স্থায়ীভাবে ডেটা সংরক্ষণ করা হয়?</h5>
                            <ul>
                                <li>ক/ RAM </li>
                                <li>খ/ ক্যাশে মেমোরি</li>
                                <li>গ/ হার্ড ডিস্ক</li>
                                <li>ঘ/ রেজিস্টার</li>
                            </ul>
                        </div>
                        
                        <div className="col-lg-6">
                        <h5>১৩. TCP/IP মডেলের কোন স্তরে IP অ্যাড্রেস ব্যবহৃত হয়?</h5>
                            <ul>
                                <li>ক/ অ্যাপ্লিকেশন লেয়ার</li>
                                <li>খ/ ট্রান্সপোর্ট লেয়ার</li>
                                <li>গ/ ইন্টারনেট লেয়ার</li>
                                <li>ঘ/ নেটওয়ার্ক অ্যাক্সেস লেয়ার</li>
                            </ul>
                        </div>

                        <div className="col-lg-6">
                        <h5>১৪. কোনটি প্রথম প্রোগ্রামিং ভাষা?</h5>
                            <ul>
                                <li>ক/ FORTRAN  </li>
                                <li>খ/ COBOL </li>
                                <li>গ/ BASIC </li>
                                <li>ঘ/ C</li>
                            </ul>
                        </div>
               
                        <div className="col-lg-6">
                        <h5>১৫. কোনটি সাইবার আক্রমণের উদাহরণ?</h5>
                            <ul>
                                <li>ক/ ফিশিং</li>
                                <li>খ/ স্পামিংর</li>
                                <li>গ/ ডিডোস আক্রমণ</li>
                                <li>ঘ/ উল্লিখিত সবগুলোই</li>
                            </ul>
                        </div>

                        <div className="col-lg-6">
                        <h5>১৬. কোনটি একক ইউজার অপারেটিং সিস্টেমের উদাহরণ?</h5>
                            <ul>
                                <li>ক/ উইন্ডোজ   </li>
                                <li>খ/ লিনাক্স  </li>
                                <li>গ/ MS-DOS </li>
                                <li>ঘ/ ম্যাকওএস</li>
                            </ul>
                        </div>

                        <div className="col-lg-6">
                        <h5>১৭. মাইক্রোসফট ওয়ার্ডে, টেক্সটের ফন্ট আকার পরিবর্তনের জন্য কোন মেনু ব্যবহৃত হয়?</h5>
                            <ul>
                                <li>ক/ ফাইল </li>
                                <li>খ/ হোম </li>
                                <li>গ/ ইন্সার্ট</li>
                                <li>ঘ/ ভিউ</li>
                            </ul>
                        </div>

                        <div className="col-lg-6">
                        <h5>১৮. ডাটাবেসের মধ্যে টেবিলের মধ্যে সম্পর্ক নির্ধারণ করার জন্য কোনটি ব্যবহৃত হয়?</h5>
                            <ul>
                                <li>ক/ প্রাইমারি কী   </li>
                                <li>খ/ ফরেন কী  </li>
                                <li>গ/ ইনডেক্স  </li>
                                <li>ঘ/ ভিউ</li>
                            </ul>
                        </div>

                        <div className="col-lg-6">
                        <h5>১৯. URL এর সম্পূর্ণ অর্থ কী?</h5>
                            <ul>
                                <li>ক/ Uniform Resource Locator </li>
                                <li>খ/ Unified Resource Locator </li>
                                <li>গ/ Universal Resource Locator</li>
                                <li>ঘ/ Uniform Research Locator</li>
                            </ul>
                        </div>

                        <div className="col-lg-6">
                        <h5>২০. কৃত্রিম বুদ্ধিমত্তার (AI) কোন উপাদানটি প্রক্রিয়া করার ক্ষমতা রাখে?</h5>
                            <ul>
                                <li>ক/ মেশিন লার্নিং </li>
                                <li>খ/ ডিপ লার্নিং </li>
                                <li>গ/ নিউরাল নেটওয়ার্ক</li>
                                <li>ঘ/ উল্লিখিত সবগুলোই</li>
                            </ul>
                        </div>

                        <div className="col-lg-6">
                        <h5>২১. এক্সেল এ, সেল A1 এবং B1 এর যোগফল নির্ণয় করতে কোন ফর্মুলা ব্যবহার হবে?</h5>
                            <ul>
                                <li>ক/ =ADD(A1+B1)</li>
                                <li>খ/ =SUM(A1)</li>
                                <li>গ/ =TOTAL(A1+B1)</li>
                                <li>ঘ/ =SUMMATION(A1+B1)</li>
                            </ul>
                        </div>

                        <div className="col-lg-6">
                        <h5>২২. কোনটি লজিক গেটের প্রকারভেদ নয়?</h5>
                            <ul>
                                <li>ক/ AND  </li>
                                <li>খ/ OR  </li>
                                <li>গ/ NOT </li>
                                <li>ঘ/ SUM</li>
                            </ul>
                        </div>

                        <div className="col-lg-6">
                        <h5>২৩. কম্পিউটার নেটওয়ার্কে ডেটা আদান-প্রদানের জন্য কোন মাধ্যমটি ব্যবহার হয়?</h5>
                            <ul>
                                <li>ক/ অপটিক্যাল ফাইবার</li>
                                <li>খ/ কোএক্সিয়াল কেবল</li>
                                <li>গ/ টুইস্টেড পেয়ার</li>
                                <li>ঘ/ উল্লিখিত সবগুলোই</li>
                            </ul>
                        </div>

                        <div className="col-lg-6">
                        <h5>২৪. কোনটি প্রাইমারি মেমোরি?</h5>
                            <ul>
                                <li>ক/ RAM   </li>
                                <li>খ/ হার্ড ডিস্ক  </li>
                                <li>গ/ পেন ড্রাইভ </li>
                                <li>ঘ/ সিডি</li>
                            </ul>
                        </div>

                        <div className="col-lg-6">
                        <h5>২৫. ইন্টারনেটে কোনটি একটি সেফটি মেজার নয়?</h5>
                <ul>
                    <li>ক/ শক্তিশালী পাসওয়ার্ড ব্যবহার</li>
                    <li>খ/ ফায়ারওয়াল </li>
                    <li>গ/ ক্লাউড স্টোরেজ</li>
                    <li>ঘ/ অ্যান্টিভাইরাস সফটওয়্যার</li>
                </ul>
                        </div>
               

                        
                    </div>


                    <button className='btn2 mt-4 fs-5 w-100' onClick={toggleAnswers}>
                বহুনির্বাচনী প্রশ্নের উত্তরগুলো মিলিয়ে দেখুন
            </button>
            {showAnswers && (
                <p className='answare text-primary'>
                    বহুনির্বাচনী প্রশ্নের উত্তরসমূহ: <br /> ১. খ ২. ক ৩. ক ৪. গ ৫. গ ৬. ঘ ৭. ক ৮. গ ৯. খ ১০. খ ১১. ক ১২. গ ১৩. গ ১৪. ক ১৫. ঘ ১৬. গ ১৭. খ ১৮. খ ১৯. ক ২০. ঘ ২১. খ ২২. ঘ ২৩. ঘ ২৪. ক ২৫. গ
                </p>
            )}

                    <div className='text-center mt-4'>
                <h5>সৃজনশীল প্রশ্ন (CQ)</h5>
                <h6>(প্রতিটি প্রশ্নের মান ১২.৫, মোট ২৫ নম্বর)</h6>
                <hr />
                </div>
                <div>
                    <h5>১. কম্পিউটার নেটওয়ার্ক এবং ডেটা সিকিউরিটি :</h5>
                    <ul className='list-unstyled'>
                    <li>ক/ নেটওয়ার্ক প্রোটোকল কী? (৩ নম্বর)</li>
                    <li>খ/ ইন্টারনেট প্রোটোকল (IP) এবং ডোমেইন নেম সিস্টেম (DNS) এর ভূমিকা ব্যাখ্যা করুন। (৪.৫ নম্বর)</li>
                    <li>গ/ ডেটা এনক্রিপশনের প্রয়োজনীয়তা এবং কার্যকারিতা নিয়ে আলোচনা করুন। (৫ নম্বর)</li>
                    
                    </ul>

                    <h5>২. প্রোগ্রামিং ভাষা এবং অ্যালগরিদম :</h5>
                    <ul className='list-unstyled'>
                    <li>ক/ অ্যালগরিদম কী? উদাহরণসহ ব্যাখ্যা করুন। (৩ নম্বর)</li>
                    <li>খ/ সি প্রোগ্রামিং ভাষার ভেরিয়েবল এবং ডেটা টাইপ সম্পর্কে আলোচনা করুন। (৪.৫ নম্বর)</li>
                    <li>গ/ একটি ফাংশন লেখার অ্যালগরিদম তৈরি করুন যা দুইটি সংখ্যার গুণফল নির্ণয় করবে। (৫ নম্বর)</li>
                    </ul>
                </div>

                
                
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

export default ModelTest