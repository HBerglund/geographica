import React, { useMemo } from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import CssBaseline from "@material-ui/core/CssBaseline";
import { theme as createTheme } from "./theme";
import { ThemeProvider } from "@material-ui/core";

type Props = {
  children: React.ReactNode;
};

export const AppTheme: React.FC<Props> = ({ children }) => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = useMemo(() => createTheme({ prefersDark: prefersDarkMode }), [
    prefersDarkMode,
  ]);

  return (
    <ThemeProvider theme={theme}>
      <>
        <CssBaseline />
        {children}​​
      </>
    </ThemeProvider>
  );
};
