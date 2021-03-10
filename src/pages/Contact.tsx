import { CSSProperties } from "@material-ui/core/styles/withStyles";
import AppTitle from "../components/AppTitle";

function Contact() {
  return (
    <div style={rootStyle}>
      <AppTitle />
      <div style={contactDeets}>
        <span>Call if you want to party </span>
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

const contactDeets: CSSProperties = {
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

export default Contact;
