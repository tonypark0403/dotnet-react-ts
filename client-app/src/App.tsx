import React from "react";
import { cars } from "./demo";
import "./App.css";
import CarItem from "./CarItem";

const App: React.FC = () => {
  return (
    <div className="App">
      <ul>
        {cars.map((car) => (
          <CarItem car={car} />
        ))}
      </ul>
    </div>
  );
};

export default App;
