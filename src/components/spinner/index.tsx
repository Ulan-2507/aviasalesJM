import React from "react";
import "antd/dist/antd.css";
import { LoadingOutlined } from "@ant-design/icons";
type IProps = {
  loading: boolean;
};
const Spinner = ({ loading }: IProps) => {
  if (loading) {
    return (
      <div className="loader">
        <LoadingOutlined style={{ fontSize: 60 }} spin />
      </div>
    );
  }
  return null;
};

export default Spinner;
