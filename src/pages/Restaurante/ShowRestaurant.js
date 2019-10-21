import React from 'react';
import ShowRestaurantCard from "../../components/ShowRestaurantCard/ShowRestaurantCard";


const axios = require('axios');
class ShowRestaurant extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            restId:props.match.params.id ? props.match.params.id : 0,
            restaurant: []
        }
    }

    componentDidMount() {
        axios
            .get('http://localhost:8080/restaurant/' + this.state.restId )
            .then((result) => {
                console.log(result.data);
                return result.data;
            })
            .then((data) => {
                this.setState({restaurant: data})
                console.log("state was set showRestaurant");
            })
            .catch((error) => {
                console.log("ERROR " + error)
            })
    }

    render() {

        const showRestaurant = this.state.restaurant.map((res) =>
            <ShowRestaurantCard
                id = {res.id}
                name = {res.name}
                address = {res.address}
                category = {res.category}
                description = {res.description}
                created_at = {res.created_at}
                updated_at = {res.updated_at}
            />
        );

        return(
        <React.Fragment>
            <h4>Resturant</h4>
            <div className="blaha">
                { console.log("in blaha") }
                { showRestaurant }
            </div>
        </React.Fragment>
        )
    }
}

export default ShowRestaurant;