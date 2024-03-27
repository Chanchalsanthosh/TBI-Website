import React from "react";
import data from "../assests/dataimg.json";
const company = () => {
  return (
    <div id="company">
      <h3>Our Startups</h3>
      <h1>COMPANIES</h1>
     
      {data.Image.map((i) => (
              <div key={i.id} className="card">
               <img src={i.name} alt={"i.name"} />
                </div>
         ))}
      
    </div>
  )
}

export default company;
