import React from "react";
import Slider from "react-slick";
import ImgCard from "../img-card/ImgCard";
import ArrowButton from "../arrow-button/ArrowButton";
import { bestSellersLabels } from "../../helpers/labels";
import { slickSettings } from "../../helpers/utils";
import "./BestSellers.css";

const BestSellers = () => {
  return (
    <div className="best-sellers">
      <h4>{bestSellersLabels.section}</h4>
      <Slider className="cards-container" {...slickSettings}>
        {bestSellersLabels.cards.map((card) => (
          <ImgCard key={card.id} sellerLabels={card} />
        ))}
      </Slider>
    </div>
  );
};

export default BestSellers;
