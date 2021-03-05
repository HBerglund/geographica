import React, { Component, CSSProperties, ErrorInfo } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";

interface Props extends RouteComponentProps {}
interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  state: State = {
    hasError: false,
  };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.log({ error, errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={rootStyle}>
          <span style={textStyle}>
            Something went wrong... Try reloading the page
          </span>
        </div>
      );
    }
    return this.props.children;
  }
}

const rootStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 200,
  width: "100%",
  height: "100%",
};

const textStyle: CSSProperties = {
  textAlign: "center",
  fontSize: "2rem",
  fontWeight: "bold",
};

export default withRouter(ErrorBoundary);
