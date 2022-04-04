import React from 'react';
import heroImage from '../Assets/images/laptop.jpg';
import { useData } from '../hooks/useData';

const Home = () => {
   const url = "product.json";
   const [data] = useData(url);

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
      <div className='home__section py-5'>
         <div className="container">
            <div className="row">
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

               <div className="col-lg-6">
                  <div className="product_img" style={imgDivStyle}>
                     <img src={heroImage} alt="Hero-Image" style={imgStyle} />
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Home;