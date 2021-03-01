import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import responsiveFontSizes from "@material-ui/core/styles/responsiveFontSizes";

type ThemeProps = {
  prefersDark: boolean;
};

export const theme = ({ prefersDark }: ThemeProps) =>
  responsiveFontSizes(
    createMuiTheme({
      palette: { type: prefersDark ? "dark" : "light" },
    })
  );
