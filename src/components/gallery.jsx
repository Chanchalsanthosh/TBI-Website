import React from 'react'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import data from "../assests/dataimg.json";

const gallery = () => {
  return (
    <div id="gallery">
      <h1>Gallery</h1>
      <h3>Take a Glance</h3>
      <section>
        <article>
          <Carousel
          showArrows={false}
          showIndicators={true}
          showStatus={true}
          showThumbs={true}
          interval={1000}
          infiniteLoop={true}
          autoPlay={true}
          >
            {data.Image.map((i) => (
              <div key={i.id} className="workItem">
                <img src={i.name} alt={i.name} />
  

              </div>
            ))}
          </Carousel>
        </article>
      </section>
    </div>
  )
}

export default gallery
