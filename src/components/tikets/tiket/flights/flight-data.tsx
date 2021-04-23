import React from "react";
type IProps = {
  title: string;
  subtitle: string;
};
export default function FlightData({ title, subtitle }: IProps) {
  return (
    <div className="flight__data">
      <p className="flight__titile">{title}</p>
      <p className="flight__subtitle">{subtitle}</p>
    </div>
  );
}
