import React ,{useState,useEffect} from 'react'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import axios from 'axios'
const Gallery = () => {
    const api = axios.create({
        baseURL: 'http://localhost:5000', // Adjust the base URL as needed
        headers: {
          'Content-Type': 'multipart/form-data', // Set the appropriate content type
        },
      });

    const [imageList,setImageList]=useState([]);
    useEffect(() => {
        api.get('/getImageList')
        .then(response => {
            console.log('Response data:', response); // Log the response data
            setImageList(response.data.imageList || []); // Ensure imageList is initialized with an array
           
        })
        .catch(error => {
            console.error('Error fetching image list:', error);
        });
    }, []);

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
            {imageList.map((url) => (
              <div key={url} className="workItem">
                <img src={url} />
  

              </div>
            ))}
          </Carousel>
        </article>
      </section>
    </div>
  )
}

export default Gallery