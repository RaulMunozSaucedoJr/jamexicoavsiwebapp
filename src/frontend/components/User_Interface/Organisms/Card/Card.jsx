import React from "react";
import { Link } from "react-router-dom";

const Card = ({
  imageUrl,
  alternativeText,
  title,
  cardText,
  secondarycardText,
  smallText,
  cardBody,
  loading,
}) => {
  return (
    <>
      <div className="card">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4">
              <img
                src={imageUrl}
                className="img-fluid"
                lazy={loading}
                alt={alternativeText}
              />
            </div>
            <div className="col-md-8 mb-4">
              <div className={cardBody}>
                <h1 className="pt-5">{title}</h1>
                <p>{cardText}</p>
                <p>{secondarycardText}</p>
                <small>
                  <Link to="/Blog">{smallText}</Link>
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
