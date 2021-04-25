import React from "react";
import "./flights.scss";
import { v4 as uuidv4 } from "uuid";
import {
  time,
  durationTime,
  transition,
} from "../../../../utils/format-helper";
import FlightData from "./flightData";

interface Segment {
  origin: string;
  destination: string;
  date: string;
  stops: string[];
  duration: number;
}
type IProps = {
  segments: Segment[];
};

const Flights: React.FC<IProps> = ({ segments }) => {
  const flightData = segments.map((segment) => {
    const { origin, destination, date, stops, duration } = segment;

    return (
      <div key={uuidv4()} className="flight">
        <FlightData
          label={`${origin} - ${destination}`}
          value={time(date, duration)}
        />
        <FlightData label="В пути" value={durationTime(duration)} />
        <FlightData label={transition(stops)} value={stops.join(", ")} />
      </div>
    );
  });
  return <React.Fragment>{flightData}</React.Fragment>;
};

export default Flights;
