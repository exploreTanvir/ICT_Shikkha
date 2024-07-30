import faqImg from "../../assets/faqImg4.jpg"
import "./faq.css"

const Faq = () => {
  return (
    <section className="faq">
        <div className="container">
         <div className="faqTitle text-center mt-5 mb-4">
         <span>কিছু সচরাচর প্রশ্ন</span> 
         </div>
          <div className="row ">
            <div className="col-lg-6 col-md-0 d-md-none d-lg-block faqLeft overflow-hidden d-flex align-items-center">
              <img src={faqImg} className="faqImg animated1 overflow-hidden" alt="" />
            </div>
            <div className="col-lg-6 faqRight col-md-12">   
                 <div class="accordion accordion-flush" id="accordionFlushExample">

<div class="accordion-item">
    <h2 class="accordion-header rounded" id="panelsStayOpen-headingOne">
      <button class="accordion-button fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
      কোর্সের জন্য কি পূর্ববর্তী কোনো অভিজ্ঞতা প্রয়োজন?
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
      <div class="accordion-body">
       <p>প্রতিটি কোর্সের জন্য প্রয়োজনীয়তা আলাদা হতে পারে। কিছু কোর্স শুরু করার জন্য কোনো পূর্ব অভিজ্ঞতা প্রয়োজন হয় না, তবে কিছু উন্নত কোর্সের জন্য নির্দিষ্ট পূর্ব-জ্ঞান প্রয়োজন হতে পারে। কোর্সের বিবরণে এই তথ্য উল্লেখ করা থাকে।</p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h1 class="accordion-header rounded" id="flush-headingTwo">
      <button class="accordion-button fs-5 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
      মোবাইল ডিভাইস থেকে কী কোর্স এক্সেস করতে পারবো?
      </button>
    </h1>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
        <p>
        হ্যাঁ, আমাদের প্ল্যাটফর্ম মোবাইল এবং ট্যাবলেট সহ সকল ডিভাইসে সমর্থিত। আপনি আমাদের ওয়েবসাইট ব্যাবহার করে যেকোনো সময়, যেকোনো স্থান থেকে কোর্স অ্যাক্সেস করতে পারবেন।
        </p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h1 class="accordion-header rounded" id="flush-headingThree">
      <button class="accordion-button collapsed fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
      কোর্সে সফলতা অর্জনের জন্য কোনো টিপস আছে কি?
      </button>
    </h1>
    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
        <ul>
          <li><b>নিয়মিত অংশগ্রহণ করুন: </b>ক্লাস ও অ্যাসাইনমেন্টে সক্রিয়ভাবে অংশ নিন।</li>
          <li><b>নোট নিন: </b>ক্লাস চলাকালীন নোট গ্রহণ করুন।</li>
          <li><b>ক্লাসের বাইরে অনুশীলন করুন: </b>শেখা বিষয়গুলি বাস্তবে প্রয়োগের চেষ্টা করুন।</li>
          <li><b>প্রশ্ন করুন: </b>কিছু বুঝতে অসুবিধা হলে, শিক্ষকের কাছে প্রশ্ন করতে দ্বিধা করবেন না।</li>
        </ul>
      </div>
    </div>
  </div>


  <div class="accordion-item">
    <h1 class="accordion-header rounded" id="flush-headingFour">
      <button class="accordion-button collapsed fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
      কোর্স শেষ করতে যদি সমস্যা হয়, তাহলে কী করা উচিত?
      </button>
    </h1>
    <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
        <p>
        যদি কোর্স শেষ করতে কোনো সমস্যায় পড়েন, আপনি আমাদের সহায়ক দলের সাথে যোগাযোগ করতে পারেন। এছাড়াও, ফোরামে অন্যান্য শিক্ষার্থীদের সাথে আপনার সমস্যাগুলো আলোচনা করতে পারেন। আমাদের শিক্ষকরাও আপনার জন্য সহায়ক হতে পারেন।
        </p>
      </div>
    </div>
  </div>


  <div class="accordion-item">
    <h1 class="accordion-header rounded" id="flush-headingFive">
      <button class="accordion-button collapsed fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
      কোর্সের সময় অনলাইন পরীক্ষার জন্য প্রস্তুতি কিভাবে নিব?
      </button>
    </h1>
    <div id="flush-collapseFive" class="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
        <p>অনলাইন পরীক্ষার জন্য প্রস্তুতি নেওয়ার জন্য:</p>
        <ul>
          <li>প্রতিটি মডিউল মনোযোগ দিয়ে পড়ুন।</li>
          <li>প্র্যাকটিস কুইজগুলো সমাধান করুন।</li>
          <li>ইনস্ট্রাক্টরের সাথে আপনার প্রশ্নগুলি আলোচনা করুন।</li>
          <li>পূর্ববর্তী প্রশ্নপত্র এবং নমুনা প্রশ্নপত্র দেখুন।</li>
        </ul>
      </div>
    </div>
  </div>


  <div class="accordion-item">
    <h1 class="accordion-header rounded" id="flush-headingSix">
      <button class="accordion-button collapsed fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
      কিভাবে আপনি ক্যারিয়ার গাইডেন্স পেতে পারেন?
      </button>
    </h1>
    <div id="flush-collapseSix" class="accordion-collapse collapse" aria-labelledby="flush-headingSix" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
        <p>
        আমরা আমাদের শিক্ষার্থীদের জন্য ক্যারিয়ার গাইডেন্স এবং পরামর্শ প্রদান করি। আপনি আমাদের ক্যারিয়ার সার্ভিস টিমের সাথে যোগাযোগ করতে পারেন অথবা লাইভ ওয়েবিনারে অংশগ্রহণ করতে পারেন।
        </p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h1 class="accordion-header rounded" id="flush-headingSeven">
      <button class="accordion-button collapsed fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseSeven">
      এগুলোর বাইরেও আমার অন্য প্রশ্ন আছে, সেটা কিভাবে করব? 
      </button>
    </h1>
    <div id="flush-collapseSeven" class="accordion-collapse collapse" aria-labelledby="flush-headingSeven" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
      <p>
        আমরা আমাদের শিক্ষার্থীদের জন্য ক্যারিয়ার গাইডেন্স এবং পরামর্শ প্রদান করি। আপনি আমাদের ক্যারিয়ার সার্ভিস টিমের সাথে যোগাযোগ করতে পারেন অথবা লাইভ ওয়েবিনারে অংশগ্রহণ করতে পারেন।
        </p>
      </div>
    </div>
  </div>
 
  
                </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Faq