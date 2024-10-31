import { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';

function ShoppingCartModal() {

    const { cartItems, products, getTotalCartAmount, cleanCart, handleOpenModal } = useContext(ShopContext);

    return (
        <div className='blur' onClick={handleOpenModal}>
            <div className='shoppingCartModal'>
                <FontAwesomeIcon icon={faCircleCheck} className='shoppingCartModalIcon' />
                <h2 className='shoppingCartModalTitle'>
                    Order Confirmed
                </h2>
                <p className='shoppingCartModalText'>
                    We hope you enjoy your food!
                </p>
                <div className='modalContent'>
                    {products.map((product, index) => {
                        if (cartItems[product.id] > 0) {
                            return (
                                <div key={index} className='modalContentItem'>
                                    <div className='modalContentItemContent'>
                                        <img src={product.image} alt={product.alt} className='modalContentItemImg' />
                                        <div className='modalContentItemInfos'>
                                            <h3 className='modalContentItemFood'>
                                                {product.food}
                                            </h3>
                                            <div className='modalContentItemPrices'>
                                                <p className='modalContentItemQuantity'>
                                                    {cartItems[product.id]}x
                                                </p>
                                                <p className='modalContentItemPrice'>
                                                    @ ${product.price}
                                                </p>
                                            </div>
                                        </div>
                                        <p className='modalContentItemTotalPrice'>
                                            ${product.price * cartItems[product.id]}
                                        </p>
                                    </div>
                                    <hr className='modalContentItemBorder' />
                                </div>
                            )
                        }
                    })}
                    <div className='modalContentTotal'>
                        <p className='modalContentTotalText'>
                            Order Total
                        </p>
                        <p className='modalContentTotalPrice'>
                            ${getTotalCartAmount()}
                        </p>
                    </div>
                </div>
                <button className='shoppingCartModalBtn' onClick={cleanCart}>
                    Start New Order
                </button>
            </div>
        </div>
    )
}

export default ShoppingCartModal