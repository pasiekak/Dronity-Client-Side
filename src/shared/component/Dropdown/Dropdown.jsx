import {useState} from "react";

import "./dropdown.css";
import CaretDownSVG from "../../assets/media/svg/CaretSVG/down/CaretDownSVG";

const Dropdown = ({trigger, itemList, component}) => {
    const [open, setOpen] = useState(false);

    return (
        <div className="dropdown">
            <div
                className="trigger animated-hover"
                onClick={() => setOpen((prev) => !prev)}
            >
                <span>{trigger}</span>
                <CaretDownSVG className={`caret${open ? " flip" : ""}`}/>
            </div>
            <ul className={`menu${open ? " open" : ""}`}>
                <div className="menu-wrapper">
                    {itemList && itemList.map((item, index) => (
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
                    {component && component}
                </div>
            </ul>
        </div>
    );
};
export default Dropdown;
