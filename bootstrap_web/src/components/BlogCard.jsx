import { FaCalendarAlt, FaArrowCircleRight } from "react-icons/fa";


const BlogCard = ({ img, title, date }) => {
    return (
        <div className="shadow blog-card rounded-4 h-100 bg-success-subtle">
            <div className="overflow-hidden blog-card-img rounded-top-4">
                <img src={img} alt="Dropper image" width="100%" />
            </div>
            <div className="bg-success-subtle p-4 rounded-bottom-4">
                <h5 className="fw-bold pb-4">{title}</h5>
                <div className="pt-4 border-top border-dark-subtle d-flex justify-content-between">
                    <div>
                        <span className="text-warning fs-4"><FaCalendarAlt /></span>
                        <span className="text-secondary ms-2">{date}</span>
                    </div>
                    <div className="d-flex gap-2 align-items-center">
                        <a href="#" className="text-capitalize text-warning fw-bold">read more</a>
                        <div className="fs-4 text-warning">
                            <FaArrowCircleRight />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogCard