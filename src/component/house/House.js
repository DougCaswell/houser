import React from 'react';

function House(props) {
    let { name, address, city, zipcode, id } = props.house
    return (
        <div>
            <h2>Name: {name}</h2>
            <h2>Address: {address}</h2>
            <h2>City: {city}</h2>
            <h2>Zip Code: {zipcode}</h2>
            <button onClick={() => props.remove(id)} >Delete</button>
        </div>
    )
}

export default House