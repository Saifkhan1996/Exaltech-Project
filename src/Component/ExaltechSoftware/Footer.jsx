import React from "react";
import { useSelector } from "react-redux";

const Footer = () => {
  const FooterSelector = useSelector((state) => state.FooterReducer);
  return (
    <div>
      {FooterSelector.map((item, index) => {
        return (
          <div key={index}>
            <img
              src={item.footerImage}
              alt="Error"
              width={"100%"}
              height={"500px"}
            />
            <h1>{item.footerTitle}</h1>
            <p>{item.footerDesc}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Footer;
