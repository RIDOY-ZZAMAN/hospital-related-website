import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ServiceDetails = () => {
    const { serviceId } = useParams();
    const [serviceDetails, setServiceDetails] = useState([]);


    const [singleService, setSingleService] = useState({});

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServiceDetails(data.services))


    }, [])

    useEffect(() => {
        const foundService = serviceDetails.find((service) => service.id === parseInt(serviceId));
        setSingleService(foundService)
    }, [serviceDetails, serviceId]);

    return (
        <div>
            <h2 className="my-4">This is  the  Details of <span className="text-danger">{singleService?.title}</span> Service</h2>
            <div className="container">

                <div className="card mb-3 mx-auto" style={{ maxWidth: "640px", height: "450px" }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={singleService?.img} height="150px" width="150px" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{singleService?.title}</h5>
                                <p className="card-text text-start ms-4">{singleService?.description}</p> <br />
                                <h2>Cost: {singleService?.cost}</h2>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div >
    );
};

export default ServiceDetails;