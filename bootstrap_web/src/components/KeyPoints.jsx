import BaseTitle from './BaseTitle'
import MainTitle from './MainTitle'
import LeftKeyCard from './LeftKeyCard';
import RightKeyCard from './RightKeyCard';
import { GiPlantsAndAnimals } from "react-icons/gi";
import { FaTrain } from "react-icons/fa6";
import { FaOilCan } from "react-icons/fa";
import { SiTrustedshops } from "react-icons/si";

const KeyPoints = () => {

    let leftKeyPoints = [
        {
            title: "Preserves Purity",
            discription: "Ensures natural essence, free and from toxins, additives",
            icon: GiPlantsAndAnimals,
        },
        {
            title: "Travel Friendly",
            discription: "Ensures natural essence, free and from toxins, additives",
            icon: FaTrain,
        },
        {
            title: "Preserves Purity",
            discription: "Ensures natural essence, free and from toxins, additives",
            icon: GiPlantsAndAnimals,
        },
    ]
    let rightKeyPoints = [
        {
            title: "100% Pure Oils",
            discription: "Ensures natural essence, free and from toxins, additives",
            icon: FaOilCan,
        },
        {
            title: "Eco Friendly",
            discription: "Ensures natural essence, free and from toxins, additives",
            icon: FaTrain,
        },
        {
            title: "Trusted by Experts",
            discription: "Ensures natural essence, free and from toxins, additives",
            icon: SiTrustedshops,
        },
    ]

    return (
        <section className='py-100  bg-success-subtle'>
            <div className="container">
                <div>
                    <div className='row align-items-center'>
                        <div className='col-md-6'>
                            <div>
                                <BaseTitle title={"our key points"} />
                                <MainTitle title={"Superior design, precision drop lasting quality"} />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <p className='text-secondary mb-0 mt-3'>
                                Crafted with superior design, engineered with precision, and built to commitment to excellence ensures every detail is meticulously perfected, delivering unparalleled quality and durability.
                            </p>
                        </div>
                    </div>
                    <div className="row mt-5 gy-4 align-items-center">
                        <div className="col-md-6 col-lg-4 order-1">
                            <div>
                                {leftKeyPoints.map((card, idx) => <LeftKeyCard key={idx} title={card.title} disc={card.discription} icon={card.icon} />)}
                            </div>
                        </div>
                        <div className="col-lg-4 order-lg-2 order-md-3 order-2">
                            <div className='text-center'>
                                <img src="images\key-points-image.png" alt="product image" className='img-fluid' />
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 order-2">
                            <div>
                                {rightKeyPoints.map((card, idx) => <RightKeyCard key={idx} title={card.title} disc={card.discription} icon={card.icon} />)}
                            </div>
                        </div>
                    </div>
                    <p className="text-center mt-5">
                        <span className="ms-2">Let's make something great work together.</span>
                        <a href="#" className="text-capitalize text-warning">get free quote</a>
                    </p>
                </div>
            </div>
        </section>
    )
}

export default KeyPoints