import React, { useEffect, useState } from 'react';
import './Home.css'
import DisplayServices from '../DisplayServices/DisplayServices';
import pateient1 from '../../images/Patient/patient1.png';
import pateient2 from '../../images/Patient/patient2.png';
import { Link } from 'react-router-dom';
import blog from '../../images/Blog/blog.jpg';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
import Review from './Review/Review';
import Rating from 'react-rating';

const Home = () => {
    const [services, setServices] = useState([]);
    const [doctors, setDoctors] = useState([]);
    const [reviews, setReviews] = useState([]);

    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(1);
    const size = 3;


    useEffect(() => {
        fetch(`https://boiling-falls-46123.herokuapp.com/services?page=${page}&&size=${size}`)
            .then(res => res.json())
            .then(data => {
                setServices(data.services);
                const count = data.count;
                const pageNumber = Math.ceil(count / 3);
                setPageCount(pageNumber);

            })

    }, [page])

    useEffect(() => {
        fetch(`https://boiling-falls-46123.herokuapp.com/doctors?page=${page}&&size=${size}`)
            .then(res => res.json())
            .then(data => {
                setDoctors(data.doctors);
                const count = data.count;
                const pageNumber = Math.ceil(count / 3);
                setPageCount(pageNumber);

            })

    }, [page])


    useEffect(() => {
        fetch("https://boiling-falls-46123.herokuapp.com/reviews")
            .then(res => res.json())
            .then(data => setReviews(data))

    }, [])



    return (
        <>
            <div className='TopBanner'>
                <div className="col-lg-4 col-md-12 p-5">
                    <h2 className="text-light text-center fw-bold"><i>HOSPITAL</i></h2>
                    <p className='text-light text-start fw-bold'><i>Our Hospital  is the best hospital at your area. We Ensure high services to our Customers</i></p>

                </div>

            </div>
            <div className="container">
                <h3 className="my-5">Our <span className="text-danger">Departments</span> </h3>

                <div className="row row-cols-1 row-cols-lg-3 g-4">
                    {services.length === 0 ? <div className='mx-auto'><h3 >Loading...</h3></div> :
                        services.map(service => <DisplayServices key={service.id} service={service}></DisplayServices>)
                    }

                </div>
                <div className="d-flex justify-content-center">
                    <div className="pagination">
                        {
                            [...Array(pageCount).keys()]
                                .map(number => <button
                                    className={number === page ? 'selected' : ''}
                                    key={number}
                                    onClick={() => setPage(number)}
                                >{number + 1}</button>)
                        }
                    </div>
                </div>



                {/* doctor section */}



                <h3 className="my-5">Our <span className="text-danger">Doctors</span> </h3>

                <div className="row row-cols-1 row-cols-lg-3 g-4">
                    {doctors.length === 0 ? <div className='mx-auto'><h3 >Loading...</h3></div> :
                        doctors.map(doctor => <div>
                            <div>
                                <img height="100%" width="100%" src={doctor.img} alt="" />
                                <h5 className='p-3'>{doctor.name}</h5>
                                <h6>{doctor.specialty}</h6>

                                <Rating
                                    initialRating={reviews?.map(review => review?.rating)}
                                    emptySymbol="far fa-star icon-color"
                                    fullSymbol="fas fa-star icon-color"

                                >

                                </Rating>



                            </div>

                        </div>)
                    }





                </div>

                <div className="d-flex justify-content-center">
                    <div className="pagination">
                        {
                            [...Array(pageCount).keys()]
                                .map(number => <button
                                    className={number === page ? 'selected' : ''}
                                    key={number}
                                    onClick={() => setPage(number)}
                                >{number + 1}</button>)
                        }
                    </div>
                </div>


                {/*----------------- extra section  start------------------- */}

                <div className="row my-5">
                    <div className="col-lg-6 col-sm-12 text-start">
                        <h1 className="">Our Healthcare Blog
                        </h1>
                        <img className="img-fluid my-2" src={blog} alt="" />
                        <i className="far fa-calendar-alt"></i> <span>April 9, 2021
                            |
                            by
                            cmsmasters</span>
                        <h3 className="my-2">Lifestyle Changes for Heart Attack Prevention
                        </h3>
                        <Link className="text-danger" to="">Read More</Link>
                    </div>
                    <div className="col-lg-6 col-sm-12 ">
                        <div className="border-start text-start ps-5 border-bottom">

                            <h3 className="my-2">Lifestyle Changes for Heart Attack Prevention
                            </h3>
                            <i className="far fa-calendar-alt"></i> <span>April 9, 2021
                                |
                                by
                                cmsmasters</span> <br />
                            <Link className="text-danger" to="">Read More</Link>
                        </div>
                        <div className="border-start text-start ps-5 border-bottom">

                            <h3 className="my-2">Lifestyle Changes for Heart Attack Prevention
                            </h3>
                            <i className="far fa-calendar-alt"></i> <span>April 9, 2021
                                |
                                by
                                cmsmasters</span> <br />
                            <Link className="text-danger" to="">Read More</Link>
                        </div>
                        <div className="border-start text-start ps-5 border-bottom">

                            <h3 className="my-2">Lifestyle Changes for Heart Attack Prevention
                            </h3>
                            <i className="far fa-calendar-alt"></i> <span>April 9, 2021
                                |
                                by
                                cmsmasters</span> <br />
                            <Link className="text-danger" to="">Read More</Link>
                        </div>
                        <div className="border-start text-start ps-5 border-bottom">

                            <h3 className="my-2">Lifestyle Changes for Heart Attack Prevention
                            </h3>
                            <i className="far fa-calendar-alt"></i> <span>April 9, 2021
                                |
                                by
                                cmsmasters</span> <br />
                            <Link className="text-danger" to="">Read More</Link>
                        </div>
                        <button type="button" className="btn btn-outline-danger mt-2">View More</button>
                    </div>
                </div>




                {/*----------------- extra section  end------------------- */}


                {/*----------------- extra section  start------------------- */}
                <div>
                    <h3 className="text-start mt-5">A Good Word Means a Lot</h3>
                    <h1 className="text-start text-success">Patient testimonials
                    </h1>
                    <p className="text-start">It’s always the word of mouth that’s the best advice. Here are some of our client's reviews
                    </p>


                </div>



                <Swiper
                    slidesPerView={2}
                    spaceBetween={30}
                    slidesPerGroup={2}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >

                    {reviews.length === 0 ? <h4>Loading...</h4> :
                        reviews.map(review =>
                            <SwiperSlide>
                                <div className="col">
                                    <div className="card">
                                        <img src={review.img} style={{ width: "120px", height: "120px" }} className="card-img-top mx-auto p-2" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">{review.name}</h5>
                                            <p className="card-text">{review.review}
                                            </p>
                                            <Rating
                                                initialRating={review.rating}
                                                emptySymbol="far fa-star icon-color"
                                                fullSymbol="fas fa-star icon-color"

                                            >

                                            </Rating>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>)
                    }

                </Swiper>

                {/*----------------- extra section  end------------------- */}


                <div className="row my-5">
                    <h4 className="my-4"><span className="border-bottom border-3 pb-1 text-danger">Make An Appoinment</span></h4>
                    <div className="col-lg-4 border col-sm-12">
                        <i className="far fa-clock mb-3"></i>  <span className="fs-5 fw-bold" >Woring Time</span> <br />
                        <p className="border-bottom"><span>Monday-Friday </span> - <span>8.00-17.00</span> </p>
                        <p className="border-bottom"><span>Saturday </span> - <span>9.00-17.30</span> </p>
                        <p className="border-bottom"><span>Sunday </span> - <span>9.30-15.30</span> </p>
                    </div>
                    <div className="col-lg-4 col-sm-12">
                        <i className="far fa-calendar-alt"></i> <span className="fs-5 fw-bold" >Doctor's TimeTable</span> <br />
                        <p>Click the below link to see the doctor's time table</p>
                        <button type="button" className="btn btn-info text-light">See Time Table <i className="fas fa-long-arrow-alt-right"></i></button>

                    </div>
                    <div className="col-lg-4 col-sm-12">
                        <i className="far fa-calendar-check"></i> <span className="fs-5 fw-bold" >Booking a Visit</span> <br />
                        <div className="dropdown">
                            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                Select Service
                            </button>
                            <ul className="dropdown-menu dropDown" aria-labelledby="dropdownMenuButton1">
                                <li><Link>Chiro</Link></li>
                                <li><Link>Dental</Link></li>
                                <li><Link>Xray</Link></li>
                            </ul>
                        </div>

                    </div>
                </div>
                <Review></Review>


            </div>
        </>



    );
};

export default Home;


















