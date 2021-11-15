import React from "react";
import { Slide } from "react-slideshow-image";
import leafletData from "../../server/leafletData";
import properties from "./Properties";
import "./styles.css";

const Slideshow = () => {
  return (
    <section className="slideContainer">
      <h1>Dicas</h1>
      <Slide {...properties} className="slide">
        {leafletData.map((items) => (
          <div key={items.id}>
            <a href={items.link} target="blank">
              <img
                className="slideImg"
                src={items.image}
                alt={items.description}
              />
            </a>
          </div>
        ))}
      </Slide>
    </section>
  );
};

export default Slideshow;
