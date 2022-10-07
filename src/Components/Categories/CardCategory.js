import React from "react";
import "./categories.css";
function CardCategory(props) {
  return (
    <div className="card_category position-relative text-end btn btn-outline-light fs-5">
      <div className="text-uppercase">
        <p className="text_red mb-0">{props.type}</p>
      </div>
    </div>
  );
}

export default CardCategory;
