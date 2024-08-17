import Footer from '../../components/Footer/Footer';
import Nav from '../../components/Nav/Nav';
import Newsletter from '../../components/newsletter/Newsletter';
import TopBar from '../../components/topbar/TopBar';
import Gallery from './../Gallery/Gallery';

const GalleryPage = () => {
  return (
    <div>
        <TopBar/>
        <Nav/>
        <Gallery/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default GalleryPage