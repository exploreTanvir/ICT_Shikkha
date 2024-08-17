import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './quiz.css';
import { question } from './QuizDetail';

const shuffleArray = (array) => {
  let shuffled = array.slice();
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

function Quiz() {
  const notify = () => toast("কুইজ শুরু হয়েছে সময় ২ মিনিট");
  


  const getRandomQuestions = () => {
    const shuffled = shuffleArray(question);
    return shuffled.slice(0, 10);
  };

  const [questions, setQuestions] = useState(getRandomQuestions());
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [score, setScore] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);
  const [incorrectAnswers, setIncorrectAnswers] = useState([]);
  const [totalTimeLeft, setTotalTimeLeft] = useState(120); 
  const [quizStarted, setQuizStarted] = useState(false); 
  const [timerActive, setTimerActive] = useState(false); 

  useEffect(() => {
    const timer = timerActive && !quizFinished && totalTimeLeft > 0
      ? setInterval(() => setTotalTimeLeft(prev => prev - 1), 1000)
      : null;

    if (totalTimeLeft === 0) {
      handleTimeout();
    }

    return () => clearInterval(timer);
  }, [totalTimeLeft, timerActive, quizFinished]);

  const handleOptionClick = (option) => {
    if (selectedOption || !timerActive) return;

    const correctAnswer = questions[currentQuestion].answer;


    if (option !== correctAnswer) {
      setIncorrectAnswers(prev => [
        ...prev,
        {
          question: questions[currentQuestion].question,
          options: questions[currentQuestion].options,
          selected: option,
          correct: correctAnswer,
        },
      ]);
    }

    if (option === correctAnswer) {
      setScore(score + 1);
    }

    setSelectedOption(option);
    setShowFeedback(true);
    setTimerActive(false);

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedOption('');
        setShowFeedback(false);
        setTimerActive(true); 
      } else {
        
        setQuizFinished(true);
        setSelectedOption('');
      }
    }, 1000);
  };

  const handleTimeout = () => {
    
    const correctAnswer = questions[currentQuestion].answer;

    setIncorrectAnswers(prev => [
      ...prev,
      {
        question: questions[currentQuestion].question,
        options: questions[currentQuestion].options,
        selected: 'Timed Out',
        correct: correctAnswer,
      },
    ]);

    setShowFeedback(true);
    setTimerActive(false);

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedOption('');
        setShowFeedback(false);
        setTimerActive(true); 
      } else {
  
        setQuizFinished(true);
        setSelectedOption('');
      }
    }, 1000); 
  };

  const handleReset = () => {
    setQuestions(getRandomQuestions());
    setCurrentQuestion(0);
    setSelectedOption('');
    setScore(0);
    setShowFeedback(false);
    setQuizFinished(false);
    setIncorrectAnswers([]); 
    setTotalTimeLeft(120); 
    setTimerActive(false);
    setQuizStarted(false); 
  };

  const handleStart = () => {
    toast("কুইজ শুরু হয়েছে সময় ২ মিনিট");
    setQuizStarted(true);
    setTimerActive(true); 
  };

  const allCorrect = score === questions.length;

  return (
    <div className="quiz">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 d-flex justify-content-center">
            <div className="quiz-container">
              {!quizStarted ? (
                <div>
                  <h2>কুইজ শুরু করার জন্য "শুরু করুন" বাটন চাপুন</h2>
                  <button onClick={handleStart} className="fs-3 start-btn reset-btn" >শুরু করুন</button>
                </div>
              ) : !quizFinished ? (
                <>
                  <div className='d-flex justify-content-around align-items-center mb-3'>
                    <button onClick={handleReset} className="reset-btn">রিস্টার্ট কুইজ</button>
                    <p>স্কোর : {score} / {questions.length}</p>
                    <p>সময় বাকি : {Math.floor(totalTimeLeft / 60)}:{totalTimeLeft % 60 < 10 ? `0${totalTimeLeft % 60}` : totalTimeLeft % 60}</p>
                  </div>
                  <h4 className='mb-3'>{questions[currentQuestion].question}</h4>
                  <div className='d-flex justify-content-around'>
                    <h5>{questions[currentQuestion].qOption1}</h5>
                    <h5>{questions[currentQuestion].qOption2}</h5>
                  </div>
                  <div className='d-flex justify-content-around'>
                    <h5>{questions[currentQuestion].qOption3}</h5>
                    <h5>{questions[currentQuestion].qOption4}</h5>
                  </div>
                  <h5>{questions[currentQuestion].qOption5}</h5>

                  <div className="options">
                    {questions[currentQuestion].options.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => handleOptionClick(option)}
                        className={`option-btn fs-5 ${showFeedback && option === questions[currentQuestion].answer ? 'correct' : ''} ${showFeedback && option === selectedOption && option !== questions[currentQuestion].answer ? 'incorrect' : ''}`}
                        disabled={!!selectedOption}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </>
              ) : (
                <div>
                  <h2>কুইজ শেষ হয়েছে!</h2>
                  <h4>তোমার ফাইনাল স্কোর : {score} / {questions.length}</h4>
                  {allCorrect && <h4 className="thumbs-up">👍 সাব্বাস, সবগুলো সঠিক উত্তর!</h4>}
                  <h4>👍বেশ ভালো আবার চেষ্টা করো</h4>
                  <div className="answers-summary">
                    <h4>ভুল উত্তরগুলোর প্রশ্ন এবং সঠিক উত্তর:</h4>
                    <ul>
                      {incorrectAnswers.map((answer, index) => (
                        <li key={index}>
                          <p><strong>প্রশ্ন:</strong> {answer.question}</p>
                          <p><strong>আপনার উত্তর:</strong> {answer.selected}</p>
                          <p><strong>সঠিক উত্তর:</strong> {answer.correct}</p>
                          <p><strong>বিকল্পসমূহ:</strong> {answer.options.join(", ")}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button onClick={handleReset} className="reset-btn">রিস্টার্ট কুইজ</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
}

export default Quiz;
