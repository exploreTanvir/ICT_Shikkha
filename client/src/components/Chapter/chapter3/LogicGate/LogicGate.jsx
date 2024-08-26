import { useState } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import lightOn from '../../../../assets//LightOn.png'
import andGate from '../../../../assets/and.png'
import lightOf from '../../../../assets/bublOff.png'
import nandGate from '../../../../assets/nand.png'
import norGate from '../../../../assets/nor.png'
import notGate from '../../../../assets/Not-gate-en.svg.png'
import norAnd from '../../../../assets/notAnd.jpg'
import orGate from '../../../../assets/or.jpg'
import orNot from '../../../../assets/orNot.jpg'
import xnorGate from '../../../../assets/xnor.png'
import xorGate from '../../../../assets/xor.png'
import { Chpt3SubDetail } from '../../../chapterSub/Chpt3Sub/Chpt3SubDetail'
import Footer from '../../../Footer/Footer'
import Nav from '../../../Nav/Nav'
import Newsletter from '../../../newsletter/Newsletter'
import TopBar from '../../../topbar/TopBar'
import "../../chapter1/GlobalVillage/GlobalVillage.css"
import "./LogicGate.css"

const LogicGate = () => {

    const [input, setInput] = useState(0);
    const [inputAnd, setInputAnd] = useState(0);
    const [inputTwo, setInputTwo] = useState(0);
    const [inputOr, setInputOr] = useState(0);
    const [inputOrTwo, setInputOrTwo] = useState(0);
    const [inputNand, setInputNand] = useState(0);
    const [inputNandTwo, setInputNandTwo] = useState(0);
    const [inputNor, setInputNor] = useState(0);
    const [inputNorTwo, setInputNorTwo] = useState(0);
    const [inputXor, setInputXor] = useState(0);
    const [inputXorTwo, setInputXorTwo] = useState(0);
    const [inputXnor, setInputXnor] = useState(0);
    const [inputXnorTwo, setInputXnorTwo] = useState(0);

    const handleClick = () => {
      setInput(input === 0 ? 1 : 0);
    };
    const handleClickAnd = () => {
      setInputAnd(inputAnd === 0 ? 1 : 0);
    };
    const handleClickTwo = () => {
      setInputTwo(inputTwo === 0 ? 1 : 0);
    };
    const handleClickOr = () => {
      setInputOr(inputOr === 0 ? 1 : 0);
    };
    const handleClickOrTwo = () => {
      setInputOrTwo(inputOrTwo === 0 ? 1 : 0);
    };
    const handleClickNand = () => {
      setInputNand(inputNand === 0 ? 1 : 0);
    };
    const handleClickNandTwo = () => {
      setInputNandTwo(inputNandTwo === 0 ? 1 : 0);
    };
    const handleClickNor = () => {
      setInputNor(inputNor === 0 ? 1 : 0);
    };
    const handleClickNorTwo = () => {
      setInputNorTwo(inputNorTwo === 0 ? 1 : 0);
    };
    const handleClickXor = () => {
      setInputXor(inputXor === 0 ? 1 : 0);
    };
    const handleClickXorTwo = () => {
      setInputXorTwo(inputXorTwo === 0 ? 1 : 0);
    };
    const handleClickXnor = () => {
      setInputXnor(inputXnor === 0 ? 1 : 0);
    };
    const handleClickXnorTwo = () => {
      setInputXnorTwo(inputXnorTwo === 0 ? 1 : 0);
    };
  return (
        <div>
            <TopBar/>
            <Nav/>
        <div className="container chapterOneMain">
            <div className="row chapterOneMain py-3">
                <div className="col-lg-9">
                <div className="booktop">
            <h1>তৃতীয় অধ্যায়</h1>
            <h3>সংখ্যা পদ্ধতি ও ডিজিটাল ডিভাইস</h3>
            <h3>লজিক গেট (Logic Gate)</h3>
        </div>


        <h4 className='mt-5'><b>মৌলিক গেট : </b></h4>
        <p>যে সকল গেট অন্য গেটের সাহায্য ছাড়া তৈরি করা হয় সে সকল গেটকে মৌলিক গেট বলে। </p>
        <p>মৌলিক গেট ৩টি। যথাঃ</p>

        <ul>
            <li>নট গেট (NOT Gate)</li>
            <li>অ্যান্ড গেট (AND Gate)</li>
            <li>অর গেট (OR Gate)</li>              
            </ul>

            <p>ইত্যাদি ক্ষেতে কৃত্রিম বুদ্ধিমত্তা প্রয়োগ করা হয়। কৃত্রিম বুদ্ধিমত্তা বাস্তবায়নে LISP, CLISP, PROLOG, C/C++, Java ইত্যাদি ভাষা ব্যবহার করা হয়।</p>

        <h4 className='mt-5'><b>নট গেইট (NOT Gate): </b></h4> 
        <p>NOT Gate পূরক অর্থাৎ বিপরীত মান আউটপুট হিসেবে প্রদান করে। এতে একটি মাত্র ইনপুট এবং একটি মাত্র আউটপুট থাকে। NOT Gate-এ ইনপুট ১ দিলে আউটপুট হিসেবে ০ পাওয়া যায়, অপরদিকে ইনপুট ০ দিলে আউটপুট ১ পাওয়া যায়।</p>
        <i className='text-primary'>[ বিঃদ্রঃ NOT Gate সিম্যুলেশন করে দেখতে ‘X’  বাটনটি প্রেস করো। ]</i>
        <div className="logic-gate justify-content-around">    
       
      <div className="not-gate-container">  
        <div className={input===0?"input px-3 py-2 rounded":"input px-3 py-2 rounded inputClicked"} onClick={handleClick}>
          X = {input}
        </div>
        <div className={input===0?"bar":"barClick"}></div>
       <div className='d-flex align-items-center'>
         <img src={notGate} alt="" className='notGateImg' />
       <div className={input===0?"barClick":"bar"}></div>
       </div>
        <div className="output d-flex">
        <div className={input === 0 ?"inputClicked px-3 rounded":" px-3 rounded input"}>
        {input === 0 ? 1 : 0}
       </div> 
        <div></div>
          <img 
            src={input === 0 ? lightOn : lightOf} 
            alt="Light Bulb" 
            className="light-bulb"
          />
          
        </div>
      </div>
      <div className="truth-table">
        <p className='text-center'>সত্যক সারণী</p>
        <table>
          <thead>
          <tr >
              <th>X</th>
              <th>X'</th>
            </tr>
          </thead>
          <tbody>
            
            <tr className={input === 0 ? 'highlight' : ''}>
              <td>0</td>
              <td>1</td>
            </tr>
            <tr className={input === 1 ? 'highlight' : ''}>
              <td>1</td>
              <td>0</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>


    <h4 className='mt-4'><b> এন্ড গেইট(AND Gate) : </b></h4> 
    <p>AND Gate যৌক্তিক গুণফলকে আউটপুট হিসেবে প্রদান করে। এতে দুই বা ততোধিক ইনপুট এবং একটি মাত্র আউটপুট থাকে। যেহেতু AND Gate গুণ করে থাকে তাই যেকোন একটি ইনপুট ০ হলেই আউটপুট ০ পাওয়া যায়। কেবলমাত্র সমস্ত ইনপুটের মান ১ হলেই আউটপুট এর মান ১ পাওয়া যায়।</p>
    <i className='text-primary'>[ বিঃদ্রঃ AND Gate সিম্যুলেশন করে দেখতে ‘X’ ও ‘Y’ বাটন দুটি প্রেস করো। ] </i>
        <div className="logic-gate justify-content-around">    
      <div className="not-gate-container">  
        <div className='d-flex flex-column gap-3'>
        <div className='d-flex align-items-end'>
        <div className={inputAnd===0?"input px-3 rounded":"px-3 rounded inputClicked"} onClick={handleClickAnd}>
          X = {inputAnd}
        </div>
        <div className={inputAnd===0?"bar":"barClick"}></div>
        </div>
        <div className='d-flex align-items-start'>
        <div className={inputTwo===0?"input px-3 rounded":" px-3 rounded inputClicked"} onClick={handleClickTwo}>
          Y = {inputTwo}
        </div>
        <div className={inputTwo===0?"bar":"barClick"}></div>
        </div>
        </div>
        <div className="d-flex align-items-center">
          <img src={andGate} alt="" className='notGateImg' />
        <div className={inputAnd === 1 && inputTwo === 1 ?"barClick":"bar"}></div>
        </div>
        
        <div className="output d-flex">
        <div className={inputAnd === 1 && inputTwo === 1?"inputClicked px-3 rounded":" px-3 rounded input"}>
        {inputAnd === 0 || inputTwo === 0 ? 0 : 1}
       </div> 
          <img 
            src={inputAnd === 1 && inputTwo === 1 ? lightOn : lightOf} 
            alt="Light Bulb" 
            className="light-bulb"
          />
          
        </div>
      </div>
      <div className="truth-table">
        <p className='text-center'>সত্যক সারণী</p>
        <table>
          <thead>
          <tr >
              <th>X</th>
           <th>Y</th>
              <th>X.Y</th>
            </tr>
          </thead>
          <tbody>
            
            <tr className={inputAnd === 0 && inputTwo === 0 ? 'highlight' : ''}>
              <td>0</td>
              <td>0</td>
              <td>0</td>
            </tr>
            <tr className={inputAnd === 0 && inputTwo === 1 ? 'highlight' : ''}>
            <td>0</td>
              <td>1</td>
              <td>0</td>
            </tr>
            <tr className={inputAnd === 1 && inputTwo === 0 ? 'highlight' : ''}>
            <td>1</td>
              <td>0</td>
              <td>0</td>
            </tr>
            <tr className={inputAnd === 1 && inputTwo === 1 ? 'highlight' : ''}>
            <td>1</td>
              <td>1</td>
              <td>1</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>


    <h4 className='mt-4'><b>অর গেইট (OR Gate) : </b></h4> 
    <p>OR Gate যৌক্তিক যোগফলকে আউটপুট হিসেবে প্রদান করে। এতে দুই বা ততোধিক ইনপুট এবং একটি মাত্র আউটপুট থাকে। যেহেতু OR Gate যোগ করে থাকে তাই যেকোন একটি ইনপুট ১ হলেই আউটপুট ১ পাওয়া যায়। কেবলমাত্র সমস্ত ইনপুটের মান ০ হলেই আউটপুট এর মান ০ পাওয়া যায়।</p>
    <i className='text-primary'>[ বিঃদ্রঃ OR Gate সিম্যুলেশন করে দেখতে ‘X’ ও ‘Y’ বাটন দুটি প্রেস করো। ]</i>
        <div className="logic-gate justify-content-around">    
      <div className="not-gate-container">  
        <div className='d-flex flex-column gap-3'>
        <div className='d-flex align-items-end'>
        <div className={inputOr===0?"input px-3 rounded":"input px-3 rounded inputClicked"} onClick={handleClickOr}>
          X = {inputOr}
        </div>
        <div className={inputOr===0?"bar":"barClick"}></div>
        </div>
        <div className='d-flex align-items-start'>
        <div className={inputOrTwo===0?"input px-3 rounded":"input px-3 rounded inputClicked"} onClick={handleClickOrTwo}>
          Y = {inputOrTwo}
        </div>
        <div className={inputOrTwo===0?"bar":"barClick"}></div>
        </div>
        </div>
        <div className="d-flex align-items-center">
           <img src={orGate} alt="" className='notGateImg' />
        <div className={inputOr === 1 || inputOrTwo === 1 ?"barClick":"bar"}></div>
        </div>
       
        <div className="output d-flex">
        
        <div className={inputOr === 1 || inputOrTwo === 1?"inputClicked px-3 rounded":" px-3 rounded input"}>
        {inputOr === 1 || inputOrTwo === 1 ? 1 : 0}
        </div>
          <img 
            src={inputOr === 1 || inputOrTwo === 1 ? lightOn : lightOf} 
            alt="Light Bulb" 
            className="light-bulb"
          />
          
        </div>
      </div>
      <div className="truth-table">
        <p className='text-center'>সত্যক সারণী</p>
        <table>
          <thead>
          <tr >
              <th>X</th>
           <th>Y</th>
              <th>X+Y</th>
            </tr>
          </thead>
          <tbody>
            
            <tr className={inputOr === 0 && inputOrTwo === 0 ? 'highlight' : ''}>
              <td>0</td>
              <td>0</td>
              <td>0</td>
            </tr>
            <tr className={inputOr === 0 && inputOrTwo === 1 ? 'highlight' : ''}>
            <td>0</td>
              <td>1</td>
              <td>1</td>
            </tr>
            <tr className={inputOr === 1 && inputOrTwo === 0 ? 'highlight' : ''}>
            <td>1</td>
              <td>0</td>
              <td>1</td>
            </tr>
            <tr className={inputOr === 1 && inputOrTwo === 1 ? 'highlight' : ''}>
            <td>1</td>
              <td>1</td>
              <td>1</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>


    <h4 className='mt-5'><b>যৌগিক গেট(Compound Gates)  : </b></h4>
        <p>একাধিক মৌলিক গেটের সমন্বয়ে যে গেট তৈরি করা হয় তাকে যৌগিক গেট বলে। যেমন- AND Gate +NOT Gate = NAND Gate,  OR Gate + NOT Gate = NOR Gate। </p>
        <p>যৌগিক গেইটকে দুই ভাগে ভাগ করা যায়। যেমন-</p>

        <ul>
            <li>সার্বজনীন গেট (NOR ও NAND)</li>
            <li>বিশেষ গেট (X-OR ও X-NOR)</li>           
            </ul>

        <p>যে গেট এর সাহায্যে মৌলিক গেটসহ অন্যান্য সকল গেট বাস্তবায়ন বা তৈরি করা যায় তাকে সার্বজনীন গেট বলে। সার্বজনীন গেট ২টি। যথা : </p>
        <ul>
          <li>ন্যাণ্ড গেট (NAND Gate)</li>
          <li>নর গেট (NOR Gate)</li>
        </ul>

        <h4 className='mt-5'><b>ন্যাণ্ড গেট (NAND Gate) : </b></h4>
        <p>একটি AND গেট ও একটি NOT গেট এর সমন্বয়ে NAND গেট তৈরি হয়। সুতরাং NAND Gate এর আউটপুট হবে AND Gate এর ঠিক বিপরীত। এতে যেকোন একটি ইনপুট ০ হলেই আউটপুট ১ পাওয়া যায়। কেবলমাত্র সমস্ত ইনপুটের মান ১ হলেই আউটপুট এর মান ০ পাওয়া যায়। </p>
        <div className='text-center mb-3'>

               <img src={norAnd} className='w-50' alt="" />
          </div>
        <i className='text-primary'>[ বিঃদ্রঃ NAND Gate সিম্যুলেশন করে দেখতে ‘X’ ও ‘Y’ বাটন দুটি প্রেস করো। ]</i>


        <div className="logic-gate justify-content-around">    
      <div className="not-gate-container">  
        <div className='d-flex flex-column gap-3'>
        <div className='d-flex align-items-end'>
        <div className={inputNand===0?"input px-3 rounded":"px-3 rounded inputClicked"} onClick={handleClickNand}>
          X = {inputNand}
        </div>
        <div className={inputNand===0?"bar":"barClick"}></div>
        </div>
        <div className='d-flex align-items-start'>
        <div className={inputNandTwo===0?"input px-3 rounded":" px-3 rounded inputClicked"} onClick={handleClickNandTwo}>
          Y = {inputNandTwo}
        </div>
        <div className={inputNandTwo===0?"bar":"barClick"}></div>
        </div>
        </div>
        <div className="d-flex align-items-center">
          <img src={nandGate} alt="" className='notGateImg' />
        <div className={inputNand === 0 || inputNandTwo === 0 ?"barClick":"bar"}></div>
        </div>
        
        <div className="output d-flex">
        <div className={inputNand === 0 || inputNandTwo === 0?"inputClicked px-3 rounded":" px-3 rounded input"}>
        {inputNand === 0 || inputNandTwo === 0 ? 1 : 0}
       </div> 
          <img 
            src={inputNand === 0 || inputNandTwo === 0 ? lightOn : lightOf} 
            alt="Light Bulb" 
            className="light-bulb"
          />
          
        </div>
      </div>
      <div className="truth-table">
        <p className='text-center'>সত্যক সারণী</p>
        <table>
          <thead>
          <tr >
              <th>X</th>
           <th>Y</th>
              <th>(X.Y)'</th>
            </tr>
          </thead>
          <tbody>
            
            <tr className={inputNand === 0 && inputNandTwo === 0 ? 'highlight' : ''}>
              <td>0</td>
              <td>0</td>
              <td>1</td>
            </tr>
            <tr className={inputNand === 0 && inputNandTwo === 1 ? 'highlight' : ''}>
            <td>0</td>
              <td>1</td>
              <td>1</td>
            </tr>
            <tr className={inputNand === 1 && inputNandTwo === 0 ? 'highlight' : ''}>
            <td>1</td>
              <td>0</td>
              <td>1</td>
            </tr>
            <tr className={inputNand === 1 && inputNandTwo === 1 ? 'highlight' : ''}>
            <td>1</td>
              <td>1</td>
              <td>0</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
        <h4 className='mt-5'><b>নর গেট (NOR Gate) : </b></h4>
        <p>একটি OR গেট ও একটি NOT গেট এর সমন্বয়ে NOR গেট তৈরি হয়। সুতরাং NOR Gate এর আউটপুট হবে OR Gate এর ঠিক বিপরীত। এতে যেকোন একটি ইনপুট ১ হলেই আউটপুট ০ পাওয়া যায়। কেবলমাত্র সমস্ত ইনপুটের মান ০ হলেই আউটপুট এর মান ১ পাওয়া যায়। </p>
       
          <div className='text-center mb-3'>
               <img src={orNot} className='w-50' alt="" />
          </div>
<i className='text-primary'>[ বিঃদ্রঃ NOR Gate সিম্যুলেশন করে দেখতে ‘X’ ও ‘Y’ বাটন দুটি প্রেস করো। ]</i>
        <div className="logic-gate justify-content-around">    
      <div className="not-gate-container">  
        <div className='d-flex flex-column gap-3'>
        <div className='d-flex align-items-end'>
        <div className={inputNor===0?"input px-3 rounded":"px-3 rounded inputClicked"} onClick={handleClickNor}>
          X = {inputNor}
        </div>
        <div className={inputNor===0?"bar":"barClick"}></div>
        </div>
        <div className='d-flex align-items-start'>
        <div className={inputNorTwo===0?"input px-3 rounded":" px-3 rounded inputClicked"} onClick={handleClickNorTwo}>
          Y = {inputNorTwo}
        </div>
        <div className={inputNorTwo===0?"bar":"barClick"}></div>
        </div>
        </div>
        <div className="d-flex align-items-center">
          <img src={norGate} alt="" className='notGateImg' />
        <div className={inputNor === 0 && inputNorTwo === 0 ?"barClick":"bar"}></div>
        </div>
        
        <div className="output d-flex">
        <div className={inputNor === 0 && inputNorTwo === 0?"inputClicked px-3 rounded":" px-3 rounded input"}>
        {inputNor === 0 && inputNorTwo === 0 ? 1 : 0}
       </div> 
          <img 
            src={inputNor === 0 && inputNorTwo === 0? lightOn : lightOf} 
            alt="Light Bulb" 
            className="light-bulb"
          />
          
        </div>
      </div>
      <div className="truth-table">
        <p className='text-center'>সত্যক সারণী</p>
        <table>
          <thead>
          <tr >
              <th>X</th>
           <th>Y</th>
              <th>(X+Y)'</th>
            </tr>
          </thead>
          <tbody>
            
            <tr className={inputNor === 0 && inputNorTwo === 0 ? 'highlight' : ''}>
              <td>0</td>
              <td>0</td>
              <td>1</td>
            </tr>
            <tr className={inputNor === 0 && inputNorTwo === 1 ? 'highlight' : ''}>
            <td>0</td>
              <td>1</td>
              <td>0</td>
            </tr>
            <tr className={inputNor === 1 && inputNorTwo === 0 ? 'highlight' : ''}>
            <td>1</td>
              <td>0</td>
              <td>0</td>
            </tr>
            <tr className={inputNor === 1 && inputNorTwo === 1 ? 'highlight' : ''}>
            <td>1</td>
              <td>1</td>
              <td>0</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <h4 className='mt-5'><b>বিশেষ গেট(Special Gates) : </b></h4>
    <p>বিশেষ বিশেষ কাজের জন্য আরো দুইটি গেট ব্যবহার করা হয়, এক্সর গেট (XOR Gate) এবং এক্সনর গেট (XNOR Gate)।</p>
    <h4 className='mt-5'><b>এক্সর গেট (XOR Gate) : </b></h4>
    <p>XOR এর পূর্ণরূপ Exclusive OR। এতে বিজোড় সংখ্যাক ১ ইনপুট দিলে আউটপুট ১, অন্যথায় আউটপুট ০ পাওয়া যায়।</p>


    <div className="logic-gate justify-content-around">    
      <div className="not-gate-container">  
        <div className='d-flex flex-column gap-3'>
        <div className='d-flex align-items-end'>
        <div className={inputXor===0?"input px-3 rounded":"px-3 rounded inputClicked"} onClick={handleClickXor}>
          X = {inputXor}
        </div>
        <div className={inputXor===0?"bar":"barClick"}></div>
        </div>
        <div className='d-flex align-items-start'>
        <div className={inputXorTwo===0?"input px-3 rounded":" px-3 rounded inputClicked"} onClick={handleClickXorTwo}>
          Y = {inputXorTwo}
        </div>
        <div className={inputXorTwo===0?"bar":"barClick"}></div>
        </div>
        </div>
        <div className="d-flex align-items-center">
          <img src={xorGate} alt="" className='notGateImg' />
        <div className={inputXor+inputXorTwo === 1?"barClick":"bar"}></div>
        </div>
        
        <div className="output d-flex">
        <div className={inputXor+inputXorTwo === 1?"inputClicked px-3 rounded":" px-3 rounded input"}>
        {inputXor+inputXorTwo === 1? 1 : 0}
       </div> 
          <img 
            src={inputXor+inputXorTwo === 1 ? lightOn : lightOf} 
            alt="Light Bulb" 
            className="light-bulb"
          />

          
        </div>
      </div>
      <div className="truth-table">
        <p className='text-center'>সত্যক সারণী</p>
        <table>
          <thead>
          <tr >
              <th>X</th>
           <th>Y</th>
              <th>(X+Y)'</th>
            </tr>
          </thead>
          <tbody>
            
            <tr className={inputXor === 0 && inputXorTwo === 0 ? 'highlight' : ''}>
              <td>0</td>
              <td>0</td>
              <td>0</td>
            </tr>
            <tr className={inputXor === 0 && inputXorTwo === 1 ? 'highlight' : ''}>
            <td>0</td>
              <td>1</td>
              <td>1</td>
            </tr>
            <tr className={inputXor === 1 && inputXorTwo === 0 ? 'highlight' : ''}>
            <td>1</td>
              <td>0</td>
              <td>1</td>
            </tr>
            <tr className={inputXor === 1 && inputXorTwo === 1 ? 'highlight' : ''}>
            <td>1</td>
              <td>1</td>
              <td>0</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>



    <h4 className='mt-5'><b>এক্সনর গেট (XNOR Gate) : </b></h4>
    <p>XNOR এর পূর্ণরূপ Exclusive NOR। এটি XOR এর বিপরীত আউটপুট দেয়। এতে বিজোড় সংখ্যাক ১ ইনপুট দিলে আউটপুট ০, অন্যথায় আউটপুট ১ পাওয়া যায়।</p>


    <div className="logic-gate justify-content-around">    
      <div className="not-gate-container">  
        <div className='d-flex flex-column gap-3'>
        <div className='d-flex align-items-end'>
        <div className={inputXnor===0?"input px-3 rounded":"px-3 rounded inputClicked"} onClick={handleClickXnor}>
          X = {inputXnor}
        </div>
        <div className={inputXnor===0?"bar":"barClick"}></div>
        </div>
        <div className='d-flex align-items-start'>
        <div className={inputXnorTwo===0?"input px-3 rounded":" px-3 rounded inputClicked"} onClick={handleClickXnorTwo}>
          Y = {inputXnorTwo}
        </div>
        <div className={inputXnorTwo===0?"bar":"barClick"}></div>
        </div>
        </div>
        <div className="d-flex align-items-center">
          <img src={xnorGate} alt="" className='notGateImg' />
        <div className={inputXnor+inputXnorTwo === 0||inputXnor+inputXnorTwo === 2 ?"barClick":"bar"}></div>
        </div>
        
        <div className="output d-flex">
        <div className={inputXnor+inputXnorTwo === 0||inputXnor+inputXnorTwo === 2 ?"inputClicked px-3 rounded":" px-3 rounded input"}>
        {inputXnor+inputXnorTwo === 0||inputXnor+inputXnorTwo === 2 ? 1 : 0}
       </div> 
          <img 
            src={inputXnor+inputXnorTwo === 0||inputXnor+inputXnorTwo === 2 ? lightOn : lightOf} 
            alt="Light Bulb" 
            className="light-bulb"
          />

          
        </div>
      </div>
      <div className="truth-table">
        <p className='text-center'>সত্যক সারণী</p>
        <table>
          <thead>
          <tr >
              <th>X</th>
           <th>Y</th>
              <th>(X<i className="fa-solid fa-circle-plus"></i>Y)'</th>
            </tr>
          </thead>
          <tbody>
            
            <tr className={inputXnor === 0 && inputXnorTwo === 0 ? 'highlight' : ''}>
              <td>0</td>
              <td>0</td>
              <td>1</td>
            </tr>
            <tr className={inputXnor === 0 && inputXnorTwo === 1 ? 'highlight' : ''}>
            <td>0</td>
              <td>1</td>
              <td>0</td>
            </tr>
            <tr className={inputXnor === 1 && inputXnorTwo === 0 ? 'highlight' : ''}>
            <td>1</td>
              <td>0</td>
              <td>0</td>
            </tr>
            <tr className={inputXnor === 1 && inputXnorTwo === 1 ? 'highlight' : ''}>
            <td>1</td>
              <td>1</td>
              <td>1</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>


                </div>
                <div className="col-lg-3 ">
                <div className="chapterLeft">
                {
                Chpt3SubDetail.map((item,index)=>{
        return(
          <Link to={item.name} className="mb-4">
             <h4 className='chapterOne'>{item.title}</h4>
          </Link>
        )
      })
    }
                </div>
                </div>
        </div>
      </div>
      <Newsletter/>
      <Footer/>
        </div>
  )
}

export default LogicGate