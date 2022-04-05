import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useReview from '../Hook/UseReview';
import ReviewCard from '../ReviewCard/ReviewCard';
import './Home.css';

const Home = () => {
    const [reviewCart, setReviewCart] = useReview([]);
    return (
        <div>
            <div className='title'>
                <h1><span>G</span>low up </h1>
            </div>
            <div className="header-Container">

                <div className="details-container">

                    <h2>Makes you more beautiful</h2>
                    <p>The right cosmetic products provide nutrition for skin, <br></br> ensuring it stays hydrated and supple.</p>
                    <Link to="/about">
                        <Button variant='danger'>Details</Button>
                    </Link>
                </div>
                <div className="img-container">
                    <img src="https://i.pinimg.com/736x/ff/d1/ff/ffd1ffc1e7d7e37ca03053adafcda6a0.jpg" alt="" />
                </div>

            </div>
            <div>
                <h1>WHAT PEOPLE SAY</h1>
                {/* <div>
                    <ReviewCard reviewCart={reviewCart} ></ReviewCard>
                </div> */}
                <Link to="/review">
                    <Button variant='danger' className='py-2 my-5'> Load More Reviews</Button>
                </Link>

            </div>

        </div>
    );
};

export default Home;