import {Link} from "react-router-dom";
import "./home.scss"
import Button1 from "../components/buttons/general/button1.tsx";

const viewportWidth = window.innerWidth

export default function HomePage() {

    return (
        <>
            <div className={"w-full"}>
                <section>
                    <div>
                        {/*Background Video*/}
                        <video className={"-z-50"} autoPlay={true} muted={true} width={viewportWidth} controls={false}
                               src="/images/cover1.mp4"/>

                        {/*Text*/}
                        <div className={"flex flex-col items-start"}>
                            <h2>Lorem ipsum dolor</h2>
                            <p>Lorem ipsum dolor sit amet consectetur. Et ultrices auctor tempor
                                urna lectus diam pretium.</p>
                            <Link to={""}>Discover More</Link>
                        </div>
                    </div>
                </section>

                <section>
                    <div>
                        <img className="-z-50" src="/images/cover2.jpg" alt={""}/>

                        {/*Text*/}
                        <div>
                            <h2>About Duroub Logistics</h2>
                            <p>Lorem ipsum dolor sit amet consectetur. Viverra justo odio platea parturient phasellus
                                aliquam. Gravida amet leo quis nam nibh. Sed urna commodo urna bibendum nulla cras
                                tellus.
                                Sit lacus dictum porttitor tellus sed fames arcu velit. Quam leo proin ipsum molestie.
                                Nibh
                                magna porttitor ac ipsum blandit eget vestibulum.</p>

                        </div>
                        {/*Logistics Facts Cards*/}
                        <div>
                            <ul className={"flex flex-row items-center"}>
                                <li>
                                    <div className={"fact-card"}>
                                        <img src="/images/facts/9a1f8721e1011ee63294b64bd0c0fb93.jpg" alt={""}/>
                                        <h1>25C to +25C</h1>
                                        <p>Multi temperature WH’s Order fulfillment DC</p>
                                    </div>
                                </li>
                                <li>
                                    <div className={"fact-card"}>
                                        <img src="/images/facts/ecd980f027933bfaa43f599371061788.jpg" alt={""}/>
                                        <h1>One united</h1>
                                        <p>SAP EWM Voice picking</p>
                                    </div>
                                </li>
                                <li>
                                    <div className={"fact-card"}>
                                        <img src="/images/facts/9bd1b1d6a5b7115411e4852ea7daca7b.jpg" alt={""}/>
                                        <h1>+60,000</h1>
                                        <p>Pallets</p>
                                    </div>
                                </li>
                                <li>
                                    <div className={"fact-card"}>
                                        <img src="/images/facts/d689279de3e06a043c81301b98d52ae4.jpg" alt={""}/>
                                        <h1>+300</h1>
                                        <p>Workforce employees</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section>
                    <div>
                        <h1>Duroub Services</h1>
                        <p>Lorem ipsum dolor sit amet consectetur. Viverra justo odio platea parturient phasellus aliquam. Gravida amet leo quis nam nibh.</p>
                        <Button1></Button1>
                    </div>
                    <div>
                        <ul className={"flex flex-row items-center"}>
                            <li>
                                <div className={"fact-card"}>
                                    <img src="/images/facts/9a1f8721e1011ee63294b64bd0c0fb93.jpg" alt={""}/>
                                    <h1>Transportation, distribution & last mile</h1>
                                </div>
                            </li>
                            <li>
                                <div className={"fact-card"}>
                                    <img src="/images/facts/ecd980f027933bfaa43f599371061788.jpg" alt={""}/>
                                    <h1>Warehousing multi temperature (25C to ...</h1>
                                </div>
                            </li>
                            <li>
                                <div className={"fact-card"}>
                                    <img src="/images/facts/9bd1b1d6a5b7115411e4852ea7daca7b.jpg" alt={""}/>
                                    <h1>Cross border transport</h1>
                                </div>
                            </li>
                            <li>
                                <div className={"fact-card"}>
                                    <img src="/images/facts/d689279de3e06a043c81301b98d52ae4.jpg" alt={""}/>
                                    <h1>4PL & Control tower</h1>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
        </>
    )
}