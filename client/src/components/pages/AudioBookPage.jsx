import Footer from '../../components/Footer/Footer';
import Nav from '../../components/Nav/Nav';
import Newsletter from '../../components/newsletter/Newsletter';
import TopBar from '../../components/topbar/TopBar';
import AudioBook from '../AudioBook/AudioBook';

const AudioBookPage = () => {
  return (
    <div>
        <TopBar/>
        <Nav/>
      <AudioBook/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default AudioBookPage