import React from 'react';
import { NavLink } from 'react-router-dom';
import heroImage from '../Assets/images/laptop.jpg';
import { useData } from '../hooks/useData';
import Review from './Review';


const Home = () => {
   const url = "product.json";
   const reviewUrl = 'review.json';
   const [data] = useData(url);
   const [reviewData] = useData(reviewUrl);
   const newReviewData = reviewData.slice(0, 3);

   const productTitleStyle = {
      color: "red",
      itSpan: {
         color: "green",
         marginTop: "1rem"
      }
   }

   const imgDivStyle = {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      height: "100%"
   }

   const imgStyle = {
      width: "90%",
      height: "90%"
   }

   return (
      <section className='home__section py-5'>
         <div className="container">
            <div className="home_banar py-5">
               <div className="row">
                  <div className="col-lg-6">
                     <div className="product_img" style={imgDivStyle}>
                        <img src={heroImage} alt="Hero-Image" style={imgStyle} />
                     </div>
                  </div>
                  <div className="col-lg-6">
                     <div className="product_about">
                        <h1 className='d-flex flex-column' style={productTitleStyle}>
                           Acer Aspire 5 A515-46-R3UB
                           <span className='fs-5' style={productTitleStyle.itSpan}>About This Item :</span>
                        </h1>
                        <article>
                           <ul>
                              {
                                 data.map(({ id, desc }) => (<li key={id}>{desc}</li>))
                              }
                           </ul>
                        </article>
                     </div>
                  </div>
               </div>
            </div>
            <div id="review__section" className='py-5'>
               <h2 className='text-center py-4 mt-5'>Customer Reviews</h2>
               <div className="row">
                  {
                     newReviewData.map(reviews => {
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
               <div className="text-center">
                  <NavLink className='btn btn-outline-primary' to='/reviews'>See All Reviews</NavLink>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Home;