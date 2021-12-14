import React from 'react';
import BlogData from '../../../BlogData';
import BlogCard from './BlogCard';

const Blog = () => {
    return (
        <>
            <div className='container'>
             <div className="my-2 d-flex justify-content-between">
                        <h3 className="main-title">Our Latest blog</h3>
                        <h3 className="main-title">See All</h3>
                </div>
             <div className="row justify-content-between">
                        {
                            BlogData.map((blog) => 
                                <div className="col-lg-2 col-md-3  col-sm-4 col-6 px-0">
                                    <BlogCard blog={blog}/>
                                </div>
                            )
                   }
            </div>
            </div>
        </>
    );
};

export default Blog;