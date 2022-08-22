import { Theme, ThemeProvider } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import { theme } from "./app/Themes";
import { CoreButton } from "./shared/components/CoreButton";
import { Title } from "./shared/components/Title";

const App = () => {
  const classes = useStyle();

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.main}>
        <Title />
        <CoreButton>Create lobby</CoreButton>
        <CoreButton>Join lobby</CoreButton>
      </div>
    </ThemeProvider>
  );
};

const useStyle = makeStyles((theme: Theme) => ({
  main: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "fit-content",
  },
}));

export default App;
