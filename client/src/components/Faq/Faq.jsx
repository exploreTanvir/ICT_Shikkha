import faqImg from "../../assets/faqImg4.jpg"
import "./faq.css"
import { faqMenu } from "./faqMenu"

const Faq = () => {
  return (
    <section className="faq">
        <div className="container">
         <div className="faqTitle text-center mt-5 mb-4 wow fadeInUp">
         <span>কিছু সচরাচর প্রশ্ন</span> 
         </div>
          <div className="row ">
            <div className="col-lg-6 wow fadeInLeft col-md-0 d-md-none d-lg-block faqLeft overflow-hidden d-flex align-items-center">
              <img src={faqImg} className="faqImg animated1 overflow-hidden" alt="" />
            </div>
            <div className="col-lg-6 wow fadeInRight faqRight col-md-12">   
                 <div className="accordion accordion-flush" id="accordionFlushExample">

<div className="accordion-item">
    <h2 className="accordion-header rounded" id="panelsStayOpen-headingOne">
      <button className="accordion-button fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
      কোর্সের জন্য কি পূর্ববর্তী কোনো অভিজ্ঞতা প্রয়োজন?
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
      <div className="accordion-body">
       <p>প্রতিটি কোর্সের জন্য প্রয়োজনীয়তা আলাদা হতে পারে। কিছু কোর্স শুরু করার জন্য কোনো পূর্ব অভিজ্ঞতা প্রয়োজন হয় না, তবে কিছু উন্নত কোর্সের জন্য নির্দিষ্ট পূর্ব-জ্ঞান প্রয়োজন হতে পারে। কোর্সের বিবরণে এই তথ্য উল্লেখ করা থাকে।</p>
      </div>
    </div>
  </div>
  {faqMenu.map((item,index)=>{  
 return(
  <div key={index} className="accordion-item">
  <h1 className="accordion-header rounded" id={item.flushID}>
    <button className="accordion-button fs-5 collapsed" type="button" data-bs-toggle="collapse" data-bs-target={item.flushCollapsTarget} aria-expanded="false" aria-controls={item.flushCollaps}>
    {item.title}
    </button>
  </h1>
  <div id={item.flushCollaps} className="accordion-collapse collapse" aria-labelledby={item.flushID} data-bs-parent="#accordionFlushExample">
    <div className="accordion-body">
      <p>
      {item.desc}
      </p>
    </div>
  </div>
</div>
 )
})}

           </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Faq