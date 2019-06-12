import React from "react";
import { Spin } from "antd";

const PageLoader = () => {
  return (
    <div
      style={{
        textAlign: "center",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Spin size={"large"} />
    </div>
  );
};

export default PageLoader;
