import { useState, useEffect, useContext } from "react";
import iconAddCart from "../Assets/Img/Icons/icon-add-to-cart.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { ShopContext } from '../Context/ShopContext';

function Product({ id, image, alt, type, food, price }) {

    const { cartItems, addToCart, handleDecrement } = useContext(ShopContext);

    useEffect(() => {
        if (cartItems[id] > 0) {
            document.getElementById(`${id}`).querySelector('.productCardImg').classList.add("bordered");
        } else {
            document.getElementById(`${id}`).querySelector('.productCardImg').classList.remove("bordered");
        }
    }, [cartItems[id]]);

    return (
        <div className="productCard" id={id}>
            <img src={image} alt={alt} className="productCardImg" />
            {!cartItems[id]
                ? <button className='btnProduct btnProductEmpty' onClick={() => addToCart(id)}>
                    <img src={iconAddCart} alt='icon-addCart' className="btnProductEmptyImg" />
                    <p className="btnProductEmptyText"> Add to Cart</p>
                </button>
                : <div className="btnProduct btnProductFull">
                    <button className="btnProductFullDecrement btnProductFullCount" onClick={() => handleDecrement(id)}>
                        <FontAwesomeIcon icon={faMinus} className="btnProductFullDecrementIcon btnProductFullCountIcon" />
                    </button>
                    <p className="count">{cartItems[id]}</p>
                    <button className="btnProductFullIncrement btnProductFullCount" onClick={() => addToCart(id)}>
                        <FontAwesomeIcon icon={faPlus} className="btnProductFullIncrementIcon btnProductFullCountIcon" />
                    </button>
                </div>
            }
            <div className="productCardContent">
                <p className="productCardContentType">
                    {type}
                </p>
                <p className="productCardContentFood">
                    {food}
                </p>
                <p className='productCardContentPrice'>
                    ${price}
                </p>
            </div>
        </div>
    )
}

export default Product