export default function ContectUS() {
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e.currentTarget)
    }
    return <section className="page-section" id="contact">
        <div className="container">
            <div className="text-center">

                <h2 className="section-heading text-uppercase">Contact Us</h2>
                <h3 className="section-subheading text-muted">Take the first step towards unlocking the full potential of your Telegram channel with TeleSubs. Get started today and experience the power of exponential growth and engagement like never before.</h3>
            </div>
            {/* <!-- * * * * * * * * * * * * * * *-->
        <!-- * * SB Forms Contact Form * *-->
        <!-- * * * * * * * * * * * * * * *-->
        <!-- This form is pre-integrated with SB Forms.-->
        <!-- To make this form functional, sign up at-->
        <!-- https://startbootstrap.com/solution/contact-forms-->
        <!-- to get an API token!--> */}
            <form id="contactForm" onSubmit={handleSubmit}>
                <div className="row align-items-stretch mb-5">
                    <div className="col-md-6">
                        <div className="form-group">
                            {/* <!-- Name input--> */}
                            <input className="form-control" id="name" type="text" placeholder="Your Name *" required />
                            <div className="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                        </div>
                        <div className="form-group">
                            {/* <!-- Email address input--> */}
                            <input className="form-control" id="email" type="email" placeholder="Your Email *" data-sb-validations="required,email" required />
                            <div className="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                            <div className="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                        </div>
                        <div className="form-group">
                            {/* <!-- Phone number input--> */}
                            <input className="form-control" id="phone" type="tel" placeholder="Your Phone *" required />
                            <div className="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div>
                        </div>
                        <div className="form-group mb-md-0">
                            {/* <!-- Phone number input--> */}
                            <input className="form-control" id="link" type="url" placeholder="Telegram channel id *" required />
                            <div className="invalid-feedback" data-sb-feedback="phone:required">Telegram channel is required.</div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        
                        <div className="form-group form-group-textarea mb-md-0">
                            {/* <!-- Message input--> */}
                            <textarea className="form-control" id="message" placeholder="Your Message *" required></textarea>
                            <div className="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
                        </div>
                    </div>
                </div>
                {/* <!-- Submit success message-->
            <!---->
            <!-- This is what your users will see when the form-->
            <!-- has successfully submitted--> */}
                <div className="d-none" id="submitSuccessMessage">
                    <div className="text-center text-white mb-3">
                        <div className="fw-bolder">Form submission successful!</div>
                        To activate this form, sign up at
                        <br />
                        <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                    </div>
                </div>
                {/* <!-- Submit error message-->
            <!---->
            <!-- This is what your users will see when there is-->
            <!-- an error submitting the form--> */}
                <div className="d-none" id="submitErrorMessage"><div className="text-center text-danger mb-3">Error sending message!</div></div>
                {/* <!-- Submit Button--> */}
                <div className="text-center"><button className="btn btn-primary btn-xl text-uppercase" id="submitButton" type="submit">Send Message</button></div>
            </form>
            {/* <div className="section-heading text-uppercase text-center m-4">Ready to Grow Your Telegram Channel?</div> */}
        </div>
    </section>
}