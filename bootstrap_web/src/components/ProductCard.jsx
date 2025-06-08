import React from 'react'

const ProductCard = ({ img, name, price }) => {
    return (
        <div className='col-lg-3 col-sm-6'>
            <div className='text-center h-100'>
                <div className='bg-success-subtle py-5 overflow-hidden rounded-5'>
                    <img src={img} alt={name} className='img-fluid' />
                </div>
                <h6 className='my-font-color fw-bold h5 mt-3'>{name}</h6>
                <p className='text-warning fw-bold'>${price}.00</p>
            </div>
        </div>
    )
}

export default ProductCard