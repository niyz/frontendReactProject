    // src/components/contacts.js

import React from 'react'

const reviewCard = (props) => {

    return (
      <div className="col-xs-12 col-sm-6 col-md-4">
          <div className="card">
              <div className="card-body">
                  <h4 className="card-title">{props.review_id}</h4>
                  <p>{props.rating}</p>
                  <p>Review text: {props.reviewText}</p>
                  <p>User id: {props.userId}</p>
                  <p>Date: { new Date(props.updatedAt).toUTCString()}</p>
              </div>
       
          </div>
      </div>
  )
};

export default reviewCard;