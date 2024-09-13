import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./newsletter.css";

const Newsletter = () => {
  const notify = () => toast("👌 সফলভাবে ডাটা প্রেরিত হয়েছে ! ");
  const [newsData, setNewsData] = useState({
    email: '',
  });

  const handleChange = (e) => {
    setNewsData({
      ...newsData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:5000/api/auth/newsLetter', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newsData),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };
  
  return (
    <section className="newsletter py-5">
        <div className="container text-center">
            <div className="row align-items-center justify-content-center wow fadeInUp">
                <h3 className="mt-2">আমাদের সাথে যুক্ত হোন</h3>
                <p className="text-center">নতুন এক্সপার্ট টিপস ও আপডেট পেতে এখনই যুক্ত হোন। আপনার ইমেইল দিয়ে সহজেই যোগ দিন।</p>
                <form onSubmit={handleSubmit} action="/POST" method="post"  className="d-flex justify-content-end">
                    <input className="w-100 newsInput" name="email"
                  value={newsData.email}
                  onChange={handleChange} required placeholder="আপনার ইমেইল" />
                <button  onClick={notify} type="submit" className='fs-5 btn1  d-flex  justify-content-around align-items-center gap-2 course'>সাবস্ক্রাইব<i className="fa fa-arrow-right "></i></button>
                </form>
            </div>
        </div>
        <ToastContainer
      position="top-right"
      autoClose={5000}
      closeOnClick
      rtl
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
    </section>
  )
}

export default Newsletter