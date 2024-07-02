export default function Footer() {

    return (
        <>
            {/*top*/}
            <section>
                <div>
                    {/*contact info*/}
                    <div>
                        <h2>Get In Touch</h2>
                        <p>Lorem ipsum dolor sit amet consectetur. Viverra justo odio platea parturient phasellus
                            aliquam. Gravida amet leo quis nam nibh.</p>
                        <div>
                            <div>
                                <div>
                                    <img src={""} alt={""}/>
                                    <span>+966 58 168 0000</span>
                                </div>

                                <div>
                                    <img src={""} alt={""}/>
                                    <span>Customercare@duroub.com</span>
                                </div>

                            </div>
                        </div>
                    </div>
                    {/*Message Form*/}
                    <div className={"messageform"}>
                        <form className={"form"}>
                            <label>Full Name</label>
                            <input className={"form-input"} type={"text"}/>
                            <label>Email</label>
                            <input className={"form-input"} type={"text"}/>
                            <label>Subject</label>
                            <input className={"form-input"} type={"text"}/>
                            <label>Your Message</label>
                            <input className={"form-input"} type={"text"}/>
                            <input className={"form-submit"} type={"submit"}>
                                <span className={"form-submit-text"}>Send</span>
                                <img className={"form-submit-icon"} src={""} alt={""} />
                            </input>
                        </form>
                    </div>
                </div>
            </section>
            {/*bottom*/}
            <section>
                <div>

                </div>
            </section>
        </>
    )
}