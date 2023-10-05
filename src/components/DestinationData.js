import React from "react";
import "./DestinationStyles.css";
import Mountain3 from "../assets/3.jpg";
import Mountain4 from "../assets/4.jpg";

class DestinationData extends React.Component {
  state = {};
  render() {
    return (
      <div className={this.props.className}>
        <div className="des-text">
          <h2> {this.props.heading} </h2>
          <p>{this.props.text}</p>
        </div>
        <div className="des-image">
          <img alt="img" src={this.props.img1} />
          <img alt="img" src={this.props.img2} />
        </div>
      </div>
    );
  }
}

export default DestinationData;
