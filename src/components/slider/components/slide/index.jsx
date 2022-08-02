import { Link } from "react-router-dom";
import "./style.css";

const Slide = ({
  img,
  bg,
  title,
  desc,
}) => {
  return (
    <div className="slide__container" style={{background: bg}}>
      <div className="slide__image-container">
        <picture className="slide__picture">
          <source srcSet={img} media="(min-width: 600px)"/>
          <img src="" className="slide__image"/>
        </picture>
      </div>
      <div className="slide__info-container">
        <p className="slide__title">{title}</p>
        <p>{desc}</p>
        <Link to="/products"><button className="slide__button">SHOP NOW</button></Link>
      </div>
    </div>
  )
}

export default Slide;