import React, { Component } from "react";
import ResultView from "./ResultView";
import SearchView from "./SearchView";

interface Props {
  view: "search" | "result";
  triggerSearch: (inputValue: string) => void;
}

interface State {
  currentView: "search" | "result";
}

class ViewContainer extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  state: State = {
    currentView: "search",
  };

  componentDidUpdate(prevProps: Props) {
    if (prevProps.view !== this.props.view) {
      console.log(this.props.view);
    }
  }

  updateView(view: "search" | "result") {
    console.log(view);
    /* this.setState({
      currentView: view,
    }); */
  }

  render() {
    if (this.state.currentView === "search") {
      return (
        <>
          <SearchView triggerSearch={this.props.triggerSearch} />
        </>
      );
    } else {
      return (
        <>
          <ResultView />
        </>
      );
    }
  }
}

export default ViewContainer;
