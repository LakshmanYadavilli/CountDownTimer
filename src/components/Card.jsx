import React from "react";
import css from "./Card.module.css";

const Card = ({ title, value }) => {
  return (
    <div className={css.card}>
      <h1>
        {title}:{value < 10 ? `0${value}` : value}
      </h1>
    </div>
  );
};

export default Card;
