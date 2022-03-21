import React from 'react';
import './Appointment.css'

const Appointment = () => {
    return (
        <div className="container">
            <div className="row my-5 ">
                <div className="col-md-6 col-sm-12 booking text-start p-5">
                    <i className="fas fa-calendar-alt fa-3x"></i><br />
                    <h1 className="mt-3">Book Your Appointment</h1>
                    <p>Our simple to use, appointment process makes it easy for you to book for any one of our services and doctors.</p>
                </div>
                <div className="col-md-6 col-sm-12">
                    <h2>Fill in the form to book a visit
                    </h2>
                    <div className="row g-3 p-3 ms-3">
                        <div className="col-lg-6 col-sm-12">
                            <input type="text" className="form-control" placeholder="First name" aria-label="First name" />
                        </div>
                        <div className="col-lg-6 col-sm-12">
                            <input type="text" className="form-control" placeholder="Last name" aria-label="Last name" />
                        </div>
                        <div className="col-lg-6 col-sm-12">
                            <input type="text" className="form-control" placeholder="Phone" aria-label="First name" />
                        </div>
                        <div className="col-lg-6 col-sm-12">
                            <input type="text" className="form-control" placeholder="Email" aria-label="Last name" />
                        </div>
                        <div className="col-lg-6 col-sm-12">
                            <label className="visually-hidden" for="inlineFormSelectPref">Preference</label>
                            <select className="form-select" id="inlineFormSelectPref">
                                <option selected>Choose Service</option>
                                <option value="1">Blood Test</option>
                                <option value="2">Full body Checkup</option>
                                <option value="3">More....</option>
                            </select>
                        </div>
                        <div className="col-lg-6 col-sm-12">
                            <input className="form-control" type="date" id="birthday" name="appiontmentdate" />
                        </div>
                        <button type="button" className="btn btn-danger fw-bold appopintment">Make An Appointment</button>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Appointment;