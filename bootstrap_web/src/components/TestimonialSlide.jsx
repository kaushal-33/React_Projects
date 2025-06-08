import { BiSolidQuoteAltRight } from "react-icons/bi";
import { LiaStarSolid } from "react-icons/lia";

const TestimonialSlide = ({ review, name, designation, img }) => {
    return (
        <div className="text-white">
            <div className="text-warning fs-4">
                <LiaStarSolid />
                <LiaStarSolid />
                <LiaStarSolid />
                <LiaStarSolid />
                <LiaStarSolid />
            </div>
            <p className="pb-4 mt-4 mb-0 fs-5 border-bottom">{`" ${review} "`}</p>
            <div className="d-flex justify-content-between pt-4">
                <div className="d-flex align-items-center gap-3">
                    <div className="circle-50px overflow-hidden rounded-3">
                        <img src={img} alt={name} width="100%" />
                    </div>
                    <div>
                        <h6 className="mb-0 h4 text-capitalize fw-bold">{name}</h6>
                        <span className="text-capitalize text-secondary">{designation}</span>
                    </div>
                </div>
                <div className="fs-3">
                    <BiSolidQuoteAltRight className="mb-3" />
                </div>
            </div>
        </div>
    )
}

export default TestimonialSlide