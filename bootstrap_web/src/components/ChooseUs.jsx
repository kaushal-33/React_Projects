import BaseTitle from './BaseTitle'
import DiscriptionCard from './DiscriptionCard'
import MainTitle from './MainTitle'
import { GiWheat } from "react-icons/gi";
import { FaPeopleCarryBox } from "react-icons/fa6";
const ChooseUs = () => {
    return (
        <section className='position-relative'>
            <div className="container">
                <div className='position-relative z-1'>
                    <div className="row justify-content-between">
                        <div className="col-lg-5">
                            <div className='h-100 py-100'>
                                <BaseTitle title={"why choose us"} />
                                <MainTitle title={"Precision drops, premium quality, care you trust"} />
                                <p className='text-secondary mt-4 mb-4'>
                                    Our oil dropper bottles are designed for precision, ensuring controlled application with minimal waste. Made from high-quality, durable materials.
                                </p>
                                <div className="row gy-3">
                                    <div className='col-sm-6'>
                                        <DiscriptionCard icon={GiWheat} title="Premium Quality" discription="Carefully sourced, 100%, rigorously tested for excellence." />
                                    </div>
                                    <div className='col-sm-6'>
                                        <DiscriptionCard icon={FaPeopleCarryBox} title="Fast & Reliable Shipping" discription="Carefully sourced, 100%, rigorously tested for excellence." />
                                    </div>
                                </div>
                                <div className='mt-5 bg-gradient bg-success-subtle py-5 px-4 rounded-5'>
                                    <div className='row gy-4 align-items-center'>
                                        <div className="col-sm-4">
                                            <div className='secondary-stamp m-auto text-center'>
                                                <img src="images\premium-quality-circle-3.png" alt="logo 3" className='img-fluid' />
                                            </div>
                                        </div>
                                        <div className="col-sm-8">
                                            <p className='text-secondary mb-0'>
                                                With a commitment to sustainability and customer satisfaction, we provide reliable, stylish, and -friendly solutions you can trust. Experience the balance of function and care—one drop at a time.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className='h-100 position-relative'>
                                <div className='text-center h-100'>
                                    <img src="images\why-choose-image.jpg" alt="alovera image" width="100%" height="100%" />
                                </div>
                                <div className='position-absolute why-choose-img'>
                                    <img src="images\why-choose-product-image.png" alt="product image" className='img-fluid' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='position-absolute bottom-0 start-0'>
                <img src="images\flowerpng.png" alt="flower image" className='img-fluid' />
            </div>
        </section>
    )
}

export default ChooseUs