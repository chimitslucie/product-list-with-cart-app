import basketImg from '../Assets/Img/basket/illustration-empty-cart.svg'

function Basket() {
    return (
        <div className="basket">
            <h2 className="basketTitle">
                Your Cart (0)
            </h2>
            <div className="basketEmpty">
                <img src={basketImg} className="basketEmptyImg" />
                <p className="basketEmptyText">
                    Your added items will appear here
                </p>
            </div>
        </div>
    )
}

export default Basket