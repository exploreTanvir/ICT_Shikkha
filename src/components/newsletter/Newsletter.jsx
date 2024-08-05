import { useState } from "react";
import "./newsletter.css";

const Newsletter = () => {
  
    const [email, setEmail] = useState("");
  
    const handleInputChange = (event) => {
      setEmail(event.target.value);
    };

    const handleSubmit = (event) => {
      event.preventDefault();
  
      console.log("Email submitted:", email);
  
      const youtubeChannelLink = "https://www.youtube.com/channel/UCVJgVNwSAPZJc3aauOwZapQ?sub_confirmation=1";

      window.open(youtubeChannelLink, "_blank");
      setEmail("");
    };
  
  
  return (
    <section className="newsletter py-5">
        <div className="container text-center">
            <div className="row align-items-center justify-content-center">
                <h3 className="mt-2">আমাদের ইউটিউব চ্যানেল সাবস্ক্রাইব করুন</h3>
                <p>নতুন এক্সপার্ট টিপস পেতে এখনই সাবস্ক্রাইব করুন! আপনার ইমেইল দিয়ে সহজেই যোগ দিন।</p>
                <form onSubmit={handleSubmit} className="d-flex justify-content-end">
                    <input type="email" value={email} onChange={handleInputChange} required placeholder="আপনার ইমেইল" />
                <button type="submit" className='fs-5 newsBtn  d-flex  justify-content-around align-items-center gap-2 course'>সাবস্ক্রাইব<i className="fa fa-arrow-right "></i></button>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Newsletter