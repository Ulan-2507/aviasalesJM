import React from "react";
type IProps = {
  label: string;
  value: string;
};
export default function FlightData({ label, value }: IProps) {
  return (
    <div className="flight__data">
      <div className="flight__label">{label}</div>
      <div className="flight__subtitle">{value || <>&nbsp;</>}</div>
    </div>
  );
}
