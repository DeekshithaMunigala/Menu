import Menu from "./Menu";
import React, { useState } from "react";

const Buttons = () => {
  // const [menuList, setMenuList] = useState(Menu);

  // const filterItems = (category) => {
  //   if ((category = "all")) {
  //     setMenuList(Menu);
  //   } else {
  //     const data = Menu.filter((each) => each.category === category);
  //     setMenuList(data);
  //   }
  // };

  return (
    <div className="btn-container">
      <button
        className="btn"
        onClick={() => {
          console.log(Menu);
        }}
      >
        All
      </button>
      <button
        className="btn"
        onClick={() => {
          const data = Menu.filter((each) => each.category === "breakfast");
          console.log(data);
        }}
      >
        Breakfast
      </button>
      <button
        className="btn"
        onClick={() => {
          const data = Menu.filter((each) => each.category === "lunch");
          console.log(data);
        }}
      >
        Lunch
      </button>
      <button
        className="btn"
        onClick={() => {
          const data = Menu.filter((each) => each.category === "shakes");
          console.log(data);
        }}
      >
        Shakes
      </button>
    </div>
  );
};

export default Buttons;
