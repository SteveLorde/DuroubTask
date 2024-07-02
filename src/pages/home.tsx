import {Link} from "react-router-dom";
import "./home.scss"
export default function HomePage() {

    return (
        <>
            <section>
                <div>
                    {/*Background Video*/}

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
                    {/*Text*/}
                    <div>
                        <h2>About Duroub Logistics</h2>
                        <p>Lorem ipsum dolor sit amet consectetur. Viverra justo odio platea parturient phasellus
                            aliquam. Gravida amet leo quis nam nibh. Sed urna commodo urna bibendum nulla cras tellus.
                            Sit lacus dictum porttitor tellus sed fames arcu velit. Quam leo proin ipsum molestie. Nibh
                            magna porttitor ac ipsum blandit eget vestibulum.</p>

                    </div>
                    {/*Logistics Facts Cards*/}
                    <div>
                        <div className={"fact-card"}>
                            <img src={""} alt={""} />
                            <h1></h1>
                            <p></p>
                        </div>
                    </div>
                </div>
            </section>

            <section>

            </section>
        </>
    )
}