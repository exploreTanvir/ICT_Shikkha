import React from 'react'
import "./topbar.css"

const TopBar = () => {
  return (
    <section className='topbar'>
        <div className="container-fluid">
            <div className="row">
                <div className="col-8 d-flex gap-5 align-items-center fs-5">
                    <div className="phone fs-5 ms-5" >                  
                    <div className='d-flex align-items-center gap-2'><i class="fa-solid fa-phone-volume"></i> +88 0125 255 255</div>
                    </div>
                    <div className="mail fs-5">                   
                    <div className='d-flex align-items-center gap-2'><i class="fa-solid fa-envelope"></i> ictsikkha@gmail.com</div>
                    </div>
                    <div className="location fs-5">                   
                    <div className='d-flex align-items-center gap-2'><i class="fa-solid fa-location-dot"></i> মাগুরা পুলিশ লাইন , মাগুরা</div>
                    </div>
                </div>
                <div className="col-4 d-flex gap-3 align-items-center fs-5 justify-content-end">
                    <p className='my-auto'>Follow us</p>
                    <div className="socialIcon d-flex gap-1 fs-4">
                        <div className='p-1'>
                            <a href="/">
                                <i class="fa-brands fa-square-facebook"></i>
                            </a>
                        </div>
                        <div className='p-1'>
                            <a href="/">
                                <i class="fa-brands fa-linkedin"></i>
                            </a>
                        </div>
                        <div className='p-1'>
                            <a href="/">
                                <i class="fa-brands fa-youtube"></i>
                            </a>
                        </div>
                        <div className='p-1'>
                            <a href="/">
                                <i class="fa-brands fa-square-github"></i>
                            </a>
                        </div>
                        <div className='p-1'>
                            <a href="/">
                                <i class="fa-brands fa-square-instagram"></i>
                            </a>
                        </div>
                        <div className='p-1 me-5'>
                            <a href="/">
                                <i class="fa-brands fa-square-x-twitter"></i>
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