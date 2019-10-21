import React from 'react';
import RestaurantCard from "../../components/RestaurantCard/RestaurantCard";

const axios = require('axios');

class TopRestaurants extends React.Component {
    state = {
        restaurants: []
    }

    componentDidMount() {
        axios
            .get('http://localhost:8080/restaurant/latest/')
            .then((result) => {
                return result.data;
            })
            .then((data) => {
                this.setState({restaurants: data})
            })
            .catch((error) => {
                console.log("ERROR " + error)
            })
    }
    render() {
        const cards = this.state.restaurants.map(value => (
            <RestaurantCard
                key={value.restaurant_id}
                restaurantId={value.restaurant_id}
                name={value.name}
                address={value.address}
                category={value.category}
                description={value.description}

            />

        ));

        return(
            <React.Fragment>
                <br/>
                <h4>Resturants</h4>
                <hr/>
                <div className="row">
                    { cards }
                </div>
            </React.Fragment>

        )
    }

}

export default TopRestaurants;