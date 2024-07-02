import "./navbar.scss"
import {Link} from "react-router-dom";

export default function Navbar() {

    return <>
        <div>
            {/*Logo*/}
            <img className={"logo"} src="/logos/Logo%20-%20%20White.svg"  alt={"duroublogo"}/>

            {/*NavLinks*/}
            <div>
                <ul>
                    <li><Link className={"navlink"} to={""}>About Us</Link></li>
                    <li><Link className={"navlink"} to={""}>Services</Link></li>
                    <li><Link className={"navlink"} to={""}>News</Link></li>
                    <li><Link className={"navlink"} to={""}>Careers</Link></li>
                    <li><Link className={"navlink"} to={""}>Contact Us</Link></li>
                </ul>
            </div>

            {/*Language Button*/}
            <div>
                <button className={"lang-btn"}>
                    <span className={"lang"}>Eng</span>
                    <span className={"lang"}>ع</span>
                </button>
            </div>
        </div>
    </>
}