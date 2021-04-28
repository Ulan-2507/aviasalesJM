import React from "react";
type PropsType = {
  label: string;
  value: string;
};
const FlightData: React.FC<PropsType> = ({ label, value }) => {
  return (
    <div>
      <div className="ticket__label">{label}</div>
      <div className="ticket__value">{value || <>&nbsp;</>}</div>
    </div>
  );
}

export default FlightData;
