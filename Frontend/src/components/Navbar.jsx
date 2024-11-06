import React, {useState} from 'react'
import { Link } from "react-scroll";
import { GiHamburgerMenu }  from "react-icons/gi"
import { data } from "../restApi.json"

export default function Navbar() {

    const [show , setshow] = useState(false);
  return (
    <nav>
        <div className="logo">ZEESHU</div>
        <div className={show ? "navLinks showmenu" : "navLinks"}>
            <div className="links">
                {data[0].navbarLinks.map((element)=>{
                    return(
                    <Link 
                    to = {element.link}
                    key={element.id}
                    spy={true}
                    smooth={true}
                    duration={500}
                    >
                    {element.title}
                    </Link>

                );
                })}
            </div>
            <button className="menuBtn">OUR MENU</button>
        </div>
        <div className="hamburger" onClick={()=>{setshow(!show)}}>
            <GiHamburgerMenu/>
        </div>
    </nav>
  )
}
