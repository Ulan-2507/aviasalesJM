import React from 'react';
import './flights.scss';

import FlightData from './flight-data';

function Flights() {
    return (
        <React.Fragment>
            <div className="flight">
                <FlightData title="MOW – HKT" subtitle="11:20 – 00:50" />
                <FlightData title="В пути" subtitle="13ч 30м" />
                <FlightData title="1 пересадка" subtitle="HKG" />
            </div>
            <div className="flight">
                <FlightData title="MOW – HKT" subtitle="11:20 – 00:50" />
                <FlightData title="В пути" subtitle="13ч 30м" />
                <FlightData title="1 пересадка" subtitle="HKG" />
            </div>
            <div className="flight">
                <FlightData title="MOW – HKT" subtitle="11:20 – 00:50" />
                <FlightData title="В пути" subtitle="13ч 30м" />
                <FlightData title="1 пересадка" subtitle="HKG" />
            </div>
        </React.Fragment>
        
    );
}

export default Flights;