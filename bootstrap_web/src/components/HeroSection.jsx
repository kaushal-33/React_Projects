import Button from "./Button"
import { AiFillPhone } from "react-icons/ai";
import BaseTitle from "./BaseTitle";
import RotateStamp from "./RotateStamp";

const HeroSection = ({ baseTitle, heroTitle, heroDiscription, contact }) => {

    return (
        <section className="hero-sec py-100">
            <div className="container">
                <div className="position-relative z-1">
                    <div className="row gy-5 align-items-center">
                        <div className="col-lg-6">
                            <div className="text-white">
                                <BaseTitle title={baseTitle} />
                                <h1 className="display-4 fw-bold text-white">{heroTitle}</h1>
                                <p className="text-white my-4">{heroDiscription}</p>
                                <div className="d-flex gap-sm-5 gap-3 align-items-center flex-sm-nowrap flex-wrap">
                                    <Button name="purchase now" />
                                    <div className="d-flex align-items-center gap-3">
                                        <div className="circle-50px my-bg-color d-flex justify-content-center align-items-center fs-3 text-white rounded-circle">
                                            <AiFillPhone />
                                        </div>
                                        <div>
                                            <h6 className="text-white fw-bolder">Call Us</h6>
                                            <span className="d-inline-block text-white">{contact}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="position-relative">
                                <div className="position-absolute top-0 start-0 hero-stamp">
                                    <RotateStamp />
                                </div>
                                <div className="text-center">
                                    <img src="./images/hero-image.png" alt="hero image" className="img-fluid" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection