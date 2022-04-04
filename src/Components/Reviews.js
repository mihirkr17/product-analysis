import React from 'react';
import { useData } from '../hooks/useData';
import Review from './Review';

const Reviews = () => {
   const reviewUrl = 'review.json';
   const [reviewData] = useData(reviewUrl);

   return (
      <div className='reviews__section py-5'>
         <div className="container">
            <h1 className='py-5'>
               {reviewData ? "Total Customer Reviews : " + reviewData.length : "No Reviews Found"}
            </h1>
            <div className="row">
               {
                  reviewData.map(reviews => {
                     const { review_id, review_name, review_content, rating, time } = reviews;
                     return (
                        <div className='col-lg-4 col-sm-12 my-3' key={review_id}>
                           <Review review_id={review_id}
                              review_name={review_name}
                              review_content={review_content}
                              rating={rating}
                              time={time}></Review>
                        </div>
                     )
                  })
               }
            </div>
         </div>
      </div>
   );
};

export default Reviews;