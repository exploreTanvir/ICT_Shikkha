import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import Newsletter from '../components/newsletter/Newsletter';
import Quiz from '../components/Quiz/Quiz';
import TopBar from '../components/topbar/TopBar';

const QuizPage = () => {
  return (
    <div>
        <TopBar/>
        <Navbar/>
      <Quiz/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default QuizPage