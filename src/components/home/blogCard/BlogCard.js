import React from 'react';

const blog = [
    {
        img: "https://i.ibb.co/8Bdyv33/blog-pic-1.jpg",
        title: "LOREM IPSUM DOLOR SIT",
        date: "18 December 2021",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe, cumque."
    },
    {
        img: "https://i.ibb.co/8Bdyv33/blog-pic-1.jpg",
        title: "LOREM IPSUM DOLOR SIT",
        date: "18 December 2021",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe, cumque."
    },
    {
        img: "https://i.ibb.co/8Bdyv33/blog-pic-1.jpg",
        title: "LOREM IPSUM DOLOR SIT",
        date: "18 December 2021",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe, cumque."
    },
    {
        img: "https://i.ibb.co/8Bdyv33/blog-pic-1.jpg",
        title: "LOREM IPSUM DOLOR SIT",
        date: "18 December 2021",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe, cumque."
    },
    {
        img: "https://i.ibb.co/8Bdyv33/blog-pic-1.jpg",
        title: "LOREM IPSUM DOLOR SIT",
        date: "18 December 2021",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe, cumque."
    },
]

const BlogCard = () => {

    return (
        <>
         
                <div className="container my-5">
                <div className="my-4 d-flex justify-content-between">
                        <h3 className="main-title">Our Latest blog</h3>
                        <h3 className="main-title">See All</h3>
                </div>
                <div className="row justify-content-between">
                        {
                            blog.map((data) => 
                                <div className="col-lg-2 col-md-3  col-sm-4 col-6 px-0">
                                <div class="card me-3 me-lg-0 my-3 my-lg-0">
                                <img src={data.img} class="card-img-top" alt="..." className="w-100"/>
                                <div class="card-body">
                                            <h5 class="blog-title">{ data.title}</h5>
                                            <p class="blog-subtitle">{data.date}</p>
                                            <p class="blog-text">{ data.description}</p>
                                    <button class="btn blog-button">Read more</button>
                                </div>
                                </div>
                                </div>
                            )
                   }
                    </div>
                    </div>
            
        </>
    );
};

export default BlogCard;