import BaseTitle from "./BaseTitle"
import MainTitle from "./MainTitle"
import { LiaStarSolid } from "react-icons/lia";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import TestimonialSlide from "./TestimonialSlide";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const Testimonial = () => {

    let testimonials = [
        {
            review: "These oil droppers are perfect for my essential oil blends! The precision and  outstanding of Highly recommend many dropper bottles, but these are by far the best. No leaks, no waste—just pure convenience!",
            image: "https://html.awaikenthemes.com/sellsmart/cbd-oil/images/author-2.jpg",
            name: "micheal cartel",
            designation: "armotherapist",
        },
        {
            review: "These oil droppers are perfect for my essential oil blends! The precision and  outstanding of Highly recommend many dropper bottles, but these are by far the best. No leaks, no waste—just pure convenience!",
            image: "https://html.awaikenthemes.com/sellsmart/cbd-oil/images/author-1.jpg",
            name: "jenny willson",
            designation: "skintherapist",
        },
        {
            review: "These oil droppers are perfect for my essential oil blends! The precision and  outstanding of Highly recommend many dropper bottles, but these are by far the best. No leaks, no waste—just pure convenience!",
            image: "https://html.awaikenthemes.com/sellsmart/cbd-oil/images/author-3.jpg",
            name: "sophia reynolds",
            designation: "herbalist",
        },
    ]

    return (
        <section className="py-100 testimonial-sec">
            <div className="container">
                <div className="position-relative z-1">
                    <div className="row align-items-center gy-3">
                        <div className="col-lg-7">
                            <div className="text-white">
                                <BaseTitle title={"testimonials"} />
                                <MainTitle title={"Real reviews trusted quality happy customers"} />
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="d-flex align-items-center">
                                <div className="pe-sm-5 pe-2 ">
                                    <img src="images\google-img.svg" alt="Google logo" className="img-fluid" />
                                </div>
                                <div className="ps-sm-5 ps-2 border-start">
                                    <div className="text-warning fs-4">
                                        <LiaStarSolid />
                                        <LiaStarSolid />
                                        <LiaStarSolid />
                                        <LiaStarSolid />
                                        <LiaStarSolid />
                                    </div>
                                    <p className="text-white mb-0">1000+ Our Happy Customer Review</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5 pt-4">
                        <div className="row gy-3 align-items-center">
                            <div className="col-md-4">
                                <div>
                                    <div className="text-center overflow-hidden rounded-5">
                                        <img src="images\testimonial-image.jpg" alt="Testimonial image" width="100%" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className="text-white">
                                    <Swiper
                                        slidesPerView={1}
                                        breakpoints={{
                                            992: {
                                                slidesPerView: 2,
                                                spaceBetween: 20,
                                            },
                                        }}
                                        navigation={{
                                            nextEl: '.custom-swiper-button-next',
                                            prevEl: '.custom-swiper-button-prev',
                                        }}
                                        loop={true}
                                        autoplay={{
                                            delay: 3500,
                                            disableOnInteraction: false,
                                        }}
                                        freeMode={true}
                                        speed={1500}
                                        modules={[ Navigation, Autoplay]}
                                        className="mySwiper"
                                    >
                                        {testimonials.map((data, idx) =>
                                            <SwiperSlide>
                                                <TestimonialSlide key={idx} review={data.review} img={data.image} name={data.name} designation={data.designation} />
                                            </SwiperSlide>)
                                        }
                                    </Swiper>
                                    <div className="text-center mt-5">
                                        <button className="custom-swiper-button-prev me-2">
                                            <FaArrowLeft />
                                        </button>
                                        <button className="custom-swiper-button-next ms-2">
                                            <FaArrowRight />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonial