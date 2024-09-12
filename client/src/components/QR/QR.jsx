import React from 'react'
import fbGrp from '../../assets/FB Group.png'
import fbPage from '../../assets/FB Page.png'
import "./QR.css"

const QR = () => {
  return (
    <div>
       
        <div className="container-fluid qr">
            <div className="row justify-content-center gap-5 py-4">
                <div className="col-lg-5 text-center">
                <iframe className='w-100 h-100' src="https://lottie.host/embed/917a104d-28da-4932-aa06-0db8c72ada62/LSOTaXQ1i7.json"></iframe>
                   
                </div>
                <div className="col-lg-2 text-center">
                    <img className='w-100 mb-3 qrImg' src={fbGrp} alt="" />
                    <a target='blank' href="https://www.facebook.com/groups/950573548353552" className='fbBtn justify-content-center d-flex align-items-center btn1 gap-2 fs-5'>ফেসবুক গ্রুপ <i className="fa fa-arrow-right"></i></a>
                </div>
                <div className="col-lg-2 text-center">
                    <img className='w-100 mb-3 qrImg' src={fbPage} alt="" />
                    <a target='blank' href="https://www.facebook.com/ictshikkha" className='fbBtn justify-content-center d-flex align-items-center btn1 gap-2 fs-5'>ফেসবুক পেজ <i className="fa fa-arrow-right"></i></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default QR