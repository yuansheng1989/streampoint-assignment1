import React from "react";
import reactCSS from "reactcss";
import { BlockPicker } from "react-color";

class ColorPicker extends React.Component {
  state = {
    displayColorPicker: false,
    color: "",
  };

  componentWillReceiveProps = (nextProps) => {
    if (this.props.color !== nextProps.color) {
      this.setState({
        color: nextProps.color,
      });
    }
  };

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker });
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false });
  };

  handleChange = (color) => {
    this.setState({ color: color.hex });
    this.props.setColor(color.hex);
  };

  render() {
    const styles = reactCSS({
      default: {
        color: {
          width: "27px",
          height: "27px",
          borderRadius: "2px",
          background: this.state.color,
        },
        swatch: {
          padding: "1px",
          background: "#fff",
          borderRadius: "1px",
          boxShadow: "0 0 0 1px rgba(0,0,0,.1)",
          display: "inline-block",
          cursor: "pointer",
        },
        popover: {
          position: "absolute",
          zIndex: "3",
          top: "40px",
          left: "-70px",
        },
        cover: {
          position: "fixed",
          top: "0px",
          right: "0px",
          bottom: "0px",
          left: "0px",
        },
      },
    });
    return (
      <div>
        <div style={styles.swatch} onClick={this.handleClick}>
          <div style={styles.color} />
        </div>
        {this.state.displayColorPicker ? (
          <div style={styles.popover}>
            <div style={styles.cover} onClick={this.handleClose} />
            <BlockPicker
              color={this.state.color}
              onChange={this.handleChange}
            />
          </div>
        ) : null}
      </div>
    );
  }
}

export default ColorPicker;
