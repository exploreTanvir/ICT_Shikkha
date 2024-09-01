import React, { useEffect, useRef, useState } from 'react';
import "./Editor.css";

const Editor = (props) => {
    const defaultHTML = `${props.text}`;
    const defaultCSS = `${props.cText}`;
    const defaultJS = `${props.jsText}`;

    // Create refs for the textarea and iframe
    const textareaRef = useRef(null);
    const iframeRef = useRef(null);

    // State to manage the active editor (HTML, CSS, JS)
    const [activeEditor, setActiveEditor] = useState('HTML');
    const [htmlContent, setHtmlContent] = useState(defaultHTML);
    const [cssContent, setCssContent] = useState(defaultCSS);
    const [jsContent, setJsContent] = useState(defaultJS);

    const run = () => {
        let HTML = htmlContent;
        let CSS = `<style>${cssContent}</style>`;
        let JS = `<script>${jsContent}<\/script>`;
        let Output = iframeRef.current;

        // Set the entire content of the iframe including the document structure
        const iframeDocument = Output.contentDocument || Output.contentWindow.document;
        iframeDocument.open();
        iframeDocument.write(`${CSS}${HTML}${JS}`);
        iframeDocument.close();
    }

    useEffect(() => {
        // Run the function on initial mount and when content changes
        run();
    }, [htmlContent, cssContent, jsContent]);

    const handleTextareaChange = (e) => {
        if (activeEditor === 'HTML') {
            setHtmlContent(e.target.value);
        } else if (activeEditor === 'CSS') {
            setCssContent(e.target.value);
        } else if (activeEditor === 'JS') {
            setJsContent(e.target.value);
        }
    };

    return (
        <div className='editor'>
            <div className="container">
            
                <div className="row">
                    <div className="left col-lg-6 wow fadeInLeft" >
                        <div className='d-flex flex-column'>
                            <div className='editorTitle d-flex gap-4 ps-4'>
                                <label
                                    className={`px-2 ${activeEditor === 'HTML' ? 'active' : ''}`}
                                    onClick={() => setActiveEditor('HTML')}
                                >
                                    <i className="fa-brands fa-html5 htmlIcon fs-4 mx-2"></i> HTML
                                </label>
                                <label
                                    className={`px-2 ${activeEditor === 'CSS' ? 'active' : ''}`}
                                    onClick={() => setActiveEditor('CSS')}
                                >
                                    <i className="fa-brands fa-css3-alt cssIcon fs-4 mx-2"></i> CSS
                                </label>
                                <label
                                    className={`px-2 ${activeEditor === 'JS' ? 'active' : ''}`}
                                    onClick={() => setActiveEditor('JS')}
                                >
                                    <i className="fa-brands fa-square-js jsIcon fs-4 mx-2"></i> JS
                                </label>
                            </div>
                            <textarea
                                rows={7}
                                className='mt-2'
                                ref={textareaRef}
                                placeholder={`Write your ${activeEditor} code here...`}
                                onChange={handleTextareaChange}
                                value={
                                    activeEditor === 'HTML' ? htmlContent :
                                    activeEditor === 'CSS' ? cssContent :
                                    jsContent
                                }
                            >
                            </textarea>
                        </div>
                    </div>
                    <div className="right col-lg-6 wow fadeInRight">
                        <label className='html rounded'>
                            <i className="fs-5 mx-2 fa-solid fa-code"></i> Output
                        </label>
                        <iframe className='mt-2' title='output' ref={iframeRef}></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Editor;
