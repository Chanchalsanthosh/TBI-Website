import "./card.scss";
import "./flip-transition.scss";

function Card({onClick}) {
  return (
    <div className="card" onClick={onClick}>
      <div className="card-back">
        <div><h4>Mr. XYZ</h4>
      <div className="desc"><h6>● TBI Manager</h6>
      </div>
        </div>
        </div>
      <div className="card-front">
        <div>
        <img src="./person.jpg" alt="" />
         <h4>Mr. XYZ</h4>
        <h5>CSE Department</h5>
        <h6>Project Manager, TBI</h6>
        </div>
      </div>
    </div>
  );
}

export default Card;