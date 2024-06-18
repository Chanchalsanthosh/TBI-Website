import React, { useState, useEffect } from 'react';
import {firestore} from './firebase';
import {getDocs,collection} from '@firebase/firestore';
import data from "../assests/datablog.json";

const Bloglist = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  let [Blogs,setBlogs]=useState([]);
  useEffect(() => {
    const fetchData = async () => {
        const ref = collection(firestore, 'Blogs');
        try {
            const querySnapshot = await getDocs(ref);
            const newData = querySnapshot.docs.map(doc => doc.data()
            );
            const sortedData = newData.sort((a, b) => b.id - a.id);
            setBlogs(sortedData);
            
        } catch (error) {
            console.error('Error fetching documents: ', error);
        }
    };

    fetchData();
}, [Blogs]);

  const handleClick = (id) => {
    const blog = Blogs.find(i => i.id === id);
    setSelectedBlog(blog);
  };

  return (
    <div className="templateContainer">
      <div className="searchInput_Container">
        <input id="searchInput" type="text" placeholder="Search Blogs.." onChange={(event) => {
          setSearchTerm(event.target.value);
        }} />
      </div>
      <div className="template_Container">
        {
          Blogs
            .filter((val) => {
              if (searchTerm === "") {
                return; // return true if searchTerm is empty
              } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                return val; // return true if title includes the searchTerm
              } 
            })
            .map((val) => {
              return (
                <div className="template" key={val.id} onClick={() => handleClick(val.id)}>
                  {val.img && <img src={val.img} alt="blog" />}
                  <h3>{val.title}</h3>
                  <h4>{val.author}</h4> {/* Corrected author property access */}
                </div>
              );
            })
        }
      </div>

      <div id="blog-section">
        <div className='blog-list'>
          {Blogs.map((blog) => (
            <div key={blog.id} className="workItem" onClick={() => handleClick(blog.id)}>
              <h2>{blog.title}</h2>
              <h3>{blog.author}</h3>
            </div>
          ))}
        </div>
        {selectedBlog && (
          <div className='blog-left'>
            <div className='Work'>
              <img src={selectedBlog.img} alt={selectedBlog.title} />
              <h2>{selectedBlog.title}</h2>
              <h4>{selectedBlog.author}</h4>
              <p>{selectedBlog.content}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Bloglist;
