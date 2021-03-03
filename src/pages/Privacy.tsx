import { CSSProperties } from "@material-ui/core/styles/withStyles";
import AppTitle from "../components/AppTitle";

function Privacy() {
  return (
    <div style={rootStyle}>
      <AppTitle />
      <div style={textStyle}>
        <span>We care about your privacy.</span>
      </div>
    </div>
  );
}

const rootStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  padding: "2rem",
  height: "100%",
};

const textStyle: CSSProperties = {
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export default Privacy;
