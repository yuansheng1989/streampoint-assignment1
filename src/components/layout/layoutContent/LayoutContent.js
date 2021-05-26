import React from "react";
import { Layout, Row, Col } from "antd";
import Cards from "../../cards/Cards";
import SideDrawer from "../../sideDrawer/SideDrawer";

const { Content } = Layout;

const LayoutContent = () => {
  return (
    <Content className="site-drawer-render-in-content-layout">
      <Row>
        <Col xl={{ span: 16, offset: 4}} xs={{ span: 20, offset: 2}}>
          <Cards />
        </Col>
      </Row>
      <SideDrawer />
    </Content>
  );
};

export default LayoutContent;
