
import BtnProduct from './BtnProduct';

function Product({ data }) {
    return (
        <div className="productCard">
            <img src={data.image} className="productCardImg" />
            <BtnProduct />
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