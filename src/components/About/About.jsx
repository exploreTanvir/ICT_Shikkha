import aboutIcon from "../../assets/aboutIcon.png"
import aboutImg from "../../assets/aboutImg.png"
import touhidSir from "../../assets/touhidSir34.png"
import "./about.css"

const About = () => {
  return (
    <section className="about">
<div className="advice">
<div className="container">
        <div className="faqTitle text-center mt-5 mb-4">
         <span>আমাদের সম্পর্কে বিস্তারিত</span> 
         </div>
            <div className="row align-items-center">
                <div className="col-5">
                    <img src={aboutImg} className="aboutImg w-100" alt="" />
                </div>
                <div className="col-lg-7 col-sm-12">
                    <div className="row mb-2">
                    <div className="col-lg-6 col-sm-12 px-4">
                        <div className="d-flex gap-3">
                            <i className="fa-solid fa-check fs-4"></i>
                            <h4>জটিল বিষয়গুলোর সরল ব্যাখ্যা</h4>
                        </div>
                        <p>কোনো বিষয় জটিল হলে তা সহজ ভাষায় ব্যাখ্যা করা হয়, যাতে শিক্ষার্থীরা সহজেই বুঝতে পারে। কঠিন বিষয়গুলোতে উদাহরণ এবং সরলীকৃত ব্যাখ্যার মাধ্যমে শিক্ষার্থীদের জন্য বোঝাপড়া সহজ করে তোলা হয়।</p>
                    </div>
                    <div className="col-lg-6 col-sm-12 px-4">
                        <div className="d-flex gap-3">
                            <i className="fa-solid fa-check fs-4"></i>
                            <h4>অধ্যায়ভিত্তিক অনুশীলনী</h4>
                        </div>
                        <p>প্রতিটি অধ্যায়ের জন্য বিশেষ অনুশীলনী প্রশ্ন প্রদান করা হয়, যা শিক্ষার্থীদের সেই অধ্যায়ের মূল ধারণাগুলো প্র্যাকটিস করতে সহায়তা করে। অনুশীলনীর মাধ্যমে তারা তাদের দুর্বলতা খুঁজে বের করে এবং তাদের উন্নতির সুযোগ পায়।</p>
                    </div>
                    </div>
                    <div className="row mb-2">
                    <div className="col-lg-6 col-sm-12 px-4">
                        <div className="d-flex gap-3">
                            <i className="fa-solid fa-check fs-4"></i>
                            <h4>চিত্র সহ ব্যাখ্যা</h4>
                        </div>
                        <p>বিভিন্ন বিষয়বস্তুর চিত্রসহ ব্যাখ্যা প্রদান করা হয়। চিত্রের মাধ্যমে জটিল বিষয়গুলো সহজে বোঝা যায় এবং শিক্ষার্থীদের দৃষ্টিভঙ্গি আরো পরিষ্কার হয়।</p>
                    </div>
                    <div className="col-lg-6 col-sm-12 px-4">
                        <div className="d-flex gap-3">
                            <i className="fa-solid fa-check fs-4"></i>
                            <h4>গবেষণা ও আলোচনা বিষয়ক প্রশ্ন</h4>
                        </div>
                        <p>গবেষণা এবং আলোচনাভিত্তিক প্রশ্নগুলো শিক্ষার্থীদের চিন্তাশক্তি বৃদ্ধি করতে সহায়ক। এর মাধ্যমে তারা নতুন দৃষ্টিকোণ থেকে বিষয়গুলোকে বিশ্লেষণ করতে শিখে।</p>
                    </div>
                    </div>
                    <div className="row mb-2">
                    <div className="col-lg-6 col-sm-12 px-4">
                        <div className="d-flex gap-3">
                            <i className="fa-solid fa-check fs-4"></i>
                            <h4>অনলাইন রিসোর্সের তালিকা</h4>
                        </div>
                        <p>বিষয়ভিত্তিক অনলাইন রিসোর্স এবং ভিডিও লিঙ্কের তালিকা প্রদান করা হয়। শিক্ষার্থীরা এই রিসোর্স ব্যবহার করে বিষয়গুলো সম্পর্কে আরও গভীর জ্ঞান অর্জন করতে পারে।</p>
                    </div>
                    <div className="col-lg-6 col-sm-12 px-4">
                        <div className="d-flex gap-3">
                            <i className="fa-solid fa-check fs-4"></i>
                            <h4>শিক্ষকের নোট ও টিপস</h4>
                        </div>
                        <p>অভিজ্ঞ শিক্ষকদের নোট এবং পড়ার টিপস প্রদান করা হয়। এটি শিক্ষার্থীদের জন্য বিষয়গুলো সহজে বোঝার এবং দ্রুত আয়ত্ত করার ক্ষেত্রে সহায়ক হয়।</p>
                    </div>
                    </div>
                   <div className="row mb-2">
                   <div className="col-lg-6 col-sm-12 px-4">
                        <div className="d-flex gap-3">
                            <i className="fa-solid fa-check fs-4"></i>
                            <h4>পরীক্ষা প্রস্তুতির পরামর্শ</h4>
                        </div>
                        <p>পরীক্ষায় ভালো ফলাফল করার জন্য বিভিন্ন পরামর্শ এবং কৌশল প্রদান করা হয়। এর মাধ্যমে শিক্ষার্থীরা পরীক্ষায় দক্ষতার সাথে উত্তর প্রদান করতে পারে।</p>
                    </div>
                    <div className="col-lg-6 col-sm-12 px-4">
                        <div className="d-flex gap-3">
                            <i className="fa-solid fa-check fs-4"></i>
                            <h4>বিভিন্ন মডেল টেস্ট পেপার</h4>
                        </div>
                        <p>বিভিন্ন ধরনের মডেল টেস্ট পেপার তৈরি করা হয় যা শিক্ষার্থীদের পরীক্ষা প্রস্তুতির সময় সহায়ক হয়। এগুলো ব্যবহারের মাধ্যমে শিক্ষার্থীরা তাদের দুর্বলতা খুঁজে বের করে এবং তা দূর করতে পারে।</p>
                    </div>
                   </div>
                </div>
            </div>
        </div>
</div>
   <div className="writing">
   <div className="container ">
    <div className="faqTitle text-center mt-5 mb-4">
         <span>প্রতিষ্ঠাতার বক্তব্য</span> 
         </div>
        <div className="row">
            <div className="col-lg-7 col-sm-12 aboutLeft">
            <p>তথ্য ও যোগাযোগ প্রযুক্তি (ICT) বর্তমানে বিশ্বজুড়ে অত্যন্ত গুরুত্বপূর্ণ একটি বিষয় হিসেবে বিবেচিত হচ্ছে। এটি শুধুমাত্র আমাদের দৈনন্দিন জীবনকে সহজতর করে তুলেছে না, বরং অর্থনীতি, শিক্ষা, স্বাস্থ্যসেবা, ব্যবসা-বাণিজ্য, এবং সমাজের প্রতিটি ক্ষেত্রে বিপ্লব ঘটিয়েছে। তথ্যপ্রযুক্তি এমন একটি শক্তিশালী মাধ্যম হয়ে উঠেছে যা মানুষের জীবনযাত্রাকে আরও উন্নত এবং সহজ করে তুলেছে।</p>
            <p>উচ্চ মাধ্যমিক পর্যায়ে তথ্য ও যোগাযোগ প্রযুক্তি (ICT) একটি অত্যন্ত গুরুত্বপূর্ণ বিষয় হিসেবে ধরা হয়। শিক্ষার্থীদের জন্য এই বিষয়ে ভালো ফলাফল অর্জন করা কিছুটা চ্যালেঞ্জিং হতে পারে, কারণ এটি অন্যান্য বিষয়গুলোর মতো দ্বিতীয় পত্র নেই যেখানে একটি পত্রে কম নম্বর পেলে অন্য পত্রে পুষিয়ে নেওয়া সম্ভব হয়। এ কারণে শিক্ষার্থীদের এই বিষয়ে বিশেষভাবে মনোযোগ দিতে হয়।</p>
            <p>তথ্য ও যোগাযোগ প্রযুক্তি বিষয়ে শিক্ষার্থীদের মোট ৭৫ নম্বরের পরীক্ষা দিতে হয়। এর মধ্যে ৫০ নম্বরের লিখিত পরীক্ষা এবং ২৫ নম্বরের বহুনির্বাচনী পরীক্ষা অন্তর্ভুক্ত। অনেক শিক্ষার্থী শুধুমাত্র থিওরি অংশে জোর দেয় এবং বহুনির্বাচনী অংশে পর্যাপ্ত অনুশীলন করে না। ফলস্বরূপ, তারা এই অংশে কম নম্বর পেয়ে থাকে এবং তাদের কাঙ্ক্ষিত গ্রেড, যেমন A+, অর্জন করতে ব্যর্থ হয়। তাই, শিক্ষার্থীদের উভয় অংশেই সমান গুরুত্ব দিতে হবে এবং সৃজনশীল প্রশ্নের পাশাপাশি নৈর্ব্যক্তিক প্রশ্নেরও ভালো অনুশীলন করতে হবে।</p>
            <p>শিক্ষা ক্ষেত্রে তথ্যপ্রযুক্তি একটি বড় পরিবর্তন নিয়ে এসেছে। অনলাইন শিক্ষা, ই-লার্নিং প্ল্যাটফর্ম এবং ডিজিটাল ক্লাসরুমের মাধ্যমে শিক্ষার্থীরা আরও সহজে এবং দ্রুত জ্ঞান অর্জন করতে পারছে। এছাড়া, শিক্ষকদের জন্য নতুন শিক্ষণ পদ্ধতি প্রবর্তন করা হয়েছে।</p>
            <p>কৃত্রিম বুদ্ধিমত্তা আরও উন্নত হয়ে ওঠার মাধ্যমে অনেক কাজের প্রক্রিয়া স্বয়ংক্রিয় হবে এবং নতুন নতুন সুযোগ তৈরি হবে। তথ্যপ্রযুক্তি আমাদের দৈনন্দিন জীবনে বিশাল পরিবর্তন এনেছে। স্মার্টফোন, ইন্টারনেট, স্মার্ট হোম ডিভাইস এবং বিভিন্ন অ্যাপ্লিকেশনের মাধ্যমে আমরা দৈনন্দিন কাজকর্ম আরও দ্রুত এবং সহজে সম্পন্ন করতে পারি।</p>
            <p>তথ্য ও যোগাযোগ প্রযুক্তি (ICT) বলতে আমরা সেই প্রযুক্তির সমষ্টিকে বুঝি, যার মাধ্যমে তথ্য সংগ্রহ, প্রক্রিয়াকরণ, সংরক্ষণ, এবং বিনিময় করা হয়। এটি বিভিন্ন যন্ত্রপাতি, সফটওয়্যার, এবং নেটওয়ার্ক ব্যবহারের মাধ্যমে সম্পন্ন হয়, যা মানুষের মাঝে তথ্যের আদান-প্রদানকে আরও সহজ করে তোলে। এটি তথ্য সংগ্রহ এবং পরিচালনার পাশাপাশি যোগাযোগের ক্ষেত্রে বৈপ্লবিক পরিবর্তন এনেছে।</p>
           
            </div>
            <div className="col-lg-5 col-sm-12 px-5 d-flex flex-column aboutRight">
                <img className="rounded touhidSirImg" src={touhidSir} alt="" />
                <div className="touhidSirInfo">
           <p className="text-end touhidSir fs-5">প্রকৌশলী মো. তৌহিদ হোসেন</p>
            <p className="text-end">প্রতিষ্ঠাতা আইসিটি শিক্ষা</p>
            <p className="text-end">ইনস্ট্রাক্টর কম্পিউটার, মাগুরা পলিটেকনিক ইন্সটিটিউট, মাগুরা</p>
           </div>
           <img src={aboutIcon} className="aboutIcon" alt="" />
            </div>
        </div>
    </div>
   </div>
   <a href="/about"><div className='topArrow'><i class="fa-solid fa-arrow-up"></i></div></a>

   
    </section>
  )
}

export default About