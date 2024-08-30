import React from 'react';
import Editor from '../Editor/Editor';
import Footer from './../Footer/Footer';
import Nav from './../Nav/Nav';
import Newsletter from './../newsletter/Newsletter';
import TopBar from './../topbar/TopBar';

const EditorPage = () => {
  return (
    <div>
        <TopBar/>
        <Nav/>
        <Editor cText="h2{
                            color: darkblue;
                        }
                        button{
                            padding: 10px 15px;
                            border-radius: 5px;
                            background: darkblue;
                            color: white;
                            font-weight: 600;
                            font-size: 18px;
                          }
  " jsText=" function handleClick(){
        alert('জাভাস্ক্রিপ্ট কোড রান হচ্ছে....')
      }" text="<!DOCTYPE html>
                    <html>
                    <head>
                        <title>Html Practice</title>
                    </head>
                    <body>
                        <h2>পাশের বক্সে কোড লিখুন এবং এখানে আউটপুট দেখুন...</h2>
                        <button onclick={handleClick()}>ক্লিক করুণ</button>
                    </body>
                    </html>"/>
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default EditorPage