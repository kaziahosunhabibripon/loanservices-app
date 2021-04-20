import React from 'react';
import './Review.css';
const ReviewUser = ({review}) => {
    
    return (
        <div className="row review shadow rounded mt-5">
            <div className="col-md-10 comments">
           <h3 className="text-secondary"> Reviewer: {review.name}</h3> 
           <p className="text-info"> Company: {review.company}</p> 
            <p className="text-danger"> {review.description}</p>
                   
            </div>
        </div>
    );
};

export default ReviewUser;