import { useContext } from "react";
import { ShopContext } from '../Context/ShopContext';
import Product from "./Product";

function Cart() {

    const { products } = useContext(ShopContext);

    return (
        <div className="cart">
            <h1 className="cartTitle">
                Desserts
            </h1>
            <div className="cartContent">
                {products.map((product, index) => {
                    return <Product key={index} id={product.id} image={product.image} alt={product.alt} type={product.type} food={product.food}
                        price={product.price} />;
                })}
            </div>
        </div>
    )
}

export default Cart