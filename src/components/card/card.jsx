import "./card.scss";
import "./flip-transition.scss";

function Card({onClick}) {
  return (
    <div className="card" onClick={onClick}>
      <div className="card-back">
        <div><h4>Dr. Ajay James</h4>
      <div className="desc"><h6>● Specialised in Neural Networks and NLP</h6>
      <h6>● Published works on Malayalam Handwritten character recognition using CNN</h6>
      <h6>● Worked on Hidden encryption of text files</h6></div>
        </div>
        </div>
      <div className="card-front">
        <div>
        <img src="./person.jpg" alt="" />
         <h4>Dr. Ajay James</h4>
        <h5>HOD, CSE Department</h5>
        <h6>Data Science, AI, Machine Learning</h6>
        </div>
      </div>
    </div>
  );
}

export default Card;