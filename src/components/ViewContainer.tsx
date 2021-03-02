import React, { Component } from "react";
import ResultView from "./ResultView";

interface Props {
  showResult: boolean;
}

class ViewContainer extends Component<Props> {
  render() {
    if (this.props.showResult) {
      return <ResultView />;
    } else {
      return null;
    }
  }
}

export default ViewContainer;
