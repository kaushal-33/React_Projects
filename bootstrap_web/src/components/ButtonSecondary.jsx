import { AiOutlineArrowUp } from "react-icons/ai";

const ButtonSecondary = ({name}) => {
    return (
        <button className="d-flex hero-btn secondary align-items-center border-0 bg-transparent text-white fw-bold p-0 m-0">
            <span className="name-btn">
                <span className="position-relative z-1 transition">
                    {name}
                </span>
            </span>
            <span className="d-flex justify-content-center align-items-center fs-4 rotate-btn">
                <AiOutlineArrowUp/>
            </span>
        </button>
    )
}

export default ButtonSecondary