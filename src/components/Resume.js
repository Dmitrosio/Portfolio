import resumePDF from './Dmitriis Resume.pdf';
import resumePic from './Resume_Pic.png';
import './Resume.css';

export default function Resume() {
    return(
        <div class='resume'>
          <h1>My Resume</h1>
          <img src={resumePic} alt='Nothing? Thats not okay.'/>
          <a href={resumePDF} download="Dmitrii Orlov Resume.pdf">
            <button>Download PDF</button>
          </a>
        </div>
    )
}