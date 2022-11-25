import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  imgSrc: PropTypes.string,
  style: PropTypes.object,
};

const Card = ({ children, imgSrc, style }) => {
  const img = imgSrc && <img className="card-img-top" src={imgSrc} alt="" />;

  return (
    <div className="card" style={style}>
      {img}
      <div className="card-body">{children}</div>
    </div>
  );
};

Card.propTypes = propTypes;

export default Card;
