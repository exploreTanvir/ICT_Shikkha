import Blog from '../Blog/Blog';
import Footer from '../Footer/Footer';
import Nav from '../Nav/Nav';
import Newsletter from '../newsletter/Newsletter';
import TopBar from '../topbar/TopBar';

const BlogPage = () => {
  return (
    <div>
         <TopBar/>
        <Nav/>
        <Blog/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default BlogPage