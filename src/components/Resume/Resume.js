// import React, { useState } from 'react';
import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import pdf from './Resume.pdf'
import './Resume.css'

// import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/umd/Page/AnnotationLayer.css';
// import { getDefaultNormalizer } from '@testing-library/react';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


export default function Resume(){
    // const [numPages, setNumPages] = useState(null);
    // const [pageNumber, setPageNumber] = useState(1);

    // function onDocumentLoadSuccess({ numPages }) {
    //     setNumPages(numPages);
    // }
  function getDate() {
    const date = new Date()
    return date.toISOString().slice(0,10)
  }

  const emailBody = 'You may view Jack Tawil\'s resume at https://tawil.dev/resume and can reach him at jackmt9@gmail.com.'
  const emailSubject = 'Jack Tawil - Software Engineer Applicant'


  return (

    <div className='resume'>
      <script src="https://gist.github.com/Jackmt9/1e2aa4139a02e6b75bdea0a7f8712cd8.js"></script>
      <a className='button' href={pdf} download={`Jack_Tawil_Resume_Download_${getDate()}`}>
        Download&nbsp;&nbsp;
        <i className="fas fa-download"/>
      </a>
      <a className='button' href={`mailto:?body=${emailBody}&subject=${emailSubject}`}>
        Share&nbsp;&nbsp;
        <i class="fas fa-share-square"/>
      </a>
     
      <Document
        file={pdf}
        // onLoadSuccess={onDocumentLoadSuccess}
        // options={{ workerSrc: "/pdf.worker.js" }}
        externalLinkTarget='_blank'
        // loading={this.renderLoader()}
      >
        <Page pageNumber={1}
        width={window.innerWidth} 
        />

      </Document>
      {/* <p>Page {pageNumber} of {numPages}</p> */}

      <a target='_blank' href='https://gist.github.com/Jackmt9/1e2aa4139a02e6b75bdea0a7f8712cd8' className='gist' rel="noopener noreferrer">View Resume In Markdown Format</a>
    </div>
  );
}