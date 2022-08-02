import { Link } from "react-router-dom";
import { popularProducts } from "../../../data";
import Product from "./components/product";
import "./style.css";

const Products = () => {
  return (
    <div className="products__container">
        {
            popularProducts.map(({id, img}) => (
              <Link
                to="/product"
                key={id}
              >
                <Product
                    id={id}
                    img={img}
                    />
              </Link>
            ))
        }
    </div>
  )
}

export default Products;