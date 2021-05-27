import React from "react";
import { Layout } from "antd";
import "../layout.css";

const { Header } = Layout;

const LayoutHeader = () => {
  return (
    <Header className="header-layout-background">
      <h1 style={{ userSelect: "none" }}>
        <span style={{ color: "#ed186d", fontWeight: "900", fontSize: "30px" }}>
          SPS
        </span>
        <span style={{ fontWeight: "400", fontSize: "30px" }}>ASGMT</span>
      </h1>
    </Header>
  );
};

export default LayoutHeader;
