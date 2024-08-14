import React from 'react'
import TopBar from './../topbar/TopBar';
import Nav from './../Nav/Nav';
import Editor from '../Editor/Editor';
import Newsletter from './../newsletter/Newsletter';
import Footer from './../Footer/Footer';

const EditorPage = () => {
  return (
    <div>
        <TopBar/>
        <Nav/>
        <Editor/>
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default EditorPage