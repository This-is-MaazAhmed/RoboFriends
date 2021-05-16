import React from "react";
import CardList from "./components/Cards/CardList";
import { robots } from "./robots";
import Header from "./components/Header";
import "./CSS/app.css";

function App() {
  const [robo, setrobo] = React.useState(robots);

  const filterRobo = (event) => {
    const searchItem = event.target.value;
    setrobo(
      searchItem === ""
        ? robots
        : robo.filter((robo) =>
            robo.name.toLowerCase().includes(searchItem.toLowerCase())
          )
    );
  };

  return (
    <div className="tc">
      <Header filterRobo={filterRobo} />
      <CardList robos={robo} />
    </div>
  );
}

export default App;
