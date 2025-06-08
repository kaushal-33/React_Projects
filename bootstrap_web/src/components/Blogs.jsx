import React from 'react'
import BaseTitle from './BaseTitle'
import MainTitle from './MainTitle'
import ButtonSecondary from './ButtonSecondary'
import BlogCard from './BlogCard'

const Blogs = () => {

    let blogs = [
        {
            image: "https://html.awaikenthemes.com/sellsmart/cbd-oil/images/post-1.jpg",
            title: "Glass vs. Plastic Droppers Which One is Right for You?",
            date: "May 17, 2025",
        },
        {
            image: "https://html.awaikenthemes.com/sellsmart/cbd-oil/images/post-2.jpg",
            title: "Sustainable Beauty Why Reusable dropper are the future",
            date: "May 20, 2025",
        },
        {
            image: "https://html.awaikenthemes.com/sellsmart/cbd-oil/images/post-3.jpg",
            title: "Science Behind Precision Droppers and Their Benefits",
            date: "May 23, 2025",
        },
    ]

    return (
        <section className='py-100'>
            <div className="container">
                <div className="row align-items-center gy-3">
                    <div className="col-lg-6">
                        <div>
                            <BaseTitle title={"latest blog"} />
                            <MainTitle title={"Latest insights, trends, and expert tips"} />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className='d-lg-flex justify-content-end'>
                            <ButtonSecondary name={"view all blogs"} />
                        </div>
                    </div>
                </div>
                <div className='mt-5'>
                    <div className="row gy-4">
                        {blogs.map((blog, idx) =>
                            <div className='col-lg-4 col-md-6'>
                                <BlogCard img={blog.image} title={blog.title} date={blog.date} key={idx} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Blogs