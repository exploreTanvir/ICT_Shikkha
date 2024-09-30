import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import audioImg from '../../assets/audioImg.png';
import "./AudioBook.css";

const AudioBook = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/hsc")
        .then(res => res.json())
        .then(data => setData(data))
        .catch(err => console.log(err));
}, []);
  return (
    <section className='audioBook'>
      <div className="container">
        <div className="faqTitle text-center mt-1 mb-4">
          <span>তথ্য ও যোগাযোগ প্রযুক্তি (অডিও বুক)</span> 
        </div>

        <div className="row gap-4 pb-3 justify-content-center">
          {
            data.map((item, index) => {
              return (
                <Link to={item.chapterAudio} className={item.class} key={index}>
                  <div className='d-flex justify-content-between w-100 flex-row-reverse'>
                    <h3>{item.title}</h3>
                    <h3 className='audioText'>
                    <i className="fa-solid fa-headphones-simple"></i> অডিও বুক
                    </h3>
                  </div>
                  <div className="play-icon">
                  <img src={audioImg} className='audioImg shadow w-25' alt="" />
                  </div>
                  <h4>{item.description}<br />{item.desc2}</h4>
                 
                 
                </Link>
              );
            })
          }
        </div>
      </div>
    </section>
  );
};

export default AudioBook;
