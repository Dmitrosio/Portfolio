import resumePDF from './Dmitriis Resume.pdf';
import './Resume.css';

export default function Resume() {
    return(
        <div class='resume'>
        <h1>My Resume</h1>
        <iframe
          title="Resume"
          src={resumePDF}
        >
          This browser does not support PDFs. Please download the PDF to view it.
        </iframe>
      </div>
    )
}