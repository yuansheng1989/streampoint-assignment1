import React from "react";
import { Layout } from "antd";
import "../layout.css";

const { Header } = Layout;

const LayoutHeader = () => {
  return (
    <Header className="header-layout-background">
      <h1>
        <span style={{ color: "red" }}>SPS</span>ASGMT
      </h1>
    </Header>
  );
};

export default LayoutHeader;
