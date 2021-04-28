import React from "react";
import "./spinner.scss";

type PropsType = {
  loading: boolean;
};
const Spinner: React.FC<PropsType> = ({ loading }) => {
  if (loading) {
    return (
      <div className="loader">
        <div className="lds-ellipsis">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }
  return null;
};

export default Spinner;
