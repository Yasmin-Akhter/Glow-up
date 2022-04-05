import React from 'react';

const ReviewCard = (props) => {
    console.log(props.review);
    const { name, picture, about } = props.review;
    return (
        <div>
            <div className="card-img">
                <img src={picture} alt="" />
            </div>
            <h4>Name:{name}</h4>
            <p>{about}</p>
            <p>Ratings:</p>

        </div>
    );
};

export default ReviewCard;