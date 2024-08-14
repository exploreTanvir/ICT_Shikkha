import React, { useEffect } from 'react';
import "./Editor.css";

const Editor = () => {
    const defaultHTML = `
       <!DOCTYPE html>
            <html>
            <head>
                <title>Html Heading</title>
            </head>
            <body>
            <p> (a+b)<sup>2</sup> = a<sup>2</sup>+ 2ab + b<sup>2</sup></p>

            <p> f<sub>n</sub> = f<sub>n-1</sub> + <sub>n-2</sub> </p>
            </body>
            </html
    `;

    const run = () => {
        let HTML = document.getElementById("html").value;
        let Output = document.getElementById("output");

        // Inject the HTML into the iframe
        Output.contentDocument.body.innerHTML = HTML;
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
                            <label className='rounded'><i className="fa-brands fa-html5 htmlIcon fs-5 ms-2 me-2"></i> HTML</label>
                            <textarea rows={6} id="html" onKeyUp={run} defaultValue={defaultHTML}></textarea>
                           
                        </div>
                    </div>
                    <div className="right col-lg-6">
                        <label className='html rounded'><i className=" fs-5 ms-2 me-2 fa-solid fa-code"></i> Output</label>
                        <iframe id='output'></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Editor;
