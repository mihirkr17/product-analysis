import React from 'react';
import { Card } from 'react-bootstrap';

const Review = ({ review_name, review_content, rating, time }) => {
   const cardHeaderStyle = {
      display: "flex",
      flexDirection: "column",
      fontWeight: "bold",
      itSpan: {
         fontStyle: "italic",
         fontSize: "0.9rem",
         fontWeight: "100",
         color: "grey"
      }
   }

   const ratingStyle = {
      color: "#b3b300",
      marginLeft: "8px"
   }
   return (
      <Card style={{ boxShadow: "0 0 20px 0 #0000004f" }}>
         <Card.Header style={cardHeaderStyle}>
            {review_name}
            <span style={cardHeaderStyle.itSpan}>Commented On {time}</span>
         </Card.Header>
         <Card.Body>
            <div className='fw-bold my-1'>Rating: <span style={ratingStyle}>{rating}</span></div>
            <Card.Text>
               {review_content}
            </Card.Text>
         </Card.Body>
      </Card>
   );
};

export default Review;