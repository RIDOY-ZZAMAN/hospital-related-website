import React from 'react';

const ContactUs = () => {
    return (
        <div>
            <h3 className="my-3"><span className="text-primary border-bottom border-3">GET IN TOUCH</span></h3>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-sm-12 text-center">
                        <form className="w-100">
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" />
                            </div>
                            <div>
                                <textarea className="form-control" name="" id="" cols="47" rows="5" placeholder="Your Message Here"></textarea>
                            </div>
                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label class="form-check-label" for="exampleCheck1">Check me out</label>
                            </div>
                            <button type="submit" className="btn btn-primary mb-4">Submit</button>
                        </form>
                    </div>

                    <div style={{ height: "330px" }} className="col-lg-6 col-sm-12 border" >

                        <h4 className='border-bottom'> Our Location</h4>

                        <div>
                            <p>Adress: Feni, Mohipal</p>
                            <p>Phone: +800000000000</p>
                            <p>Telephone: 099900</p>
                            <p>Email: support@hospital.com</p>
                            <p>Fax: 9ii9999</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;