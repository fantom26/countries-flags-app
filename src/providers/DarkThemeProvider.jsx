import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";

export const DarkThemeProvider = ({ children }) => {
  const { darkThemeEnabled } = useSelector((state) => state.app);

  return (
    <ThemeProvider theme={{ theme: darkThemeEnabled ? "dark" : "light" }}>
      {children}
    </ThemeProvider>
  );
};
