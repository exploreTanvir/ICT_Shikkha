import React from "react";

import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";
import Newsletter from "../newsletter/Newsletter";
import QR from "../QR/QR";
import TopBar from "../topbar/TopBar";
import "./LiveClass.css";

const LiveClass = () => {
 

  return (
    <section>
      <TopBar/>
      <Nav/>
        <h3 className="LiveClass text-center container pt-5 pb-3">বর্তমানে কোনো লাইভ কোর্স নেই। শীঘ্রই নতুন লাইভ ক্লাস শুরু হবে। সর্বশেষ আপডেট পেতে এবং কোর্সের তথ্য পেতে আমাদের ফেসবুক পেজ ও গ্রুপে যোগ দিন। স্ক্যান করুন এবং সংযুক্ত থাকুন!</h3>
        <QR/>
      <Newsletter/>
      <Footer/>
    </section>
  );
};

export default LiveClass;
