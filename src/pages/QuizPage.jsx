import Footer from '../components/Footer/Footer';
import Nav from '../components/Nav/Nav';
import Newsletter from '../components/newsletter/Newsletter';
import Quiz from '../components/Quiz/Quiz';
import TopBar from '../components/topbar/TopBar';

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