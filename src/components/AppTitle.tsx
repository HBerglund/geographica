import { CSSProperties } from "@material-ui/core/styles/withStyles";
import { Link } from "react-router-dom";
import useMediaQuery from "@material-ui/core/useMediaQuery";

interface Props {
  onTitleClick?: () => void;
}

function AppTitle(props: Props) {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const linkStyle: CSSProperties = {
    textDecoration: "none",
    color: prefersDarkMode ? "white" : "black",
  };

  return (
    <Link onClick={props.onTitleClick} style={linkStyle} to={"/"}>
      <h1 style={titleStyle}>Geographica</h1>
    </Link>
  );
}

const titleStyle: CSSProperties = {
  position: "fixed",
  top: "3%",
  left: "3%",
  fontSize: "1.5rem",
  cursor: "pointer",
  zIndex: 999,
  textDecoration: "none",
};

export default AppTitle;
