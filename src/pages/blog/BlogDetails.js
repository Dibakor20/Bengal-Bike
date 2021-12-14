import React from 'react';
import BlogData from '../../BlogData';
import HomeLeftAdd from '../../components/advertisement/HomeLeftAdd';
import BlogCardTwo from '../../components/common/allCard/BlogCardTwo';

const BlogDetails = ({ blog }) => {
    const { img, title, date, description } = blog
    console.log(blog)
    return (
        <>
            <div className='blog-details pb-5'>
                <div className='container'>
                <div className='row'>
                    <div className='col-md-10'>
                            <h3 className=''>{title}</h3>
                            <p className='blog-subtitle py-2'>{date}</p>
                        <img src={img} alt="" className='w-100 d-block mx-auto' />
                        
                        <p className='py-3'>{ description}</p>
                    </div>
                        <div className='col-md-2 px-0'>
                        <div className='new-product-area mt-5'>
                         <h5 className='new-bike '>New Blog</h5>
                            {
                                BlogData.slice(0, 6).map(blog => <BlogCardTwo newBlog={ blog}/>)
                            }
                            </div>
                            <div>
                                <HomeLeftAdd/>
                            </div>
                    </div>
                </div>
               </div>
            </div>
        </>
    );
};

export default BlogDetails;