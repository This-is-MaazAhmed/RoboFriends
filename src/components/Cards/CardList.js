import React from "react";
import Card from "./Card";

function CardList({ robos }) {
  return (
    <div>
      {robos.map((robo, index) => (
        <Card
          key={index}
          name={robo.name}
          userName={robo.username}
          email={robo.email}
        />
      ))}
    </div>
  );
}

export default CardList;
