import { useContext, useState } from 'react';
import shoppingCartImg from '../Assets/Img/ShoppingCart/illustration-empty-cart.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import carbonIcon from "../Assets/Img/Icons/icon-carbon-neutral.svg";
import { ShopContext } from '../Context/ShopContext';
import ShoppingCartModal from './ShoppingCartModal';


function ShoppingCart() {

    const {
        cartItems,
        products,
        removeFromCart,
        getTotalCartAmount,
        getTotalCartSize,
        handleOpenModal,
        openModal
    } = useContext(ShopContext);

    return (
        <div className="shoppingCart">
            <h2 className="shoppingCartTitle">
                Your Cart ({getTotalCartSize()})
            </h2>
            {getTotalCartSize() == 0 ? (
                <div className="shoppingCartEmpty">
                    <img src={shoppingCartImg} className="shoppingCartEmptyImg" alt="drawing of a cake" />
                    <p className="shoppingCartEmptyText">
                        Your added items will appear here
                    </p>
                </div>
            ) : (
                <div className="shoppingCartFull">
                    {products.map((product, index) => {
                        if (cartItems[product.id] > 0) {
                            return (
                                <div key={index} className='shoppingCartFullItem'>
                                    <div className='shoppingCartFullItemContent'>
                                        <div className='shoppingCartFullContent'>
                                            <h2 className='shoppingCartFullContentFood'>
                                                {product.food}
                                            </h2>
                                            <div className='shoppingCartFullContentPrices'>
                                                <p className='shoppingCartFullContentQuantity'>
                                                    {cartItems[product.id]}x
                                                </p>
                                                <p className='shoppingCartFullContentPrice'>
                                                    @ ${product.price}
                                                </p>
                                                <p className='shoppingCartFullContentTotalPrice'>
                                                    ${product.price * cartItems[product.id]}
                                                </p>
                                            </div>
                                        </div>
                                        <FontAwesomeIcon icon={faCircleXmark} className="shoppingCartFullIcon" onClick={() => removeFromCart(product.id)} />
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
                                ${getTotalCartAmount()}
                            </p>
                        </div>
                        <div className='shoppingCartFullTotalCarbon'>
                            <img src={carbonIcon} alt="neutral-carbon-icon" className='shoppingCartFullTotalCarbonImg' />
                            <p className='shoppingCartFullTotalCarbonText'>
                                This is a <span className='shoppingCartFullTotalCarbonTextSpan'>carbon-neutral</span> delivery
                            </p>
                        </div>
                        <button className='shoppingCartFullTotalBtn' onClick={handleOpenModal}>
                            Confirm Order
                        </button>
                    </div>
                </div>
            )
            }
            {openModal && <ShoppingCartModal />}
        </div >
    )
}

export default ShoppingCart