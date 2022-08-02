import useQuantity from "../../../../hooks/useQuantity";
import "./style.css"

const ProductInCart = ({name, id, color, size, price, img}) => {

    const [
        quantity,
        increment,
        decrement,
        writeQuantity
    ] = useQuantity();

  return (
    <div className="product-cart__container">
        <img 
            className="product-cart__image"
            src={img}
        />
        <div className="product-cart__info-container">
            <p><b>Product: </b>{name}</p>
            <p><b>ID: </b>{id}</p>
            <div className="product-cart__color-container">
                <p><b>Color: </b></p>
                <div className="product-cart__product-color" style={{ backgroundColor: color}}></div>
            </div>
            <p><b>Size: </b>{size}</p>
            <div className="product-cart__counter-container">
                <button className="product-cart__quantity-button" onClick={decrement}>-</button>
                <input type="text" onChange={writeQuantity} name="quantity" value={quantity} className="product-cart__quantity-input" />
                <button className="product-cart__quantity-button" onClick={increment}>+</button>
            </div>
            <p className="product-cart__price">$ {price}</p>
        </div>
    </div>
  )
}

export default ProductInCart;