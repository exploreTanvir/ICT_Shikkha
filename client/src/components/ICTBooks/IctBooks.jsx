import "./IctBooks.css"
import { ictBooksDetails, ictBooksDetails2 } from './ictBooksDetail'

const IctBooks = () => {
  return (
    <div className='ictBooks'>
        <div className="container">
        <div className="faqTitle text-center pt-2 mb-4">
         <span>HSC ICT বই</span> 
         </div>
            <div className="row d-flex justify-content-center">
               
                    {ictBooksDetails.map((item,index)=>{
                        return(
                           
                                <div key={index} className="col-lg-3 book1">
                                     <a  href={item.url} target='blank'>
                            <img src={item.bookImg} alt="" />
                            </a>
                            </div>
                            
                        )
                       
                    })}
                
                
            </div>

        <div className="faqTitle text-center my-4">
         <span>HSC ICT টেস্টপেপার</span> 
         </div>
            <div className="row d-flex justify-content-center">
            {ictBooksDetails2.map((item,index)=>{
                        return(
                           
                                <div key={index} className="col-lg-3 book1">
                                     <a  href={item.url} target='blank'>
                            <img src={item.bookImg} alt="" />
                            <h3 className="play-icon">
            <i className="fa-solid fa-book-open-reader me-2"></i>
            পড়ুন  
                  </h3>
                            </a>
                            </div>
                            
                        )
                       
                    })}
            </div>
        </div>
    </div>
  )
}

export default IctBooks