import React from 'react'

const Card = (props) => {
    return (
        <div>
            <div className="card">  
                <img src={props.avatar} className="card--photo" />

                <p>{props.first_name}</p>
                <p><span className="bold">{props.last_name}</span> / person</p>
                <p>{props.email}</p> 
            </div>
        </div>
    )
}

export default Card
