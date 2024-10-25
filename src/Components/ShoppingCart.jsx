import { useState } from 'react';
import shoppingCartImg from '../Assets/Img/ShoppingCart/illustration-empty-cart.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import carbonIcon from "../Assets/Img/Icons/icon-carbon-neutral.svg";


function ShoppingCart() {

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
                <div className='shoppingCartFullItem'>
                    <div className='shoppingCartFullItemContent'>
                        <div className='shoppingCartFullContent'>
                            <h2 className='shoppingCartFullContentFood'>
                                {/* {data.id.food} */}
                                waffle
                            </h2>
                            <div className='shoppingCartFullContentPrices'>
                                <p className='shoppingCartFullContentQuantity'>
                                    {/* {id.counter} */} 1x
                                </p>
                                <p className='shoppingCartFullContentPrice'>
                                    @ 44
                                    {/* {data.id.price} */}
                                </p>
                                <p className='shoppingCartFullContentTotalPrice'>
                                    $85
                                    {/* {data.id.price * id.counter} */}
                                </p>
                            </div>
                        </div>
                        <FontAwesomeIcon icon={faCircleXmark} className="shoppingCartFullIcon" />
                    </div>
                    <hr className='shoppingCartFullItemBorder' />
                </div>
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