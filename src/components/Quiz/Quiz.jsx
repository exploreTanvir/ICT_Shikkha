import React, { useState } from 'react';
import './quiz.css';

function Quiz() {
  const questions = [
    {
      question: "বিশ্বগ্রামের ধারণাটি সর্বপ্রথম প্রবর্তন করেন।",
      options: ["মার্শাল ম্যাকলুহান", "বিল গেটস", "মার্ক জাকারবার্গ", "টিম বার্নার্স লি"],
      answer: "মার্শাল ম্যাকলুহান",
      nb:"১"
    },
    {
      question: "আউটসাের্সিং কী?",
      qOption1:"i. নির্দিষ্ট শ্রম ঘণ্টায় কাজ করা ",
      qOption2:"ii. ইন্টারনেটভিত্তিক কাজ ",
      qOption3:"iii. বিশেষ ব্রাউজিং সুবিধা। ",
      qOption4:"iv. বিশ্বব্যাপী নেটওয়ার্ক ব্যবস্থা।",
      options: ["i ও ii","ii ও iii","iv ও iii", "i, ii ও iii"],
      answer: "i ও ii",
      nb:"২"
    }
    ,
    {
      question: "বিশ্বগ্রামের মেরুদণ্ড কোনটি ?",
      options: ["ডেটা", "কানেকটিভিটি", "সফটওয়্যার", "হার্ডওয়্যার"],
      answer: "কানেকটিভিটি",
      nb:"৩"
    },
    {
      question: "বিশ্বগ্রাম ধারণার সাথে কোন বিষয়টি বিশেষভাবে সম্পৃক্ত ?",
      options: ["গ্রামের সাথে শহরের সহজ যােগাযােগ ", "বিশ্বব্যাপী গ্রামকে নগরে পরিবর্তন ", "শিক্ষার অবাধ সুযােগ-সুবিধার বিস্তার ", "ইন্টারনেট সুবিধার ব্যাপক প্রসার "],
      answer: "ইন্টারনেট সুবিধার ব্যাপক প্রসার ",
      nb:"৪"
    },
    {
      question: "সমগ্র পৃথিবী এখন একটি গ্রামে পরিণত হয়েছে। এখন বিভিন্ন দেশের মানুষ খুব সহজেই একজন অন্য জনের সুখে দুঃখে পাশাপাশি ও প্রতিবেশীর মতাে ভাব বিনিময় করছে। উদ্দীপকে কোন বিষয় সম্পর্কে বলা হয়েছে?",
      options: ["নেটওয়ার্ক", "বিশ্বগ্রাম", "ন্যানােটেকনােলজি", " ভার্চুয়াল রিয়েলিটি "],
      answer: "বিশ্বগ্রাম",
      nb:"৫"
    },
    
    {
      question: "বহুল ব্যবহৃত সামাজিক যােগাযােগ মাধ্যম কোনটি? ",
      options: ["Zorpia", "Tagged", "Twitter", "Facebook"],
      answer: "Facebook",
      nb:"৬"
    },
    {
      question: "ফ্রিল্যান্সার কে?",
      options: ["দীর্ঘমেয়াদি চুক্তিতে কর্মরত ব্যক্তি ", "যিনি স্বাধীনভাবে প্রতিষ্ঠানের কাজ করেন।", "সুনির্দিষ্ট কাজের লাইসেন্স নিয়ে কাজ করেন। ", "যিনি নিয়মমাফিক ১০টা-৫টা অফিস করেন"],
      answer: "যিনি স্বাধীনভাবে প্রতিষ্ঠানের কাজ করেন।",
      nb:"৭"
    },
    {
      question: "ইন্টারনেট ব্যবহার করে কর্মসংস্থানের সুযােগকে কী বলা হয়? ",
      options: ["	ই-বিজনেস ", "ই-গভর্নেন্স ", "আউটসাের্সিং","ই-কমার্স "],
      answer: "আউটসাের্সিং",
      nb:"৮"
    },
    
    {
      question: "কর্মসংস্থানের জন্য বর্তমানে- ",
      qOption1:"i. ঘরে বসেই কাজ পাওয়া যায়।",
      qOption2:"ii. ইন্টারনেট সুবিধা নেওয়া যায়",
      qOption3:"iii. বিভিন্ন ওয়েব সুবিধা পাওয়া যায়",
      qOption5: "নিচের কোনটি সঠিক?",
      options: ["i ও ii","i ও iii ","ii ও iii", "i, ii ও iii"],
      answer: "i, ii ও iii",
      nb:"৯"
    },
    {
      question: "khanacademy.org নামক ওয়েবসাইটটির প্রতিষ্ঠাতা কে?",
      options: ["মার্শাল ম্যাকলুহান ", "রে টমলিনসন", "সালমান খান","জাভেদ করিম"],
      answer: "সালমান খান",
      nb:"১০"
    },
    {
      question: "ইন্টারনেটের মাধ্যমে ব্যবসায় পরিচালনা করাকে কী বলে? ",
      options: ["ই-মেইল", "ই-ট্রেড ", " ই-গভর্নেন্স ","ই-কমার্স"],
      answer: "ই-কমার্স",
      nb:"১১"
    },
    {
      question: " ই-কমার্স এর অন্তর্ভুক্ত নয়। ",
      options: ["বিপণন ", "লেনদেন ", "সরবরাহ","প্রচার"],
      answer: "প্রচার",
      nb:"১২"
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [score, setScore] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);

  const handleOptionClick = (option) => {
    setSelectedOption(option);

    // Check if the answer is correct and update the score
    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    setShowFeedback(true);

    // Move to the next question automatically after a short delay
    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedOption('');
        setShowFeedback(false);
      } else {
        // End the quiz
        setQuizFinished(true);
        setSelectedOption('');
      }
    }, 1000); // 1-second delay before moving to the next question
  };

  const handleReset = () => {
    setCurrentQuestion(0);
    setSelectedOption('');
    setScore(0);
    setShowFeedback(false);
    setQuizFinished(false);
  };

  const allCorrect = score === questions.length;
  

  return (
   <div className="quiz">
     <div className="container">
      <div className="row">
        <div className="col-lg-12 d-flex justify-content-center">
        <div className="quiz-container">
      
      {!quizFinished ? (
        <>
        <div className='d-flex justify-content-around align-items-center mb-3'>
        <p>প্রশ্ন নং : {questions[currentQuestion].nb}</p>
        {/* <h3>মেধা যাচাই</h3>  */}
        <button onClick={handleReset} className="reset-btn">রিস্টার্ট কুইজ</button>
        <p>স্কোর : {score} / {questions.length}</p>
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
          <button onClick={handleReset} className="reset-btn">রিস্টার্ট কুইজ</button>
        </div>
      )}
    </div>
        </div>
      </div>
    </div>
   </div>
  );
}

export default Quiz;
