
const LeftKeyCard = ({ title, disc, icon: Icon }) => {
    return (
        <div className="d-flex gap-3 mt-5 key-card">
            <div className="text-end">
                <h6 className="my-font-color fw-bold h5">{title}</h6>
                <p className="text-secondary">{disc}</p>
            </div>
            <div className="">
                <div className="circle-80px my-bg-color rounded-circle fs-1 text-white d-flex justify-content-center align-items-center">
                    <div className="position-relative z-1">
                        {Icon && <Icon />} {/* Renders the passed icon */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeftKeyCard