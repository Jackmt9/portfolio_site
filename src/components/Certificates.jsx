import { Document, Page, pdfjs } from 'react-pdf';
import React, { Component } from 'react';
import 'react-pdf/dist/umd/Page/AnnotationLayer.css';
import cert from '../images/flatiron_certificate.pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const flatironCertificate = () => {
    return ( 
        <div>
            <Document
              file={cert}
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
        </div>
     );
}
 
export default flatironCertificate;