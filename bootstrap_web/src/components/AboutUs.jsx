import BaseTitle from "./BaseTitle"
import ButtonSecondary from "./ButtonSecondary";
import MainTitle from "./MainTitle"
import { AiFillCheckCircle } from "react-icons/ai";
import { GiFlowerPot } from "react-icons/gi";

const AboutUs = () => {
    return (
        <section className="py-100 bg-success-subtle">
            <div className="container">
                <div>
                    <div className="row gy-4 align-items-center">
                        <div className="col-lg-6">
                            <div className="position-relative">
                                <div className="position-absolute secondary-stamp start-0 top-0">
                                    <img src="images\premium-quality-circle-2.png" alt="logo stamp" className="img-fluid" />
                                </div>
                                <div className="text-center">
                                    <img src="images\about-image.png" alt="Oil image" className="img-fluid" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="my-font-color">
                                <BaseTitle title="about us" />
                                <MainTitle title={"Pure essence precise drops ultimate care always"} />
                                <p className="my-3 text-secondary">
                                    We believe that every drop matters. Our premium oil dropper bottles are designed to deliver purity, precision, and care with every use.
                                </p>
                                <ul className="p-0 m-0 mb-4">
                                    <li className="d-flex gap-2 align-items-center">
                                        <div className="fs-5 text-warning">
                                            <AiFillCheckCircle />
                                        </div>
                                        <p className="m-0 text-secondary">Precision in every drop designed for perfect application</p>
                                    </li>
                                    <li className="d-flex gap-2 align-items-center">
                                        <div className="fs-5 text-warning">
                                            <AiFillCheckCircle />
                                        </div>
                                        <p className="m-0 text-secondary">Leak-Proof & durable protecting your precious Oils with care</p>
                                    </li>
                                </ul>
                                <div className="row gy-4 align-items-center">
                                    <div className="col-sm-7">
                                        <div>
                                            <div className="d-flex gap-3 mb-4">
                                                <div>
                                                    <div className="circle-50px rounded-circle text-white fs-3 d-flex justify-content-center align-items-center my-bg-color">
                                                        <GiFlowerPot />
                                                    </div>
                                                </div>
                                                <div>
                                                    <h6 className="fw-bold h5">100% Organic & Pure</h6>
                                                    <p className="text-secondary">Helping to restore balance and promote overall wellness.</p>
                                                </div>
                                            </div>
                                            <ButtonSecondary name="more about" />
                                        </div>
                                    </div>
                                    <div className="col-sm-5">
                                        <div className="p-4 shadow bg-white rounded-5">
                                            <div>
                                                <img src="images\icon-about-body-item.svg" alt="icon" className="img-fluid" />
                                            </div>
                                            <h6 className="fw-bold mb-0 mt-4 h5">Nature's Best in Every Drop</h6>
                                        </div>
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

export default AboutUs