import React from 'react';


const brand = [
    {
        img:"https://i.ibb.co/k24jKH2/3.png"
    },
    {
        img:"https://i.ibb.co/5YNvn4X/4.png"
    },
    {
        img:"https://i.ibb.co/ZJkdkR5/5.png"
    },
    {
        img:"https://i.ibb.co/yWw5r9d/10.png"
    },
    {
        img:"https://i.ibb.co/RCp9wpQ/6.png"
    },
    {
        img:"https://i.ibb.co/JCJ6v1k/7.png"
    },
    {
        img:"https://i.ibb.co/yWw5r9d/10.png"
    },
    {
        img:"https://i.ibb.co/yWw5r9d/10.png"
    },
    {
        img:"https://i.ibb.co/yWw5r9d/10.png"
    },
    {
        img:"https://i.ibb.co/k24jKH2/3.png"
    },
    {
        img:"https://i.ibb.co/5YNvn4X/4.png"
    },
    {
        img:"https://i.ibb.co/ZJkdkR5/5.png"
    },
    {
        img:"https://i.ibb.co/k24jKH2/3.png"
    },
    {
        img:"https://i.ibb.co/5YNvn4X/4.png"
    },
    {
        img:"https://i.ibb.co/ZJkdkR5/5.png"
    },
    {
        img:"https://i.ibb.co/k24jKH2/3.png"
    },
    {
        img:"https://i.ibb.co/5YNvn4X/4.png"
    },
    {
        img:"https://i.ibb.co/ZJkdkR5/5.png"
    },
]

const Brand = () => {
    return (
        <>
            <div className="container my-5">
            <div className="my-4 d-flex justify-content-between">
                        <h3 className="main-title">Our Latest Brand</h3>
                        <h3 className="main-title">See All</h3>
                </div>
                <div className="row ">
                        {
                            brand.map((data) => 
                                <div className="col-lg-2 col-md-3  col-sm-4 col-6 px-0">
                                <div class="card brand-card me-3 my-2">
                                <img src={data.img} class="card-img-top" alt="..." className="w-75 d-block mx-auto "/>
                                </div>
                                </div>
                            )
                   }
                    </div>
            </div>
        </>
    );
};

export default Brand;