import React, { useState, useEffect } from 'react';
import { firestore } from './firebase'; 
import { collection, getDocs } from '@firebase/firestore';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";

const Blog = () => {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const ref = collection(firestore, 'Blogs');
      try {
        const querySnapshot = await getDocs(ref);
        const newData = querySnapshot.docs.map(doc => doc.data());
        const sortedData = newData.sort((a, b) => b.id - a.id);
        setBlogs(sortedData);
      } catch (error) {
        console.error('Error fetching documents: ', error);
      }
    };
    fetchData();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: Math.min(3, blogs.length),
    slidesToScroll: Math.min(6, blogs.length),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: Math.min(2, blogs.length),
          slidesToScroll: Math.min(2, blogs.length),
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: Math.min(1, blogs.length),
          slidesToScroll: Math.min(1, blogs.length),
        },
      },
    ],
  };

  return (
    <div id="blog">
      <h1>BLOGS</h1>
      <h3>Connect with Tech</h3>
      <section>
        <article>
          <div className="slider-container">
            <Slider {...settings}>
              {blogs.map((blogDoc) => (
                <div key={blogDoc.id} className="workItem1">
                  {blogDoc.img && <img src={blogDoc.img} alt={blogDoc.title} />}
                  <h2>{blogDoc.title}</h2>
                  <p>{blogDoc.author}</p>
                  <p>{blogDoc.content.substring(0, 200)}</p>
                  <div className='readmorebtn'>
                    <button onClick={() => navigate(`/blog/${blogDoc.id}`)}>READ MORE</button>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </article>
      </section>
    </div>
  );
}

export default Blog;
