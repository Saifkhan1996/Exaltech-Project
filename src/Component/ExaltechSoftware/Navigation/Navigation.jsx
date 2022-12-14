import React from "react";

import { useSelector } from "react-redux";

const Navigation = () => {
  const navSelector = useSelector((store) => store.NavigationReducer);
  return (
    <div>
      <nav>
        {navSelector.map((item, index) => {
          return (
            <a key={index} href={item.link} target={item.target}>
              {item.name}
            </a>
          );
        })}
      </nav>
    </div>
  );
};

export default Navigation;
