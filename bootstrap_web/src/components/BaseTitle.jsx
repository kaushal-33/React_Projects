import { LuDot } from "react-icons/lu";

const BaseTitle = ({ title }) => {
    return (
        <h3 className="base-title text-capitalize fs-5">
            <span className="text-warning fs-1 d-inline-block">
                <LuDot />
            </span>
            {title}
        </h3>
    )
}

export default BaseTitle