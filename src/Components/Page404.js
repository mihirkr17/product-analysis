import React from 'react';
import pic404 from '../Assets/images/pic404.png';

const Page404 = () => {
   const customStyle = {
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      img : {
         width: "80%"
      }
   }
   
   return (
      <div className='page404' style={customStyle}>
         <img src={pic404} alt="" style={customStyle.img} />
      </div>
   );
};

export default Page404;