import React, { useEffect } from "react";
import { Form, Input, Drawer, Tabs, Divider, InputNumber } from "antd";
import ColorPicker from "../colorPicker/ColorPicker";
import { connect } from "react-redux";
import { setSideDrawer, setCardId } from "../../redux/sideDrawer/actions";
import { editCard } from "../../redux/cards/actions";
import { SettingOutlined, FormatPainterOutlined } from "@ant-design/icons";

const mapStateToProps = (state) => {
  return {
    sideDrawerVisible: state.SideDrawerReducer.sideDrawerVisible,
    cardId: state.SideDrawerReducer.cardId,
    cards: state.CardsReducer.cards,
  };
};

const { TabPane } = Tabs;
const { TextArea } = Input;

const SideDrawer = (props) => {
  const {
    sideDrawerVisible,
    setSideDrawer,
    setCardId,
    editCard,
    cards,
    cardId,
  } = props;

  const card = cards.filter((card) => card.id === cardId)[0];

  const [cardDataForm] = Form.useForm();
  const [cardStyleForm] = Form.useForm();

  useEffect(() => {
    if (cardId) {
      cardDataForm.setFieldsValue({
        title: card?.title,
        body: card?.body,
      });
      cardStyleForm.setFieldsValue({
        titleSize: card?.titleSize,
        bodySize: card?.bodySize,
        cornerRadius: card?.cornerRadius,
      });
    }
  }, [cardId]);

  const handleCardDataChange = () => {
    const newCard = { ...card, ...cardDataForm.getFieldsValue(true) };
    editCard(newCard);
  };

  const handleCardStyleChange = () => {
    const newCard = { ...card, ...cardStyleForm.getFieldsValue(true) };
    editCard(newCard);
  };

  const setTitleColor = (color) => {
    const newCard = { ...card, titleColor: color };
    editCard(newCard);
  };

  const setBodyColor = (color) => {
    const newCard = { ...card, bodyColor: color };
    editCard(newCard);
  };

  const setPanelColor = (color) => {
    const newCard = { ...card, panelColor: color };
    editCard(newCard);
  };

  return (
    <Drawer
      placement="right"
      closable={false}
      getContainer={false}
      style={{ position: "absolute" }}
      onClose={() => {
        setCardId("");
        setSideDrawer(false);
      }}
      visible={sideDrawerVisible}
      maskStyle={{ backgroundColor: "transparent" }}
    >
      <Tabs defaultActiveKey="1">
        <TabPane
          tab={
            <div
              style={{
                width: "30px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <SettingOutlined />
            </div>
          }
          key="1"
        >
          <Form layout="vertical" form={cardDataForm}>
            <Form.Item name="title" label="Title Text">
              <Input
                onChange={handleCardDataChange}
                style={{ borderRadius: "4px" }}
              />
            </Form.Item>
            <Form.Item name="body" label="Body Text">
              <TextArea
                rows={4}
                onChange={handleCardDataChange}
                style={{ borderRadius: "4px" }}
              />
            </Form.Item>
          </Form>
        </TabPane>
        <TabPane
          forceRender
          tab={
            <div
              style={{
                width: "30px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <FormatPainterOutlined />
            </div>
          }
          key="2"
        >
          <Form layout="vertical" form={cardStyleForm} style={{height: "650px"}}>
            <h3 style={{ color: "#1890ff", fontWeight: "normal" }}>Title</h3>
            <div style={{ display: "flex" }}>
              <Form.Item name="titleSize" label="Size">
                <InputNumber
                  style={{ borderRadius: "4px" }}
                  min={10}
                  max={50}
                  formatter={(value) => `${value}px`}
                  parser={(value) => value.replace("px", "")}
                  onChange={handleCardStyleChange}
                />
              </Form.Item>
              <Form.Item label="Color" style={{ marginLeft: "20px" }}>
                <ColorPicker
                  color={card?.titleColor}
                  setColor={setTitleColor}
                />
              </Form.Item>
            </div>
            <Divider />
            <h3 style={{ color: "#1890ff", fontWeight: "normal" }}>Body</h3>
            <div style={{ display: "flex" }}>
              <Form.Item name="bodySize" label="Size">
                <InputNumber
                  style={{ borderRadius: "4px" }}
                  min={10}
                  max={50}
                  formatter={(value) => `${value}px`}
                  parser={(value) => value.replace("px", "")}
                  onChange={handleCardStyleChange}
                />
              </Form.Item>
              <Form.Item label="Color" style={{ marginLeft: "20px" }}>
                <ColorPicker
                  color={card?.bodyColor}
                  setColor={setBodyColor}
                />
              </Form.Item>
            </div>
            <Divider />
            <h3 style={{ color: "#1890ff", fontWeight: "normal" }}>Panel</h3>
            <div style={{ display: "flex" }}>
              <Form.Item name="cornerRadius" label="Corner Radius">
                <InputNumber
                  style={{ borderRadius: "4px" }}
                  min={0}
                  max={50}
                  formatter={(value) => `${value}px`}
                  parser={(value) => value.replace("px", "")}
                  onChange={handleCardStyleChange}
                />
              </Form.Item>
              <Form.Item label="Color" style={{ marginLeft: "20px" }}>
                <ColorPicker
                  color={card?.panelColor}
                  setColor={setPanelColor}
                />
              </Form.Item>
            </div>
          </Form>
        </TabPane>
      </Tabs>
    </Drawer>
  );
};

export default connect(mapStateToProps, { setSideDrawer, editCard, setCardId })(
  SideDrawer
);
