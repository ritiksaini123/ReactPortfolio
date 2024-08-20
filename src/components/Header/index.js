import { Path } from "../../Router/Constant";
// import { Link } from "react-router-dom";
import { Link } from 'react-scroll';

import { type } from "@testing-library/user-event/dist/type";
export const Header = () => {
    const link = [
        { value: 'Home', path: 'home' },
        { value: 'About', path: 'about' },
        { value: 'Skills', path: 'skills' },
        { value: 'Services', path: 'services' },
        { value: 'Qualification', path: 'portfolio' },
        { value: 'Contact', path: 'contact' }
        
    ];
    return (
        <div className="flex flex-wrap justify-between align-center shadow-md px-2 py-3 md:px-32 fixed top-0 w-full bg-slate-100">
            <p className="font-semibold">Ritik</p>
            <ul className="flex flex-wrap gap-5 align-center">
                {link.map((element, index) =>
                (

                    <li className="font-semibold" key={index}><Link to={element.path} smooth={true} duration={500}>{element.value}</Link></li>
                )
                )}
            </ul>
        </div>
    )
}