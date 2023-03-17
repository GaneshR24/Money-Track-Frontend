import React from "react";
import { Spin } from "antd";

const Spinner = () => {
  return (
    <>
      <div className="spinner">
        <Spin color="#0A86D9" style={{ color: "#0A86D9" }} size="large" />
      </div>
    </>
  );
};

export default Spinner;
