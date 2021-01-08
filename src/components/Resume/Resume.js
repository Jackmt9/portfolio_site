import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import pdf from './Resume.pdf'
import './Resume.css'

// import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/umd/Page/AnnotationLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


export default function Resume(){
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    function downloadFile(){
      window.location.href = {pdf}
    }

  return (

    <div className='resume'>
      <a className='button' href={pdf} download={`Jack_Tawil_Resume_${new Date().toLocaleDateString()}`}>
        Download
        <i className="fas fa-download"/>
      </a>
     
      <Document
        file={pdf}
        onLoadSuccess={onDocumentLoadSuccess}
        // options={{ workerSrc: "/pdf.worker.js" }}
        externalLinkTarget='_blank'
        // loading={this.renderLoader()}
      >
        <Page pageNumber={1}
        width={window.innerWidth} 
        />

      </Document>
      {/* <p>Page {pageNumber} of {numPages}</p> */}
    </div>
  );
}