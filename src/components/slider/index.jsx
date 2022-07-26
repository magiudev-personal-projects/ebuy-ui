import { useState } from "react";
import { slidesData } from "../../../data";
import Slide from "./components/slide";
import "./style.css"

const Slider = () => {
  const [position, setPosition] = useState(0);

  const minPosition = -100 * (slidesData.length - 1);

  const handleClick = (direction) => {
    if(direction === "right") {
      if(position > minPosition) setPosition(position - 100);
      else setPosition(0);
    }
    else if(direction === "left"){
      if(position < 0) setPosition(position + 100);
      else setPosition(minPosition);
    }  
  }

  return (
    <div className="slider__container">
      <div 
        className="slider__arrow-container slider__arrow-container--left"
        onClick={() => {handleClick("left")}}
      >
        <span className="material-symbols-outlined">navigate_before</span>
      </div>
      <div 
        className="slider__arrow-container slider__arrow-container--right"
        onClick={() => {handleClick("right")}}
      >
        <span className="material-symbols-outlined">navigate_next</span>
      </div>
      <div className="slider__slides-container">
        <div className="slider__slides-scroll" style={{ transform: `translateX(${position}vw)`}}>
          {
            slidesData.map(slide => (
              <Slide 
                key={slide.id}
                img={slide.img}
                bg={slide.bg}
                title={slide.title}
                desc={slide.desc}
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Slider;