import React, { useEffect, useState } from "react";
import "./Gallery.css";

const Gallery = () => {
  const [data, setData] = useState([]);


  useEffect(() => {
    fetch("http://localhost:5000/api/auth/galleryimg")
        .then(res => res.json())
        .then(data => setData(data))
        .catch(err => console.log(err));
}, []);


  return (
    <section>
      <div className="faqTitle text-center mt-5 mb-4 wow fadeInUp">
        <span>আমাদের দেওয়াল</span>
      </div>
      <div className="container">
        <div className="row pb-2 justify-content-center">
          {
            data.map((item,index)=>{
              return(
                <div className={item.class}>
            <img src={item.img} alt="" />
          </div>
              )
            })
          }
          
        </div>
      </div>
    </section>
  );
};

export default Gallery;
