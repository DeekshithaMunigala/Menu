import Menu from "./Menu";
import React, { useState } from "react";

const Buttons = ({ setMenuList }) => {
  const filterItems = (category) => {
    if (category === "all") {
      setMenuList(Menu);
    } else {
      const data = Menu.filter((each) => each.category === category);
      setMenuList(data);
    }
  };

  return (
    <div className="btn-container">
      <button className="btn" onClick={() => filterItems("all")}>
        All
      </button>

      <button className="btn" onClick={() => filterItems("breakfast")}>
        Breakfast
      </button>

      <button className="btn" onClick={() => filterItems("lunch")}>
        Lunch
      </button>

      <button className="btn" onClick={() => filterItems("shakes")}>
        Shakes
      </button>
    </div>
  );
};

export default Buttons;
