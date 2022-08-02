import "./style.css";
import Navbar from "../../components/navbar";
import Newsletter from "../../components/newsletter";
import Footer from "../../components/footer";
import ProductInCart from "./components/product";
import { Link } from "react-router-dom";

const products = [
    {
        id: 123456789,
        name: "JESSIE THUNDER SHOES",
        color: "black",
        size: 3.75,
        price: 30,
        img: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A"
    },
    {
        id: 234567891,
        name: "HAKURA T-SHIRT",
        color: "gray",
        size: "M",
        price: 20,
        img: "https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png"
    },
    {
        id: 345678912,
        name: "JESSIE THUNDER SHOES",
        color: "black",
        size: 3.75,
        price: 30,
        img: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A"
    },
    {
        id: 456789123,
        name: "HAKURA T-SHIRT",
        color: "gray",
        size: "M",
        price: 20,
        img: "https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png"
    }
]


const CartPage = () => {
  return (
    <>
        <Navbar />
        <div className="cart-page__container">
            <h2 className="cart-page__title">YOUR BAG</h2>
            <Link to="/products" className="cart-page__button cart-page__button--light">CONTINUE SHOPPING</Link>
            <div className="cart-page__top-links-container">
                <p className="cart-page__link">Shopping Bag (2)</p>
                <p className="cart-page__link">Your Wishlist (0)</p>
            </div>
            <button className="cart-page__button cart-page__button--danger">EMPTY CART</button>
            <div className="cart-page__products-container">
                {
                    products.map(({id, name, color, size, price, img}) => (
                        <ProductInCart 
                            key={id}
                            id={id}
                            name={name}
                            color={color}
                            size={size}
                            price={price}
                            img={img}
                        />
                    ))
                }
            </div>
            <div className="cart-page__order-summary-container">
                <p className="cart-page__order-summary-title">ORDER SUMMARY</p>
                <div className="cart-page__order-summary-group">
                    <p>Subtotal</p>
                    <p>$ 80</p>
                </div>
                <div className="cart-page__order-summary-group">
                    <p>Shipping Cost</p>
                    <p>$ 4</p>
                </div>
                <div className="cart-page__order-summary-group">
                    <p>Discount</p>
                    <p>$ 5</p>
                </div>
                <div className="cart-page__order-summary-group">
                    <p className="cart-page__order-total-text">Total</p>
                    <p className="cart-page__order-total-amount">$ 70</p>
                </div>
                <button className="cart-page__button cart-page__button--dark">CHECKOUT NOW</button>
            </div>
        </div>
        <Newsletter />
        <Footer />
    </>
  )
};

export default CartPage;