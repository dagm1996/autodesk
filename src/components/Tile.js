import React from 'react';
import { Link } from 'react-router-dom';

const Tile = (props) => {
  const cssId = props.comingSoon == 1 ? "coming-soon" : null;
  //reloadDocument={true}
  return (
    <Link id={cssId} class="link-block" to={props.link} reloadDocument={true}>
      <div class="image-container">
        <img src={props.imgSrc} height="191" />
      </div>
      <h4>{props.title}</h4>
      {props.comingSoon == 1 ? (
        <p style={{ textAlign: "center" }}>In Development</p>
      ) : null}
      <p>{props.description}</p>
    </Link>
  );
};

export default Tile;