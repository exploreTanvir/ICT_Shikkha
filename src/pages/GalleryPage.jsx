import Gallery from '../components/Gallery/Gallery';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import Newsletter from '../components/newsletter/Newsletter';
import TopBar from '../components/topbar/TopBar';

const GalleryPage = () => {
  return (
    <div>
        <TopBar/>
        <Navbar/>
        <Gallery/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default GalleryPage