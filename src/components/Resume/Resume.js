import { Document, Page, pdfjs } from 'react-pdf';
import pdf from './Resume_V2.pdf'
import './Resume.css'
import Gist from 'react-gist'
import React, { Component } from 'react';
import 'react-pdf/dist/umd/Page/AnnotationLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class Resume extends Component {
  
  state = {
    markdown: false
  }

  getDate = ()  => {
    const date = new Date()
    return date.toISOString().slice(0,10)
  }
  
  toggleMarkdown = () => {
    this.setState(prevState => ({markdown: !prevState.markdown}))
  }
  
  render() {
    const emailBody = 'You may view Jack Tawil\'s resume at https://tawil.dev/resume and can reach him at jackmt9@gmail.com.'
    const emailSubject = 'Jack Tawil - Software Engineer Applicant'
    
    return (
      
      <div className='resume'>
        <a className='button' href={pdf} download={`Jack_Tawil_Resume_${this.getDate()}_UTC`}>
          Download PDF&nbsp;&nbsp;
          <i className="fas fa-download"/>
        </a>
        <a className='button' href={`mailto:?body=${emailBody}&subject=${emailSubject}`}>
          Share&nbsp;&nbsp;
          <i class="fas fa-share-square"/>
        </a>
        <button className='button' onClick={this.toggleMarkdown}>{this.state.markdown ? 'View PDF' : 'View Markdown'}</button>
        {
          this.state.markdown ? 
            <div className='gist'>
              <Gist id='1e2aa4139a02e6b75bdea0a7f8712cd8'/>
            </div>
          :
            <Document
              file={pdf}
              // onLoadSuccess={onDocumentLoadSuccess}
              // options={{ workerSrc: "/pdf.worker.js" }}
              externalLinkTarget='_blank'
              // loading={this.renderLoader()}
            >
              <Page 
                pageNumber={1}
                width={window.innerWidth} 
              />
            </Document>
        }
      </div>
    );
  }
}

export default Resume