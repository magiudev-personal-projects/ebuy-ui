import Announcement from "../../components/announcement";
import Categories from "../../components/categories";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar"
import Newsletter from "../../components/newsletter";
import Products from "../../components/products";
import SearchBar from "../../components/searchBar";
import Slider from "../../components/slider";


const Home = () => {
  return (
    <>
      {/* <Announcement /> */}
      {/* <SearchBar/> */}
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </>
  )
}

export default Home;
