import "./card.scss";
import "./flip-transition.scss";

function Card({onClick}) {
  return (
    <div className="card" onClick={onClick}>
      <div className="card-back">
        <div><h4>Dr. ABC </h4>
      <div className="desc"><h6>● Specialised in XYZ</h6>
      </div>
        </div>
        </div>
      <div className="card-front">
        <div>
        <img src="./person.jpg" alt="" />
         <h4>Dr. ABC</h4>
        <h5>CSE Department</h5>
        <h6>DBMS, Data Structures</h6>
        </div>
      </div>
    </div>
  );
}

export default Card;