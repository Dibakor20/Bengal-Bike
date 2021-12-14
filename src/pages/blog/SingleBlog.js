import React from 'react';
import { useParams } from 'react-router-dom';
import BlogData from '../../BlogData';
import AddOffer from '../../components/advertisement/AddOffer';
import Footer from '../../components/common/footer/Footer';
import TopNavbar from '../../components/common/navbar/TopNavbar';
import BlogDetails from './BlogDetails';

const SingleBlog = () => {
    const { title } = useParams()
    const blogDetails = BlogData.find((blog) => blog.title === title)
    console.log(blogDetails)
    return (
        <>
            <TopNavbar />
            <div className='my-4'><AddOffer/></div>
            <BlogDetails blog={blogDetails} />
            <Footer/>
        </>
    );
};

export default SingleBlog;