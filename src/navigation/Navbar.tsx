import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import { Link } from "react-router-dom";
import { routes } from "./routes";

const useStyles = makeStyles({
  root: {
    position: "fixed",
    bottom: "0",
    left: "50%",
    transform: "translateX(-50%)",
    width: "30rem",
    margin: "1rem",
    backgroundColor: "transparent",
    color: "black",
  },
});

function Navbar() {
  const classes = useStyles();

  return (
    <BottomNavigation className={classes.root} showLabels>
      {routes.map(({ name, path }) => (
        <BottomNavigationAction
          component={Link}
          key={name}
          value={name}
          label={name}
          to={path}
        />
      ))}
    </BottomNavigation>
  );
}

export default Navbar;
