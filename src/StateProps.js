//rcc class komponen
import React, { Component } from "react";
import Opera from "./Opera";

export default class StateProps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      makanan: "Bakso",
    };
  }
  render() {
    return (
      <div>
        <h2>{this.state.makanan}</h2>
        <button onClick={() => this.setState({ makanan: "soto" })}>ganti makanan</button>
        <Opera makanan={this.state.makanan} />
      </div>
    );
  }
}
