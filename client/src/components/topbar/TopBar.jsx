import React from 'react'
import "./topbar.css"

const TopBar = () => {
  return (
    <section className='topbar'>
        <div className="container-fluid">
            <div className="row">
                <div className="col-8 d-flex gap-5 align-items-center fs-5">
                    <div className="phone fs-6 ms-5" >                  
                    <div className='d-flex align-items-center gap-2'><i className="fa-solid fa-phone-volume"></i> +8801818301681</div>
                    </div>
                    <div className="mail fs-6">                   
                    <div className='d-flex align-items-center gap-2'><i className="fa-solid fa-envelope"></i> ictsikkha@gmail.com</div>
                    </div>
                    <div className="location fs-6">                   
                    <div className='d-flex align-items-center gap-2'><i className="fa-solid fa-location-dot"></i> মাগুরা পুলিশ লাইন , মাগুরা</div>
                    </div>
                </div>
                <div className="col-4 d-flex gap-3 align-items-center fs-6 justify-content-end">
                    <p className='my-auto'>আমাদের সাথে যুক্ত হোন :</p>
                    <div className="socialIcon d-flex gap-1 fs-4">
                        <div className='p-1'>
                            <a className="fs-5" href="https://www.facebook.com/ictshikkha">
                                <i className="fa-brands fa-square-facebook"></i>
                            </a>
                        </div>
                        <div className='p-1'>
                            <a className="fs-5" href="/">
                                <i className="fa-brands fa-linkedin"></i>
                            </a>
                        </div>
                        <div className='p-1'>
                            <a className="fs-5" href="https://www.youtube.com/@ictshikkha">
                                <i className="fa-brands fa-youtube"></i>
                            </a>
                        </div>
                        <div className='p-1'>
                            <a className="fs-5" href="/">
                                <i className="fa-brands fa-square-github"></i>
                            </a>
                        </div>
                        <div className='p-1'>
                            <a className="fs-5" href="/">
                                <i className="fa-brands fa-square-instagram"></i>
                            </a>
                        </div>
                        <div className='p-1 me-5'>
                            <a className="fs-5" href="/">
                                <i className="fa-brands fa-square-x-twitter"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default TopBar