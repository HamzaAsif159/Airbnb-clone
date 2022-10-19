import React from "react";

export default function Card({img, rating, reviewCount, country, title, price}) {
    return (
            <div className="card">
            <img src={`./images/${img}`} className="card--image" />
            <div className="card--stats">
                <img src="./star.png" alt="star-icon" />
                <span>{rating}</span>
                <span className="gray">({reviewCount}) • </span>
                <span className="gray">{country}</span>
            </div>
            <p>{title}</p>
            <p><span className="bold">From {price}$</span> / person</p>
            </div>
        
    )
}