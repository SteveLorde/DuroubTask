import "./navbar.scss"
import {Route} from "react-router-dom";

export default function Navbar() {

    return <>
        <div>
            {/*Logo*/}
            <img className={"logo"} src="/logos/Logo%20-%20%20White.svg"  alt={"duroublogo"}/>

            {/*NavLinks*/}
            <div>
                <ul>
                    <li><Route path={""}>About Us</Route></li>
                    <li><Route path={""}>Services</Route></li>
                    <li><Route path={""}>News</Route></li>
                    <li><Route path={""}>Careers</Route></li>
                    <li><Route path={""}>Contact Us</Route></li>
                </ul>
            </div>

            {/*Language Button*/}
            <div>
                <button className={"lang-btn"}>
                    <span>Eng</span>
                    <span>ع</span>
                </button>
            </div>
        </div>
    </>
}