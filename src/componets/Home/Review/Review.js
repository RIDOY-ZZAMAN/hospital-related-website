import React, { useRef, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import './Review.css'


const Review = () => {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState();
    const nameRef = useRef();
    const emailRef = useRef();
    const reviewRef = useRef();

    const handleRatingSumbit = (e) => {
        e.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const review = reviewRef.current.value;
        const cutomerReview = { name, email, review, rating: rating }

        fetch('https://boiling-falls-46123.herokuapp.com/pendingreviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(cutomerReview)

        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert("Reviewed Successfully");
                    e.target.reset();
                }
            })



    }
    return (
        <div>
            <h3 className='my-4'>Please Give Us <span className="text-danger"> Your Valuable Review</span>  </h3>
            <form onSubmit={handleRatingSumbit}>
                <h5>Your Name</h5>
                <input placeholder='Your Name' style={{ width: "50%", height: '30px', borderRadius: "5px" }} type="text" ref={nameRef} name="" id="" />
                <h5>Your Email</h5>
                <input placeholder='Your Email' style={{ width: "50%", height: '30px', borderRadius: "5px" }} type="text" ref={emailRef} name="" id="" />
                <h5>Your Ratings</h5>
                {[...Array(5)].map((star, i) => {
                    const ratingValue = i + 1;
                    return (
                        <label>
                            <input
                                type="radio"
                                name="rating"
                                value={ratingValue}
                                onClick={() => setRating(ratingValue)}
                            />

                            <FaStar
                                className="star"
                                color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                                size={50}
                                onMouseEnter={() => setHover(ratingValue)}
                                onMouseLeave={() => setHover(null)}
                            />

                        </label>
                    )
                })} <br />

                <textarea ref={reviewRef} name="" id="" style={{ width: "50%", height: '150px' }} placeholder="Please Write your Review Here"></textarea> <br />

                <button className='btn btn-primary' type="submit">Submit</button>

            </form>

        </div>
    );
};

export default Review;