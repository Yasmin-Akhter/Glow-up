import React from 'react';
import './ReviewCard.css';
import { StarIcon } from '@heroicons/react/solid'

const ReviewCard = (props) => {
    console.log(props.review);
    const { name, picture, about } = props.review;
    return (
        <div>
            <div className="card">

                <p><StarIcon className='icon'></StarIcon> <StarIcon className='icon'></StarIcon><StarIcon className='icon'></StarIcon><StarIcon className='icon'></StarIcon><StarIcon className='icon'></StarIcon> </p>

                <p>"{about.length > 100 ? about.slice(0 - 100) : about}"</p>
                <h4>{name}</h4>
                <div className="card-img">
                    <img src={picture} alt="" />
                </div>


            </div>
        </div>
    );
};

export default ReviewCard;