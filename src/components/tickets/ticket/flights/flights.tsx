import React from "react";

import { v4 as uuidv4 } from "uuid";
import {
  time,
  durationTime,
  transition,
} from "../../../../utils/format-helper";
import FlightData from "./flightData";
import {SegmentTicket} from '../../../../types/ticket';

type PropsType = {
  segments: SegmentTicket[];
};

const Flights: React.FC<PropsType> = ({ segments }) => {
  const flightData = segments.map((segment) => {
    const { origin, destination, date, stops, duration } = segment;

    return (
      <div key={uuidv4()} className="ticket__row">
        <FlightData
          label={`${origin} - ${destination}`}
          value={time(date, duration)}
        />
        <FlightData label="В пути" value={durationTime(duration)} />
        <FlightData label={transition(stops)} value={stops.join(", ")} />
      </div>
    );
  });
  return <div className="ticket__flight-list">{flightData}</div>;
};

export default Flights;
