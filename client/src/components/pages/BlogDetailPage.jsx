import VRDetail from '../BlogDetail/VRDetail';
import Footer from '../Footer/Footer';
import Nav from '../Nav/Nav';
import Newsletter from '../newsletter/Newsletter';
import TopBar from '../topbar/TopBar';

const BlogDetailPage = () => {
  return (
    <div>
         <TopBar/>
        <Nav/>
        <VRDetail/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default BlogDetailPage