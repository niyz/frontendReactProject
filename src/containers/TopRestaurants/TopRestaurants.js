import React from 'react';
import RestaurantCard from "../../components/RestaurantCard/RestaurantCard";

const axios = require('axios');
var counter =0;

class TopRestaurants extends React.Component {
    state = {
        restaurants: []
    }

    componentDidMount() {
        axios
            .get('http://localhost:8080/review/latest')
            .then((result) => {
                console.log(result.data);
                return result.data;
            })
            .then((data) => {
                this.setState({restaurants: data})
                console.log("state was set resturant");
            })
            .catch((error) => {
                console.log("ERROR " + error)
            })
    }
    render() {
        counter++;
        console.log(counter);
        const cards = this.state.restaurants.map(value2 => (
            <RestaurantCard
                restaurantId={value2.restaurant_id}
                name={value2.name}
                address={value2.address}
                category={value2.category}
                description={value2.description}

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