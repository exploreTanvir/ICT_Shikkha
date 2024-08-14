import React, { useEffect, useRef } from 'react';
import "./Editor.css";

const Editor = (props) => {
    const defaultHTML = `${props.text}`;

    // Create refs for the textarea and iframe
    const textareaRef = useRef(null);
    const iframeRef = useRef(null);

    const run = () => {
        let HTML = textareaRef.current.value;
        let Output = iframeRef.current;

        // Set the entire content of the iframe including the document structure
        const iframeDocument = Output.contentDocument || Output.contentWindow.document;
        iframeDocument.open();
        iframeDocument.write(HTML);
        iframeDocument.close();
    }

    useEffect(() => {
        // Run the function on initial mount to load the default HTML
        run();
    }, []);

    return (
        <div className='editor'>
            <div className="container">
                <div className="row">
                    <div className="left col-lg-6">
                        <div className='d-flex flex-column'>
                            <label className='rounded'>
                                <i className="fa-brands fa-html5 htmlIcon fs-5 ms-2 me-2"></i> HTML
                            </label>
                            <textarea 
                                rows={7} 
                                ref={textareaRef} 
                                placeholder="এখানে তোমার কোড লেখ..." 
                                onKeyUp={run} 
                                defaultValue={defaultHTML}>
                            </textarea>
                        </div>
                    </div>
                    <div className="right col-lg-6">
                        <label className='html rounded'>
                            <i className="fs-5 ms-2 me-2 fa-solid fa-code"></i> Output
                        </label>
                        <iframe title='output' ref={iframeRef}></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Editor;
