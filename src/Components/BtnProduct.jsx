import iconAddCart from "../Assets/Img/Icons/icon-add-to-cart.svg"

function BtnProduct() {
    return (
        <button className="btnProduct">
            <img src={iconAddCart} className="btnProductImg" />
            <p className="btnProductText"> Add to Cart</p>
        </button>
    )
}

export default BtnProduct