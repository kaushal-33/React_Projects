import { FaRegPaperPlane } from "react-icons/fa";
import SocialLinks from "./SocialLinks";

const Footer = () => {
    return (
        <footer className='py-100 position-relative'>
            <div className="container">
                <div className='text-white position-relative z-1'>
                    <div className="row gy-4">
                        <div className="col-lg-2 col-sm-6">
                            <div>
                                <h6 className='h4 fw-bold text-capitalize mb-4'>quick link</h6>
                                <ul className='m-0 p-0'>
                                    <li className='text-capitalize mb-3 footer-link'>home</li>
                                    <li className='text-capitalize mb-3 footer-link'>about us</li>
                                    <li className='text-capitalize mb-3 footer-link'>features</li>
                                    <li className='text-capitalize mb-3 footer-link'>latest blog</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-sm-6">
                            <div>
                                <h6 className='h4 fw-bold text-capitalize mb-4'>help</h6>
                                <ul className='m-0 p-0'>
                                    <li className='text-capitalize mb-3 footer-link'>privacy policy</li>
                                    <li className='text-capitalize mb-3 footer-link'>terms & conditions</li>
                                    <li className='text-capitalize mb-3 footer-link'>contact us</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div>
                                <div className='text-center'>
                                    <img src="images\logo.svg" alt="Logo" />
                                </div>
                                <address className='text-center my-4'>
                                    123 High Street, London, W1A 1AA, United Kingdom
                                </address>
                                <div className='d-xl-flex justify-content-between'>
                                    <p className='p-2 border px-3 rounded-pill simple-hover text-center'>info@gmail.com</p>
                                    <p className='p-2 border px-3 rounded-pill simple-hover text-center'>+91 1234567890</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="text-white">
                                <h6 className='h4 fw-bold text-capitalize mb-4'>newsletter</h6>
                                <div className="d-flex justify-content-between mb-4">
                                    <input type="text" placeholder="Enter Your Email" className="footer-input" />
                                    <div>
                                        <button className="footer-btn">
                                            <FaRegPaperPlane />
                                        </button>
                                    </div>
                                </div>
                                <SocialLinks />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="position-absolute top-0 start-0">
                <img src="images\wheat.png" alt="leaf image" />
            </div>
        </footer>
    )
}

export default Footer