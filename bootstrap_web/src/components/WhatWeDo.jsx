import BaseTitle from "./BaseTitle"
import MainTitle from "./MainTitle"
import { AiFillCheckCircle } from "react-icons/ai";

const WhatWeDo = () => {
    return (
        <section className="my-secondary-bg-color py-100 position-relative">
            <div className="position-absolute top-0 start-0">
                <img src="images\wheat.png" alt="leaf image" />
            </div>
            <div className="container">
                <div>
                    <div className="row gy-5 align-items-center">
                        <div className="col-lg-6">
                            <div className="position-relative h-100">
                                <div className="h-500px">
                                    <div className="top-0 start-0 overflow-hidden rounded-5 what-we-image-1">
                                        <img src="images\what-we-image-1.jpg" alt="Drop image" className="img-fluid" />
                                    </div>
                                    <div className="bottom-0 end-0 overflow-hidden rounded-5 what-we-image-2">
                                        <img src="images\what-we-image-2.jpg" alt="Drop image" className="img-fluid" />
                                    </div>
                                    <div className="z-1 overflow-hidden what-we-image-3 rotate-stamp p-2 my-secondary-bg-color rounded-circle">
                                        <img src="images\premium-quality-circle-2.png" alt="Drop image" className="img-fluid" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="text-white h-100">
                                <BaseTitle title={"what we do?"} />
                                <MainTitle title={"Delivering precision, purity, and care daily"} />
                                <ul className="p-0 m-0 mt-3">
                                    <li className="py-5">
                                        <div className="d-flex gap-2 align-items-center">
                                            <div className="fs-5 text-warning">
                                                <AiFillCheckCircle />
                                            </div>
                                            <h6 className="m-0 fs-4 fw-bold">Crafting Precision for Every Drop</h6>
                                        </div>
                                        <p className="text-secondary mb-0">
                                            We believe that precision matters. Our expertly designed oil dropper bottles ensure controlled dispensing allowing you to use just the right amount.
                                        </p>
                                    </li>
                                    <li className="py-5 border-top">
                                        <div className="d-flex gap-2 align-items-center">
                                            <div className="fs-5 text-warning">
                                                <AiFillCheckCircle />
                                            </div>
                                            <h6 className="m-0 fs-4 fw-bold">Crafting Precision for Every Drop</h6>
                                        </div>
                                        <p className="text-secondary mb-0">
                                            We believe that precision matters. Our expertly designed oil dropper bottles ensure controlled dispensing allowing you to use just the right amount.
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="position-absolute bottom-0 end-0">
                <img src="https://html.awaikenthemes.com/sellsmart/cbd-oil/images/section-bg-shape-2.png" alt="flower image" />
            </div>
        </section>
    )
}

export default WhatWeDo