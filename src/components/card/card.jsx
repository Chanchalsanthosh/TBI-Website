import "./card.scss";
import "./flip-transition.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';



function Card({onClick}) {
  return (
    <div className="mcard" onClick={onClick}>
      <div className="mcard-back">
        <div><h4>Dr. Ajay James</h4>
      <div className="desc"><h5>● Specialised in Neural Networks and NLP</h5>
      <h5>● Published works on Malayalam Handwritten character recognition using CNN</h5>
      <h5>● Worked on Hidden encryption of text files</h5></div>
        </div>
        </div>
      <div className="mcard-front">
        <div>
        <img src="./person.jpg" className="person" alt="" />
         <h4>Dr. Ajay James</h4>
        <h5>HOD, CSE Department</h5>
        <h6>Data Science, AI, Machine Learning</h6>
        <a href='https://www.linkedin.com/school/gectcr/?originalSubdomain=in' target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} className='link'/>
        </a>
        <a href="https://www.email.com">
        <FontAwesomeIcon icon={faEnvelope} className='email'/></a>
        </div>
      </div>
    </div>
  );
}

export default Card;