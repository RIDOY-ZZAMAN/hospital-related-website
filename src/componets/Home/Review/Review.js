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

        fetch('http://localhost:5000/reviews', {
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
            <form onSubmit={handleRatingSumbit}>
                <h5>Your Name</h5>
                <input style={{ width: "70%", height: '30px' }} type="text" ref={nameRef} name="" id="" />
                <h5>Your Email</h5>
                <input style={{ width: "70%", height: '30px' }} type="text" ref={emailRef} name="" id="" />
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

                <textarea ref={reviewRef} name="" id="" style={{ width: "70%", height: '150px' }} placeholder="Please Write your Review Here"></textarea> <br />

                <button type="submit">Submit</button>

            </form>

        </div>
    );
};

export default Review;