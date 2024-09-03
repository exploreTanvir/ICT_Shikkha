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
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);
  const [totalTimeLeft, setTotalTimeLeft] = useState(120);
  const [quizStarted, setQuizStarted] = useState(false);
  const [timerActive, setTimerActive] = useState(false);
  const [numQuestions, setNumQuestions] = useState(10);
  const [timeLimit, setTimeLimit] = useState(2);
  const [filter, setFilter] = useState('all');

  const getRandomQuestions = () => {
    const shuffled = shuffleArray(question);
    return shuffled.slice(0, numQuestions);
  };

  useEffect(() => {
    if (timerActive && !quizFinished && totalTimeLeft > 0) {
      const timer = setInterval(() => setTotalTimeLeft((prev) => prev - 1), 1000);

      if (totalTimeLeft === 0) {
        handleTimeout();
      }

      return () => clearInterval(timer);
    }
  }, [totalTimeLeft, timerActive, quizFinished]);

  const handleOptionClick = (option) => {
    if (selectedOption || !timerActive) return;

    const correctAnswer = questions[currentQuestion].answer;

    setUserAnswers(prev => [
      ...prev,
      {
        question: questions[currentQuestion].question,
        options: questions[currentQuestion].options,
        selected: option,
        correct: correctAnswer,
        isCorrect: option === correctAnswer,
      },
    ]);

    if (option === correctAnswer) {
      setScore(score + 1);
    }

    setSelectedOption(option);

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedOption('');
      } else {
        setQuizFinished(true);
        setSelectedOption('');
        setTimerActive(false);
      }
    }, 1000);
  };

  const handleSkip = () => {
    const correctAnswer = questions[currentQuestion].answer;

    setUserAnswers(prev => [
      ...prev,
      {
        question: questions[currentQuestion].question,
        options: questions[currentQuestion].options,
        selected: 'স্কিপ করা হয়েছে',
        correct: correctAnswer,
        isCorrect: false,
      },
    ],100);

    setSelectedOption('');

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setQuizFinished(true);
        setTimerActive(false);
      }
    }, 1000);
  };

  const handleTimeout = () => {
    const correctAnswer = questions[currentQuestion].answer;

    setUserAnswers(prev => [
      ...prev,
      {
        question: questions[currentQuestion].question,
        options: questions[currentQuestion].options,
        selected: 'সময় শেষ হয়েছে',
        correct: correctAnswer,
        isCorrect: false,
      },
    ]);

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedOption('');
      } else {
        setQuizFinished(true);
        setSelectedOption('');
        setTimerActive(false);
      }
    }, 1000); 
  };

  const handleReset = () => {
    setQuestions(getRandomQuestions());
    setCurrentQuestion(0);
    setSelectedOption('');
    setScore(0);
    setQuizFinished(false);
    setUserAnswers([]);
    setTotalTimeLeft(timeLimit * 60);
    setTimerActive(false);
    setQuizStarted(false);
  };

  const handleStart = () => {
    setQuestions(getRandomQuestions());
    setTotalTimeLeft(timeLimit * 60);
    toast(`কুইজ শুরু হয়েছে, সময় ${timeLimit} মিনিট`);
    setQuizStarted(true);
    setTimerActive(true);
  };

  const filteredAnswers = userAnswers.filter(answer => {
    if (filter === 'all') return true;
    if (filter === 'correct') return answer.isCorrect;
    if (filter === 'wrong') return !answer.isCorrect && answer.selected !== 'স্কিপ করা হয়েছে';
    return false;
  });

  return (
    <div className="quiz">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 d-flex justify-content-center">
            <div className="quiz-container">
              {!quizStarted ? (
                <div>
                  <h2>কুইজ শুরু করার জন্য "শুরু করুন" বাটন চাপুন</h2>
                  <div className="settings">
                    <label>
                      প্রশ্নের সংখ্যা:
                      <input
                        type="number"
                        value={numQuestions}
                        onChange={(e) => setNumQuestions(e.target.value)}
                        min="1"
                        max={question.length}
                      />
                    </label>
                    <label>
                      সময় (মিনিট):
                      <input
                        type="number"
                        value={timeLimit}
                        onChange={(e) => setTimeLimit(e.target.value)}
                        min="1"
                        max="60"
                      />
                    </label>
                  </div>
                  <button onClick={handleStart} className="fs-3 start-btn reset-btn">
                    শুরু করুন <i className="fa fa-arrow-right"></i>
                  </button>
                </div>
              ) : !quizFinished ? (
                <>
                  <div className="d-flex justify-content-around align-items-center mb-3">
                    <button onClick={handleReset} className="reset-btn">
                      রিস্টার্ট কুইজ <i className="fa-solid fa-spinner ms-1"></i>
                    </button>
                    <p>স্কোর : {score} / {questions.length}</p>
                    <p>
                      সময় বাকি : {Math.floor(totalTimeLeft / 60)}:
                      {totalTimeLeft % 60 < 10 ? `0${totalTimeLeft % 60}` : totalTimeLeft % 60}
                    </p>
                  </div>
                  <h4 className="mb-3">{questions[currentQuestion].question}</h4>
                  <div className="d-flex justify-content-around">
                    <h5>{questions[currentQuestion].qOption1}</h5>
                    <h5>{questions[currentQuestion].qOption2}</h5>
                  </div>
                  <div className="d-flex justify-content-around">
                    <h5>{questions[currentQuestion].qOption3}</h5>
                    <h5>{questions[currentQuestion].qOption4}</h5>
                  </div>
                  <h5>{questions[currentQuestion].qOption5}</h5>

                  <div className="options">
                    {questions[currentQuestion].options.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => handleOptionClick(option)}
                        className={`option-btn fs-5 ${
                          selectedOption && option === questions[currentQuestion].answer
                            ? 'correct'
                            : ''
                        } ${
                          selectedOption &&
                          option === selectedOption &&
                          option !== questions[currentQuestion].answer
                            ? 'incorrect'
                            : ''
                        }`}
                        disabled={!!selectedOption}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                  <button onClick={handleSkip} className="skip-btn">স্কিপ করুন</button>
                </>
              ) : (
                <div>
                  <h2>কুইজ শেষ হয়েছে!</h2>
                  <h4>তোমার ফাইনাল স্কোর : {score} / {questions.length}</h4>
                  <div className="answer-buttons">
                    <button onClick={() => setFilter('all')} className="filter-btn">সবগুলো</button>
                    <button onClick={() => setFilter('correct')} className="filter-btn">সঠিক</button>
                    <button onClick={() => setFilter('wrong')} className="filter-btn">ভুল</button>
                    
                  </div>
                  <div className="answers-summary">
                    <h4>প্রশ্ন এবং আপনার উত্তর:</h4>
                    <ul>
                      {filteredAnswers.map((answer, index) => (
                        <li
                          key={index}
                          className={
                            answer.isCorrect
                              ? 'correct-answer'
                              : answer.selected === 'স্কিপ করা হয়েছে'
                              ? 'skipped-answer'
                              : 'incorrect-answer'
                          }
                        >
                          <p><strong>প্রশ্ন:</strong> {answer.question}</p>
                          <p><strong>আপনার উত্তর:</strong> {answer.selected}</p>
                          <p><strong>সঠিক উত্তর:</strong> {answer.correct}</p>
                          <p><strong>অপশন গুলো:</strong> {answer.options.join(", ")}</p>
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
      <ToastContainer />
    </div>
  );
}

export default Quiz;
