import React from 'react';
import ReviewCard from '../../components/ReviewCard/reviewCard';
const axios = require('axios')

class ReviewList extends React.Component {
    state = {
      reviews: []
    }
    //Convert fetch to Axios
    componentDidMount() {
      axios
      .get('http://localhost:8080/review/latest')
      .then((result) => {
        console.log(result.data);
        return result.data
      })
      .then((data) => {
        this.setState({ reviews: data })
        console.log("state was set review");
      })
      .catch((error) => {
        console.log("ERROR: " + error)
      })
    }
  
    render() {
      const cards = this.state.reviews.map(value => (
        <ReviewCard
          reviewId={value.review_id}
          rating={value.rating}
          reviewText={value.review_text}
          createdAt={value.created_at}
          updatedAt={value.updated_at}
          onOrOff={value.active}
          userId={value.user_id}
          restaurantId={value.restaurant_id}
          />
          
      ));    
       // console.log(cards.userId)
  
    return(
      <React.Fragment>
        <br/>
        <h4>REVIEWS</h4>
        <hr/>
        <div className="row">
          { cards }
        </div>
      </React.Fragment>
       
    )
  }
  }
  export default ReviewList;