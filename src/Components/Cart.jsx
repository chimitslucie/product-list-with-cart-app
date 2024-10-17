import products from '../Data/Product.json';
import Product from "./Product"

function Cart() {
    return (
        <div className="cart">
            <h1 className="cartTitle">
                Desserts
            </h1>
            <div className="cartContent">
                {products.map((product, index) => {
                    return <Product data={product} key={index} />;
                })}
            </div>
        </div>
    )
}

export default Cart