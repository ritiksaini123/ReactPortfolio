import { Path } from "../../Router/Constant";
import { Link } from 'react-scroll';
import humburger from '../../images/icons/humburger.png'
import { type } from "@testing-library/user-event/dist/type";
import { useState } from "react";

export const Header = () => {
    const [toggle,setToggle]=useState(false)
    const link = [
        { value: 'Home', path: 'home' },
        { value: 'About', path: 'about' },
        { value: 'Skills', path: 'skills' },
        { value: 'Services', path: 'services' },
        { value: 'Qualification', path: 'portfolio' },
        { value: 'Contact', path: 'contact' }
        
    ];
    return (
<div className="flex flex-wrap justify-between align-center shadow-md px-4 border-box z-10 fixed  top-0 h-max max-w-full py-3 md:px-32 w-full bg-slate-100">
            <div className="flex items-center justify-between md:w-auto w-full"> <p className="font-semibold">Ritik</p>
            <img className="h-4 visible md:invisible" src={humburger} onClick={()=>{setToggle(!toggle)}}></img></div>
           
           {(toggle || window.innerWidth >= 768) &&
            <ul className="flex flex-col md:flex-row flex-wrap gap-5 align-center">
                {link.map((element, index) =>
                (

                    <li  className="font-semibold" key={index}><Link onClick={()=>{if (window.innerWidth < 768)setToggle(false)}} to={element.path} smooth={true} duration={500}>{element.value}</Link></li>
                )
                )}
            </ul>}
        </div>
    )
}