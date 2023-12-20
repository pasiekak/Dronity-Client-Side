import {useState} from "react";

import './dropdown.css';
import caret from '../../../assets/media/icons/caret-down-fill.svg';
import {ReactSVG} from "react-svg";
const Dropdown = ({trigger, itemList}) => {
    const [open, setOpen] = useState(false);

    return (
        <div className='dropdown'>
            <div className='trigger animated-hover' onClick={() => setOpen(prev => !prev)}>
                <span>{trigger}</span>
                <ReactSVG src={caret} alt='arrow' className={`caret${open?' flip' : ''}`}/>
            </div>
            <ul className={`menu${open ? ' open' : ''}`}>
                <div className='menu-wrapper'>
                    {itemList.map((item, index) =>
                        <li key={index}>
                            <button onClick={() => {
                                item.handleClick();
                                setOpen(false);
                            }

                            }><span className='animated-hover'>{item.text}</span></button>
                        </li>)}
                </div>
            </ul>
        </div>
    )
}
export default Dropdown;