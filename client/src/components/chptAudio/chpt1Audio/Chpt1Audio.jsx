import React from 'react'
import Footer from '../../Footer/Footer'
import Nav from '../../Nav/Nav'
import Newsletter from '../../newsletter/Newsletter'
import TopBar from '../../topbar/TopBar'

const Chpt1Audio = () => {
  return (
    <div>
       <TopBar/>
       <Nav/>
       <div className="faqTitle text-center mt-5 mb-4">
         <span>তথ্য ও যোগাযোগ প্রযুক্তি (অডিও বুক)-প্রথম অধ্যায় </span> 
         </div>
       <Newsletter/>
       <Footer/>
    </div>
  )
}

export default Chpt1Audio