//rcc
import React, { Component } from "react";

export default class Opera extends Component {
  render() {
    return (
      <div>
        <h2>Operan state yg menjadi props : {this.props.makanan}</h2>
      </div>
    );
  }
}
