import React, { useState } from 'react';
import { NewsItems } from './Dropdown/News';
import { Link } from 'react-router-dom';
import './Styles/Dropdown.css';



export default function Dropdown() {
    const [click, setClick] = useState(false);
    const handleClick = () => {
        setClick(!click);
    }
    return (
        <>
            <ul onClick={handleClick} className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
                {
                    NewsItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link className={item.cName} to={item.path} onClick={()=>setClick(false)}>{item.title}</Link>
                            </li>
                        )
                    })
                }
            </ul>
        </>
    )
}

