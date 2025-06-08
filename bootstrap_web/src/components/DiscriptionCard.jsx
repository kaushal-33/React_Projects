
const DiscriptionCard = ({ title, discription, icon: Icon }) => {
    return (
        <div className="h-100 discription-card">
            <div className="circle-60px d-flex justify-content-center align-items-center my-bg-color rounded-circle fs-3 text-white mb-4">
                <div className="position-relative z-1">
                    {Icon && <Icon />} {/* Renders the passed icon */}
                </div>
            </div>
            <h6 className="my-font-color fw-bold h5 text-capitalize">{title}</h6>
            <p className="mb-0 text-secondary">{discription}</p>
        </div>
    );
};

export default DiscriptionCard