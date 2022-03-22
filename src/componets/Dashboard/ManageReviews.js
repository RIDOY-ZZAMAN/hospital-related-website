import React, { useEffect, useState } from 'react';

const ManageReviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch("https://boiling-falls-46123.herokuapp.com/pendingreviews")
            .then(res => res.json())
            .then(data => setReviews(data))

    }, [])

    const handleAcceptReview = (name, email, review, rating) => {
        const acceptReviews = { name, email, review, rating };
        fetch('https://boiling-falls-46123.herokuapp.com/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(acceptReviews)

        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert("Review Accepted");

                }
            })



    }

    const handleDeleteReview = (id) => {
        const url = `https://boiling-falls-46123.herokuapp.com/pendingreviews/${id}`;
        const proceed = window.confirm("Are You Sure, You want to Delete this Review?")
        if (proceed) {
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remainingReviews = reviews.filter(review => review._id !== id);
                        setReviews(remainingReviews);
                        alert("Review Deleted Successfully");
                    }
                })

        }

    }



    return (
        <div className='mx-auto'>
            <h2 className='text-center'>Manage Review</h2>
            {
                reviews.length === 0 ? <h4>Loading...</h4> :
                    reviews.map(review => <div className='border border-2 p-4 text-start'>
                        <h5> Reviewer Name: {review.name}</h5>
                        <h5> Reviewer Email: {review.email}</h5>
                        <h5>  Reviewer Review: {review.review}</h5>
                        <h5>  Reviewer Rating: {review.rating}</h5>

                        <div className='d-flex justify-content-evenly mt-3'>
                            <button onClick={() => handleAcceptReview(review.name, review.email, review.review, review.rating)} className='btn btn-primary'>Accept Review</button>
                            <button onClick={() => handleDeleteReview(review._id)} className='btn btn-primary'>Delete Review</button>
                        </div>

                    </div>)
            }
        </div>
    );
};

export default ManageReviews;