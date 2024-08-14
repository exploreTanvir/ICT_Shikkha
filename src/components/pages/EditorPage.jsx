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
                        <h1>Write your code here and try yourself</h1>
                    </body>
                    </html>"/>
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default EditorPage