import React from "react";
import '../../App.css';
import CVasImage from "../../../src/assets/images/links/as _image.png"
import PDF_CV from '../../../src/assets/CV_NEW_2024.pdf';
function CV()
{
    return (
        <div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '30px', // Add margin to the top
            }}
          >
            <a
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: '1'
              }}
              href={PDF_CV}
              download="CV_NEW_2024.pdf"
            >
              Download CV as PDF
            </a>
          </div>
      
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '90vh', // This makes the div take up the full viewport height
            }}
          >
            <img src={CVasImage} alt="cv png" className="full-image" />
          </div>
        </div>
      );
}
export default CV;