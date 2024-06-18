import "./card.scss";
import "./flip-transition.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Card({onClick}) {
  return (
    <div className="mcard" onClick={onClick}>
      <div className="mcard-back">
        <div><h4>Dr. ABC </h4>
      <div className="desc"><h5>● Specialised in XYZ</h5>
      </div>
        </div>
        </div>
      <div className="mcard-front">
        <div>
        <img src="./person.jpg" className="person" alt="" />
         <h3>Dr. ABC</h3>
        <h4>CSE Department</h4>
        <h5>DBMS, Data Structures</h5>
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