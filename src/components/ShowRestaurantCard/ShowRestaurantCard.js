import React from 'react'

const ShowRestaurantCard = (props) => {
    return (
        <div className="col-xs-12 col-sm-6 col-md-4">
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">{props.id}</h4>
                    <p>Name: {props.name}</p>
                    <p>Address: {props.address}</p>
                    <p>Category: {props.category }</p>
                    <p>Description: {props.description}</p>
                    <p>Created at: {props.created_at }</p>
                    <p>Updated at: {props.updated_at}</p>
                </div>
            </div>
        </div>
    )

};

export default ShowRestaurantCard;
