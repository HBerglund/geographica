import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import { light } from "@material-ui/core/styles/createPalette";
import responsiveFontSizes from "@material-ui/core/styles/responsiveFontSizes";

type ThemeProps = {
  prefersDark: boolean;
};

export const theme = ({ prefersDark }: ThemeProps) =>
  responsiveFontSizes(
    createMuiTheme({
      palette: { type: prefersDark ? "dark" : "light" },
      spacing: 4,
    })
  );
