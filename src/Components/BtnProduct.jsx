import { useState, useEffect, useContext } from "react";
import iconAddCart from "../Assets/Img/Icons/icon-add-to-cart.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { ShopContext } from '../Context/ShopContext';

function BtnProduct({ id }) {
    const { cartItems, addToCart, handleDecrement } = useContext(ShopContext);
    //     const [isClick, setIsClick] = useState(false);
    //     const [counter, setCounter] = useState(0);

    //     function handleClick(e) {
    //         setIsClick(true);
    //         setCounter(1);
    //     }

    //     useEffect(() => {
    //         if (isClick == true) {
    //             document.getElementById(`${id}`).querySelector('.productCardImg').classList.add("bordered");
    //         } else {
    //             document.getElementById(`${id}`).querySelector('.productCardImg').classList.remove("bordered");
    //         }
    //     }, [isClick]);

    //     function handleDecrement() {
    //         if (counter > 1) {
    //             setCounter(prev => prev - 1)
    //         } else {
    //             setIsClick(false);
    //         }
    //     }

    //     function handleIncrement() {
    //         setCounter(prev => prev + 1)
    //     }

    return (
        <div className="btnProduct">
            {/* //             <button className={`${!isClick ? "btnProductEmpty" : "btnProductEmpty click"}`} onClick={() => { handleClick(); addToCart(id) }}>
        //                 <img src={iconAddCart} className="btnProductEmptyImg" />
        //                 <p className="btnProductEmptyText"> Add to Cart</p>
        //             </button>
        //             {isClick && <div className={`${counter >= 1 ? "btnProductFull" : "btnProductFull nothing"}`}>
        //                 <button className="btnProductFullDecrement btnProductFullCount" onClick={addToCart}>
        //                     <FontAwesomeIcon icon={faMinus} className="btnProductFullDecrementIcon btnProductFullCountIcon" />
        //                 </button>
        //                 <p className="count">{counter}</p>
        //                 <button className="btnProductFullIncrement btnProductFullCount" onClick={removeFromCart}>
        //                     <FontAwesomeIcon icon={faPlus} className="btnProductFullIncrementIcon btnProductFullCountIcon" />
        //                 </button>
        //             </div>} */}

            {
                !cartItems[id]
                    ? <button className='btnProductEmpty' onClick={() => addToCart(id)}>
                        <img src={iconAddCart} alt='icon-addCart' className="btnProductEmptyImg" />
                        <p className="btnProductEmptyText"> Add to Cart</p>
                    </button>
                    : <div className="btnProductFull">
                        <button className="btnProductFullDecrement btnProductFullCount" onClick={() => handleDecrement(id)}>
                            <FontAwesomeIcon icon={faMinus} className="btnProductFullDecrementIcon btnProductFullCountIcon" />
                        </button>
                        <p className="count">{cartItems[id]}</p>
                        <button className="btnProductFullIncrement btnProductFullCount" onClick={() => addToCart(id)}>
                            <FontAwesomeIcon icon={faPlus} className="btnProductFullIncrementIcon btnProductFullCountIcon" />
                        </button>
                    </div>
            }
        </div>
    )
}

export default BtnProduct