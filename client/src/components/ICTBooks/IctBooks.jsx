import { useEffect, useState } from "react";
import "./IctBooks.css"
import suggestionImg from '../../assets/book6.png'

const IctBooks = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/ictbooks")
            .then(res => res.json())
            .then(data => setData(data))
            .catch(err => console.log(err));
    }, []);
  return (
    <div className='ictBooks'>
        <div className="container">
        <div className="faqTitle text-center pt-2 mb-4">
         <span>HSC ICT বই</span> 
         </div>
            <div className="row d-flex justify-content-center">
               
                    {data.map((item,index)=>{
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
            
                           
                                <div className="col-lg-3 book1">
                                     <a  href="https://drive.google.com/file/d/1sZe5_fVqoArJlLnXvNcIifsqw7uGaTeD/view?usp=sharing" target='blank'>
                            <img src={suggestionImg} alt="" />
                            <h3 className="play-icon">
            <i className="fa-solid fa-book-open-reader me-2"></i>
            পড়ুন  
                  </h3>
                            </a>
                            </div>
                    
            </div>
        </div>
    </div>
  )
}

export default IctBooks