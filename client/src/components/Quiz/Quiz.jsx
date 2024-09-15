import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Cell, Pie, PieChart } from 'recharts';
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
  const COLORS = ['#0088FE', '#FF8042','#007812'];
  const RADIAN = Math.PI / 180;

  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
  
    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

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
  const [skippedQuestions, setSkippedQuestions] = useState(0);
  const [filter, setFilter] = useState('all');
  const [username, setUsername] = useState('');
  const [institute, setInstitute] = useState('');
  const [scoreboard, setScoreboard] = useState([]);

  useEffect(() => {
    const storedScoreboard = localStorage.getItem('scoreboard');
    if (storedScoreboard) {
      setScoreboard(JSON.parse(storedScoreboard));
    }
  }, []);

  useEffect(() => {
    let timer;
    if (timerActive && !quizFinished) {
      timer = setInterval(() => {
        setTotalTimeLeft((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(timer);
            handleTimeout(); // End the quiz when time runs out
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [timerActive, quizFinished]);

  const getRandomQuestions = () => {
    const shuffled = shuffleArray(question);
    return shuffled.slice(0, numQuestions);
  };

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
    } else {
      setScore(score - 0.25);
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
        saveScoreToScoreboard();
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
    ]);

    setSkippedQuestions(skippedQuestions + 1);
    setSelectedOption('');

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setQuizFinished(true);
        setTimerActive(false);
        saveScoreToScoreboard();
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
    
    setQuizFinished(true);
    setTimerActive(false);
    saveScoreToScoreboard();
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
    setSkippedQuestions(0);
    setUsername('');
    setInstitute('');
  };

  const handleStart = () => {
    // const token = localStorage.getItem("token");

    // if (!token) {
    //   toast.error("কুইজ শুরু করতে আপনাকে প্রথমে লগইন করতে হবে !");
    //   return;
    // }

    setQuestions(getRandomQuestions());
    setTotalTimeLeft(timeLimit * 60);
    toast(`কুইজ শুরু হয়েছে, সময় ${timeLimit} মিনিট`);
    setQuizStarted(true);
    setTimerActive(true);
  };

  const filteredAnswers = userAnswers.filter(answer => {
    if (filter === 'all') return true;
    if (filter === 'correct') return answer.isCorrect;
    if (filter === 'skipped') return answer.selected === 'স্কিপ করা হয়েছে';
    if (filter === 'wrong') return !answer.isCorrect && answer.selected !== 'স্কিপ করা হয়েছে';
    return false;
  });

  const data = [
    { name: 'Group A', value: score },
    { name: 'Group B', value: questions.length - score - skippedQuestions },
    { name: 'Group C', value: skippedQuestions },
  ];

  const saveScoreToScoreboard = () => {
    const newScore = { username, institute, score };
    const updatedScores = [...scoreboard, newScore];
    const topScores = updatedScores
      .sort((a, b) => b.score - a.score)
      .slice(0, 5);
    setScoreboard(topScores);
    localStorage.setItem('scoreboard', JSON.stringify(topScores));
  };
  return (
    <div className="quiz">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 d-flex justify-content-center">
            <div className="quiz-container py-5">
              {!quizStarted ? (
                <div>
                  <h2 className='fw-bold'>কুইজ শুরু করার জন্য "শুরু করুন" বাটন চাপুন</h2>
                  <div className="settings">
                    <div className=' row mt-3 gap-2 justify-content-around'>
                    <input
                      type="text"
                      className="fw-bold col-lg-5  bg-white px-3 py-2 rounded"
                      placeholder="আপনার নাম..."
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                    />
                    <input
                      type="text"
                      className="fw-bold col-lg-5 bg-white px-3 py-2 rounded"
                      placeholder="আপনার স্কুল/ কলেজ..."
                      value={institute}
                      onChange={(e) => setInstitute(e.target.value)}
                      required
                    />
                    </div>
                    <div className='d-flex mt-3 justify-content-around'>
                    <p className='fw-bold bg-white px-3 py-2 rounded'>
                      প্রশ্নের সংখ্যা:
                      <input
                        type="number"
                        className='ms-2 px-2 fw-bold'
                        value={numQuestions}
                        onChange={(e) => setNumQuestions(e.target.value)}
                        min="10"
                        max={question.length}
                      />
                    </p>
                    <p className='fw-bold bg-white px-3 py-2 rounded'>
                    সময় (মিনিট)
                      <input
                        type="number"
                        className='ms-2 px-2 fw-bold'
                        value={timeLimit}
                        onChange={(e) => setTimeLimit(e.target.value)}
                        min="1"
                        max={question.length}
                      />
                    </p>
                   
                    </div>
                    <button onClick={handleStart} className="fs-3 start-btn reset-btn">
                      শুরু করুন <i className="fa fa-arrow-right"></i>
                    </button>
                    <div className="instructions-container mt-3">
      <h2 className="header-main fw-bold">হাজারো প্রশ্নে ইচ্ছামত অনুশীলন করি</h2>

      <h4 className="sub-header">পরীক্ষার্থীদের প্রতি নির্দেশনাবলীঃ</h4>

      <ul className="instruction-list">
        <li>
          তোমার প্রাপ্তি অনুযায়ী উপরের ফিল্টারের মাধ্যমে 
          <b className="highlight-text"> প্রশ্ন সংখ্যা</b> ও 
          <b className="highlight-text"> পরীক্ষার সময়</b> লিখে শুরু করি বাটনে ক্লিক করলে পরীক্ষা শুরু হবে।
        </li>
        <li>
          প্রতিটি ভুল উত্তরের জন্য নেগেটিভ মার্কিং ০.২৫।
        </li>
        <li>
          হাজারো প্রশ্নের ডাটাবেজ থেকে র‍্যান্ডোম কিছু প্রশ্ন দেখাবে।
        </li>
        <li>
          সর্বচ্চ প্রশ্নের সঠিক উত্তর দাতাদের মধ্যে ৫ জন থাকবে 
          <b className="highlight-text"> স্কোরবোর্ডে</b>।
        </li>
      </ul>
    </div>
                  </div>
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
                  <button onClick={handleSkip} className="skip-btn btn1 mt-2">স্কিপ করুন</button>
                </>
              ) : (
                <div>
                  <div className='d-flex justify-content-between align-items-center pieChartBox'>
                    <div className='d-flex flex-column align-items-start'>
                      <div>
                        <button onClick={handleReset} className="text-start reset-btn">
                          রিস্টার্ট কুইজ <i className="fa-solid fa-spinner ms-1"></i>
                        </button>
                        <h2>চুড়ান্ত ফলাফল : {score} / {questions.length}</h2>
                      </div>
                      <div className="answer-buttons">
                        <button onClick={() => setFilter('all')} className="filter-btn">সবগুলো ({questions.length})</button>
                        <button onClick={() => setFilter('correct')} className="filter-btn">সঠিক ({score})</button>
                        <button onClick={() => setFilter('wrong')} className="filter-btn">ভুল ({questions.length-score-skippedQuestions})</button>
                        <button onClick={() => setFilter('skipped')} className="filter-btn">স্কিপ ({skippedQuestions})</button>
                      </div>
                    </div>
                    <div className='d-flex flex-column pieBox align-items-end'>
                      <PieChart width={200} height={200}>
                        <Pie
                          data={data}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={renderCustomizedLabel}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                      </PieChart>
                      <div className='d-flex align-items-baseline'>
                        <div className='d-flex align-items-baseline gap-2 me-3'>
                          <p>সঠিক : </p>
                          <div className='pieChartColor text-white'>({score})</div>
                        </div>
                        <div className='d-flex align-items-baseline gap-2 me-3'>
                          <p>ভুল : </p>
                          <div className='text-white pieChartColor2'>({questions.length-score-skippedQuestions})</div>
                        </div>
                        <div className='d-flex align-items-baseline gap-2 me-3'>
                          <p>স্কিপ : </p>
                          <div className='pieChartColor3 text-white' >({skippedQuestions})</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="answers-summary">
                  <h4>প্রশ্ন এবং আপনার উত্তর:</h4>
                  <ol>
                    {filteredAnswers.map((answer, index) => (
                      <li
                        key={index}
                        className={
                          answer.isCorrect
                            ? 'correct-answer'
                            : answer.selected === 'সময় শেষ হয়েছে'
                            ? 'skipped-answer'
                            : 'incorrect-answer'
                        }
                      >
                        <p><strong>প্রশ্ন:</strong> {answer.question}</p>
                        <p><strong>আপনার উত্তর:</strong> {answer.selected === 'সময় শেষ হয়েছে' ? 'কোন উত্তর দেওয়া হয়নি' : answer.selected}</p>
                        <p><strong>সঠিক উত্তর:</strong> {answer.correct}</p>
                        <p><strong>অপশন গুলো:</strong> {answer.options.join(", ")}</p>
                      </li>
                    ))}
                  </ol>
                </div>
                <div className="scoreboard-container mt-4">
  <h4>স্কোরবোর্ড:</h4>
  {scoreboard.length > 0 ? (
    <table className="scoreboard-table w-100">
      <thead>
        <tr>
          <th>অবস্থান</th>
          <th>নাম</th>
          <th>প্রতিষ্ঠান</th>
          <th>স্কোর</th>
        </tr>
      </thead>
      <tbody>
        {scoreboard.map((entry, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{entry.username}</td>
            <td>{entry.institute}</td>
            <td>{entry.score}</td>
          </tr>
        ))}
      </tbody>
    </table>
  ) : (
    <p>এখনো কোন স্কোর নেই</p>
  )}
</div>


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
