import React, { Component } from "react";
import ResultView from "./ResultView";
import SearchView from "./SearchView";

interface Props {
  showSearch: boolean;
  triggerSearch: (inputValue: string) => void;
}

interface State {
  currentView: "search" | "result";
}

class ViewContainer extends Component<Props, State> {
  state: State = {
    currentView: this.props.showSearch ? "search" : "result",
  };

  updateView(view: "search" | "result") {
    console.log(view);
    /* this.setState({
      currentView: view,
    }); */
  }

  render() {
    if (this.props.showSearch) {
      return <SearchView triggerSearch={this.props.triggerSearch} />;
    } else {
      return <ResultView />;
    }
  }
}

export default ViewContainer;
