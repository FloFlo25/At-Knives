import makeStyles from "@mui/styles/makeStyles";
import { Theme } from "@mui/material";
import { BloodyKnife } from "../assets/BloodyKnife";

export const Title = () => {
  const classes = useStyles();
  return (
    <h1 className={classes.title}>
      At Knives <BloodyKnife />
    </h1>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  title: {
    color: theme.palette.text.primary,
  },
}));
