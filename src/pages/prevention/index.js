import React from "react";
import img from "../../images/Epidemic-2.svg";
import "./styles.css";
import preventionData from "../../server/preventionData";
import Slideshow from "../../components/slideShow/Slide";
const Dicas = () => {
  return (
    <div className="preventionContainer">
      <section className="prevention">
        <h1>Cuidados no dia a dia</h1>
        <div className="preventionData">
          <img src={img} alt="Doctor protecting himself from virus" />
          <div className="dailyPrevention">
            {preventionData.map((item) => (
              <div key={item.id} className="preventionList">
                <div className="items">
                  <img src={item.image} alt="" />
                  <div>
                    <span>{item.title}</span>
                    <strong>{item.description}</strong>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Slideshow />
    </div>
  );
};

export default Dicas;
