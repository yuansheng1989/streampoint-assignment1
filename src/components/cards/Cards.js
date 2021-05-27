import React, { useState, useEffect } from "react";
import { Card, Button, Divider } from "antd";
import { EditOutlined, CopyOutlined, DeleteOutlined } from "@ant-design/icons";
import { setSideDrawer, setCardId } from "../../redux/sideDrawer/actions";
import { duplicateCard, deleteCard } from "../../redux/cards/actions";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    cards: state.CardsReducer.cards,
  };
};

const Cards = (props) => {
  const [deleteDisabled, setDeleteDisabled] = useState(true);
  const { cards, setSideDrawer, setCardId, duplicateCard, deleteCard } = props;

  useEffect(() => {
    if (cards.length === 1) {
      setDeleteDisabled(true);
    } else {
      setDeleteDisabled(false);
    }
  }, [cards]);

  const handleEditClick = (id) => {
    setCardId(id);
    setSideDrawer(true);
  };

  const handleCopyClick = (card) => {
    duplicateCard(card);
  };

  const handleDeleteClick = (id) => {
    deleteCard(id);
  };

  return (
    <>
      {cards.map((card) => (
        <Card
          style={{ margin: "30px 0px", borderRadius: card.cornerRadius, backgroundColor: card.panelColor }}
          key={card.id}
          bordered={false}
          hoverable
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <h1
              style={{
                fontSize: card.titleSize,
                marginBottom: "0px",
                color: card.titleColor,
              }}
            >
              {card.title}
            </h1>
            <div style={{display: "flex", flexWrap: "nowrap"}}>
              <Button
                type="link"
                icon={<EditOutlined />}
                onClick={() => {
                  handleEditClick(card.id);
                }}
              />
              <Button
                type="link"
                icon={<CopyOutlined />}
                onClick={() => {
                  handleCopyClick(card);
                }}
              />
              <Button
                type="link"
                disabled={deleteDisabled}
                icon={<DeleteOutlined />}
                onClick={() => {
                  handleDeleteClick(card.id);
                }}
              />
            </div>
          </div>
          <Divider />
          <p style={{ fontSize: card.bodySize, color: card.bodyColor }}>
            {card.body}
          </p>
        </Card>
      ))}
    </>
  );
};

export default connect(mapStateToProps, {
  setSideDrawer,
  duplicateCard,
  deleteCard,
  setCardId,
})(Cards);
