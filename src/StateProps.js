import React, { Component } from "react";

export default class StateProps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      makanan: "Bakso",
    };
  }

  GantiMakanan = (MakananBaru) => {
    this.setState({
      makanan: MakananBaru,
    });
  };
  render() {
    return (
      <div>
        <h2> Nama Makanan: {this.state.makanan}</h2>
        {/* <button onClick={() => this.setState({ makanan: "Teh tawar" })}>
          Ganti Makanan
        </button> */}
        <button onClick={() => this.GantiMakanan("teh tawar")}>
          Ganti Makanan
        </button>
      </div>
    );
  }
}
