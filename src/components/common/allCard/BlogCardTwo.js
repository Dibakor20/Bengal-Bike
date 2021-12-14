import React from 'react';
import { NavLink } from 'react-router-dom';

const BlogCardTwo = ({ newBlog }) => {
    const {img,title} = newBlog
    return (
        <>
            <div className='products-card-two d-flex  align-items-center py-2'>
                <img src={img} alt="" className='new-bike-img mx-2' />
                <NavLink className="title-two"to={`/blog/${title}`}>{title}</NavLink>
            </div>
               
        </>
    );
};

export default BlogCardTwo;