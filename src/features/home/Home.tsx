import { Theme } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import { Title } from "../../shared/components/Title";
import { CoreButton } from "../../shared/components/CoreButton";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const classes = useStyle();
  const navigate = useNavigate();

  return (
    <div className={classes.main}>
      <Title />
      <CoreButton onClick={() => navigate("create")}>Create lobby</CoreButton>
      <CoreButton onClick={() => navigate("join")}>Join lobby</CoreButton>
    </div>
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
