import Footer from '../../components/Footer/Footer';
import Newsletter from '../../components/newsletter/Newsletter';
import Nav from '../Nav/Nav';
import Quiz from './../Quiz/Quiz';
import TopBar from './../topbar/TopBar';

const QuizPage = () => {
  return (
    <div>
        <TopBar/>
        <Nav/>
      <Quiz/>
      <Newsletter/>
      
      <Footer/>
    </div>
  )
}

export default QuizPage