import galleryImg1 from "../../assets/ictImg1.jpg"
import galleryImg2 from "../../assets/ictImg2.jpg"
import galleryImg3 from "../../assets/ictImg3.jpg"
import "./Gallery.css"


const Gallery = () => {
  return (
    <section>
            <div className="faqTitle text-center mt-5 mb-4">
            <span>আমাদের দেওয়াল</span> 
            </div>
        <div className="container">
            
            <div className="row pb-2 justify-content-center">
                <div className="col-3 gallery d-flex align-items-end gallery1 p-0">
                    <img src={galleryImg1} alt="" />
                </div>
                <div className="col-3 d-flex gallery align-items-end gallery1 p-0">
                    <img src={galleryImg2} alt="" />
                </div>
                <div className="col-3 d-flex gallery align-items-end gallery1 p-0">
                    <img src={galleryImg3} alt="" />
                </div>

                
            </div>
        </div>
        {/* <a href="/gallery"><div className='topArrow'><i class="fa-solid fa-arrow-up"></i></div></a> */}
    </section>
  )
}

export default Gallery