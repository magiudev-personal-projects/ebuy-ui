import "./style.css";
import Navbar from "../../components/navbar";
import Products from "../../components/products";
import Newsletter from "../../components/newsletter";
import Footer from "../../components/footer";

const ProductsPage = () => {
  return (
    <>
        <Navbar />
        <div className="products-page__container">
          <h2 className="products-page__title">Dresses</h2>
          <div className="products-page__filter-container">
            <div className="products-page__filter-group">
                <span>Filter: </span>
                <select className="products-page__select-button" name="color">
                    <option default disabled>Color</option>
                    <option value="white">White</option>
                    <option value="black">Black</option>
                    <option value="red">Red</option>
                    <option value="blue">Blue</option>
                    <option value="yellow">Yellow</option>
                    <option value="green">Green</option>
                </select>
                <select className="products-page__select-button" name="size">
                    <option default disabled>Size</option>
                    <option value="xs">XS</option>
                    <option value="s">S</option>
                    <option value="m">M</option>
                    <option value="l">L</option>
                    <option value="xl">XL</option>
                </select>
            </div>
            <div className="products-page__filter-group">
                <span>Sort: </span>
                <select className="products-page__select-button" name="sort">
                    <option default disabled>Sort</option>
                    <option value="newest">Newest</option>
                    <option value="asc">Price (asc)</option>
                    <option value="desc">Price (desc)</option>
                </select>
            </div>
          </div>
          <Products />
        </div>
        <Newsletter />
        <Footer />
    </>
  )
}

export default ProductsPage;