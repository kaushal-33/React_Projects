import { AiFillFacebook } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineX } from "react-icons/ai";




const SocialLinks = () => {
    return (
        <ul className="d-flex gap-3 m-0 p-0">
            <li className="social-icon border rounded-circle text-white d-flex justify-content-center align-items-center fs-4">
                <AiOutlineInstagram />
            </li>
            <li className="social-icon border rounded-circle text-white d-flex justify-content-center align-items-center fs-4">
                <AiOutlineX />
            </li>
            <li className="social-icon border rounded-circle text-white d-flex justify-content-center align-items-center fs-4">
                <AiFillFacebook />
            </li>
        </ul>
    )
}

export default SocialLinks