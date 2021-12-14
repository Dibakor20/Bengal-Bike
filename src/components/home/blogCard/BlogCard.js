import React from 'react';
import { NavLink } from 'react-router-dom';

const BlogCard = ({ blog }) => {
    const {img,title,date,description} = blog

    return (
        <>   
                  <div class="card me-3 me-lg-0 my-3 my-lg-0">
                                <img src={img} class="card-img-top" alt="..." className="w-100"/>
                                <div class="card-body">
                                            <h5 class="blog-title">{ title}</h5>
                                            <p class="blog-subtitle">{date}</p>
                                            <p class="blog-text">{ description.slice(0,100)}</p>
                                            {/* <button class="btn blog-button">Read more</button> */}
                                            <NavLink className="btn blog-button" to={`/blog/${title}`}>Read more</NavLink>
                                </div>
                                </div>
                 
        </>
    );
};

export default BlogCard;