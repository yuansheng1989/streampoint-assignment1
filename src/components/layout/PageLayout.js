import React from "react";
import { Layout } from "antd";
import "antd/dist/antd.css";
import LayoutHeader from "./layoutHeader/LayoutHeader";
import LayoutContent from "./layoutContent/LayoutContent";
import "./layout.css";

const PageLayout = () => {
  return (
    <Layout className="page-layout">
      <LayoutHeader />
      <LayoutContent />
    </Layout>
  );
};

export default PageLayout;
