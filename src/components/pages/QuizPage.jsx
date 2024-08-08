import Footer from '../../components/Footer/Footer';
import Nav from '../../components/Nav/Nav';
import Newsletter from '../../components/newsletter/Newsletter';
import TopBar from '../../components/topbar/TopBar';
import Quiz from './../Quiz/Quiz';

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