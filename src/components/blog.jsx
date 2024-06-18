import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import data from "../assets/datablog.json";
import { useNavigate } from "react-router-dom";

const Blog = () => {
  const navigate = useNavigate();
  const settings = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };
  return (
    <div id="blog">
      <h1>BLOGS</h1>
      <h3>Connect with Tech</h3>
      <section>
        <article>
          <div className="slider-container">
            <Slider {...settings}>
              {data.blogs.map((i) => (
                <div key={i.id} className="workItem">
                  <img src={i.img} alt={i.title} />
                  <h2>{i.title}</h2>
                  <p>{i.content}</p>
                  <button onClick={() => { navigate("/blog1") }}>READ MORE</button>
                </div>
              ))}
            </Slider>
          </div>
        </article>
      </section>
    </div>
  )
}

export default Blog;
