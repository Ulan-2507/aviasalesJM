import React from "react";
import "./spinner.scss";

type IProps = {
  loading: boolean;
};
const Spinner = ({ loading }: IProps) => {
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
