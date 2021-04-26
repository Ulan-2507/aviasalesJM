import React from "react";
type IProps = {
  label: string;
  value: string;
};
export default function FlightData({ label, value }: IProps) {
  return (
    <div>
      <div className="ticket__label">{label}</div>
      <div className="ticket__value">{value || <>&nbsp;</>}</div>
    </div>
  );
}
