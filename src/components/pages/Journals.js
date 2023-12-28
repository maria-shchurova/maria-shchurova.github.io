import React from 'react';
import "./Journals.css"

const Journals = () => {
  return (
    <div className="column-wrapper">
        <div className="embedded-board">
            <iframe title='board1'
                width="768"
                height="432"
                src="https://miro.com/app/live-embed/uXjVOvLl_4c=/?moveToViewport=-16350,-3218,10533,4942&embedId=521875386455"
                allow="fullscreen; clipboard-read; clipboard-write"
                allowFullScreen
                style={{ zIndex: 1}}
            ></iframe>
        </div>  
        <div className="embedded-board">
            <iframe title='board2'
                width="768" 
                height="432" 
                src="https://miro.com/app/live-embed/uXjVOAHIPoY=/?moveToViewport=-871,-17986,7132,3434&embedId=734097603633" 
                allow="fullscreen; clipboard-read; clipboard-write" 
                allowfullscreen
                style={{ zIndex: 1}}
            ></iframe>
        </div>
    </div>
  );
};

export default Journals;