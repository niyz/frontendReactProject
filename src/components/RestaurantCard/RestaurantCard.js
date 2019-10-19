import React from 'react'

const RestaurantCard = (props) => {
    return (
        <div className="col-xs-12 col-sm-6 col-md-4">
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">{props.resturantId}</h4>
                    <p>Name: {props.name}</p>
                    <p>Address: {props.address}</p>
                    <p>Category: {props.category }</p>
                    <p>Description: {props.description}</p>
                </div>
            </div>
        </div>
    )

};

export default RestaurantCard;

