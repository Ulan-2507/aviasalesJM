import React from 'react';

export default function FlightData({title, subtitle}) {
    return (
        <div className="flight__data">
            <p className="flight__titile">{title}</p>
            <p className="flight__subtitle">{subtitle}</p>
        </div>
    );
}
