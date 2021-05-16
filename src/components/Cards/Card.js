import React from "react";

const Card = ({ name, userName, email }) => {
  return (
    <div className="tc bg-light-green dib br4 pa3 ma2 grow bw2 shadow-5">
      <img
        src={`https://robohash.org/${userName}?size=180x180`}
        alt="roboImg"
      />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
