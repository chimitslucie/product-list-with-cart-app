import { useContext } from 'react';
import shoppingCartImg from '../Assets/Img/ShoppingCart/illustration-empty-cart.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import carbonIcon from "../Assets/Img/Icons/icon-carbon-neutral.svg";
import { ShopContext } from '../Context/ShopContext';
import products from '../Data/Product.json';


function ShoppingCart({ }) {
    const { cartItems } = useContext(ShopContext);

    return (
        <div className="shoppingCart">
            <h2 className="shoppingCartTitle">
                Your Cart (0)
            </h2>
            {/* <div className="shoppingCartEmpty">
                <img src={shoppingCartImg} className="shoppingCartEmptyImg" alt="" />
                <p className="shoppingCartEmptyText">
                    Your added items will appear here
                </p>
            </div> */}
            <div className="shoppingCartFull">
                {products.map((product) => {
                    if (cartItems[product.id] !== 0) {
                        return (
                            <div className='shoppingCartFullItem'>
                                <div className='shoppingCartFullItemContent'>
                                    <div className='shoppingCartFullContent'>
                                        <h2 className='shoppingCartFullContentFood'>
                                            {product.food}
                                        </h2>
                                        <div className='shoppingCartFullContentPrices'>
                                            <p className='shoppingCartFullContentQuantity'>
                                                {product.counter}x
                                            </p>
                                            <p className='shoppingCartFullContentPrice'>
                                                @{product.price}
                                            </p>
                                            <p className='shoppingCartFullContentTotalPrice'>
                                                $
                                                {/* {data.id.price * id.counter} */}
                                            </p>
                                        </div>
                                    </div>
                                    <FontAwesomeIcon icon={faCircleXmark} className="shoppingCartFullIcon" />
                                </div>
                                <hr className='shoppingCartFullItemBorder' />
                            </div>
                        )
                    }
                })}

                <div className='shoppingCartFullTotal'>
                    <div className='shoppingCartFullTotalContent'>
                        <p className='shoppingCartFullTotalText'>
                            Order Total
                        </p>
                        <p className='shoppingCartFullTotalPrice'>
                            $665
                            {/*  */}
                        </p>
                    </div>
                    <div className='shoppingCartFullTotalCarbon'>
                        <img src={carbonIcon} alt="neutral-carbon-icon" className='shoppingCartFullTotalCarbonImg' />
                        <p className='shoppingCartFullTotalCarbonText'>
                            This is a <span className='shoppingCartFullTotalCarbonTextSpan'>carbon-neutral</span> delivery
                        </p>
                    </div>
                    <button className='shoppingCartFullTotalBtn'>
                        Confirm Order
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ShoppingCart