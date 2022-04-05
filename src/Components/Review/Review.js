import React from 'react';
import useReview from '../Hook/UseReview';
import ReviewCard from '../ReviewCard/ReviewCard';
import './Review.css'

const Review = () => {
    const [reviewCart, setReviewCart] = useReview();

    return (
        <div>

            <div className="reviewCard-Container">
                {
                    reviewCart.map(review => <ReviewCard
                        key={review.id}
                        review={review}
                    ></ReviewCard>)
                }
            </div>
        </div>
    );
};

export default Review;