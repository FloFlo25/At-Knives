import { ThemeProvider } from "@mui/material";
import { useRoutes } from "react-router-dom";
import { routes } from "./app/routes/Routes";

import { theme } from "./app/Themes";

const App = () => {
  const element = useRoutes(routes);

  return (
    <>
        <ThemeProvider theme={theme}>{element}</ThemeProvider>
    </>
  );
};

export default App;
