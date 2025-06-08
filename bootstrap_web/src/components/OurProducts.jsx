import BaseTitle from "./BaseTitle"
import ButtonSecondary from "./ButtonSecondary"
import MainTitle from "./MainTitle"
import ProductCard from "./ProductCard"

const OurProducts = () => {

    let ourProducts = [
        {
            image: "https://html.awaikenthemes.com/sellsmart/cbd-oil/images/product-image-1.png",
            name: "Eco Glow Dropper",
            price: "16",
        },
        {
            image: "https://html.awaikenthemes.com/sellsmart/cbd-oil/images/product-image-2.png",
            name: "Vital Oil Dropper",
            price: "35",
        },
        {
            image: "https://html.awaikenthemes.com/sellsmart/cbd-oil/images/product-image-3.png",
            name: "Golden Drip Bottle",
            price: "45",
        },
        {
            image: "https://html.awaikenthemes.com/sellsmart/cbd-oil/images/product-image-4.png",
            name: "Zen Flow Dropper",
            price: "62",
        },
    ]

    return (
        <section className="py-100 ">
            <div className="container">
                <div>
                    <div className="d-flex flex-wrap flex-md-nowrap align-items-center justify-content-between mb-5">
                        <div className="col-md-6">
                            <BaseTitle title={"our product"} />
                            <MainTitle title={"Premium droppers for pure, precise application"} />
                        </div>
                        <div className="mt-2">
                            <ButtonSecondary name={"view all products"} />
                        </div>
                    </div>
                    <div className="row gy-3">
                        {ourProducts.map((item, idx) => <ProductCard key={idx} img={item.image} name={item.name} price={item.price} />)}
                    </div>
                    <p className="text-center mt-5">
                        <span className="text-capitalize text-white my-bg-color px-2 d-inline-block rounded-pill fw-bold">free</span>
                        <span className="ms-2">Let's make something great work together.</span>
                        <a href="#" className="text-capitalize text-warning">get free quote</a>
                    </p>
                </div>
            </div>
        </section>
    )
}

export default OurProducts