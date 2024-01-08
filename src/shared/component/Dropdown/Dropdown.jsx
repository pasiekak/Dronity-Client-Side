import { useState } from "react";

import "./dropdown.css";
import caret from "../../assets/media/svg/CaretSVG/caret-down-fill.svg";
import { ReactSVG } from "react-svg";
import CaretSVG from "../../assets/media/svg/CaretSVG/CaretSVG";
const Dropdown = ({ trigger, itemList }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="dropdown">
      <div
        className="trigger animated-hover"
        onClick={() => setOpen((prev) => !prev)}
      >
        <span>{trigger}</span>
        <CaretSVG classname={`caret${open ? " flip" : ""}`} />
      </div>
      <ul className={`menu${open ? " open" : ""}`}>
        <div className="menu-wrapper">
          {itemList.map((item, index) => (
            <li key={index}>
              <button
                onClick={() => {
                  item.handleClick();
                  setOpen(false);
                }}
              >
                <span className="animated-hover">{item.text}</span>
              </button>
            </li>
          ))}
        </div>
      </ul>
    </div>
  );
};
export default Dropdown;
