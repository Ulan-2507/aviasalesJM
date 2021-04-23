import React from "react";
import "./flights.scss";
import addMinutes from 'date-fns/addMinutes';
import { v4 as uuidv4 } from "uuid";

import FlightData from "./flightData";
interface Segment {
  origin: string;
  destination: string;
  date: string;
  stops: string[];
  duration: number;
}
type IProps = {
  segments: Segment[]
}

const time = (date: string, duration: number) => {
  const departureTime = new Date(date).toLocaleTimeString('ru-RU').substring(0, 5);
  const arrivalTime = addMinutes(new Date(date), duration).toLocaleTimeString('ru-RU').substring(0, 5);
  return `${departureTime} - ${arrivalTime}`;
}
const durationTime = (duration: number) => {
  const hours = Math.floor(duration / 60);
  const min = duration - hours * 60;
  return `${hours}ч ${min}м`;
}
const transition = (stops: string[]) => {
  switch(stops.length) {
    case 0: 
      return 'без пересадок';
    case  1: 
      return '1 пересадка';
    default: 
      return `${stops.length} пересадок`;
  }
}


const Flights: React.FC<IProps> = ({segments}) => {
  const flightData = segments.map(segment => {
    const {origin, destination, date, stops, duration} = segment;
    
    return (
      <div key={uuidv4()} className="flight">
        <FlightData title={`${origin} - ${destination}`} subtitle={time(date, duration)} />
        <FlightData title="В пути" subtitle={durationTime(duration)} />
        <FlightData title={transition(stops)} subtitle={stops.join(', ')} />
      </div>
    );
  });
  return (
    <React.Fragment>
      {flightData}
    </React.Fragment>
  );
}

export default Flights;
