import BtnProduct from './BtnProduct';

function Product({ data }) {
    return (
        <div className="productCard" id={data.id}>
            <img src={data.image} alt={data.alt} className="productCardImg" />
            <BtnProduct id={data.id} />
            <div className="productCardContent">
                <p className="productCardContentType">
                    {data.type}
                </p>
                <p className="productCardContentFood">
                    {data.food}
                </p>
                <p className='productCardContentPrice'>
                    {data.price}
                </p>
            </div>
        </div>
    )
}

export default Product