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
        <Editor text="<!DOCTYPE html>
                    <html>
                    <head>
                        <title>Html Heading</title>
                    </head>
                    <body>
                        <h2>পাশের বক্সে কোড লিখুন এবং এখানে আউটপুট দেখুন...</h2>
                    </body>
                    </html>"/>
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default EditorPage