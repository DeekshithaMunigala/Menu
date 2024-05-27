import { useState } from "react";
import Cards from "./Cards";
import Menu from "./Menu";
import Buttons from "./Buttons";

const Body = () => {
  const [menuList, setMenuList] = useState(Menu);

  return (
    <div>
      <Buttons setMenuList={setMenuList} />
      <div className="section-center">
        {menuList.map((each) => (
          <Cards key={each.id} card={each} />
        ))}
      </div>
    </div>
  );
};

export default Body;
