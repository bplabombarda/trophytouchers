import React, { Component, Fragment } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import List from "../components/List";
import data from "../data/matchups";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data.data,
      view: "result",
    };
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    if (this.state.view === "result") {
      this.setState({ view: "trophy" });
    } else {
      this.setState({ view: "result" });
    }
  }

  render() {
    const { data, view } = this.state;

    return (
      <Fragment>
        <Header view={view} toggleHandler={this.handleToggle} />
        <List view={view} data={data} />
        <Footer />
      </Fragment>
    );
  }
}
