import { CSSProperties } from "@material-ui/core/styles/withStyles";

function Contact() {
  return (
    <div style={rootStyle}>
      <h2>Contact</h2>
      <div style={contactDeets}>
        <span>Call if you want to get on the beers </span>
        <h3>070 640 92 48</h3>
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
