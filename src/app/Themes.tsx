import { createTheme } from "@mui/material";

export const themePalette = createTheme({
  palette: {
    primary: {
      main: "#1B2430",
      light: "#51557E",
      dark: "#353752",
    },
    secondary: {
      main: "#816797",
      light: "#D6D5A8",
    },
    text: {
      primary: "#e0e0e0",
    },
  },
});

export const theme = createTheme(themePalette, {
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "primary" },
          style: {
            color: themePalette.palette.text.primary,
            background: themePalette.palette.primary.light,
            fontSize: 17,
            height: 50,
            willChange: "backgroundColor",
            transition: "all ease-in-out 0.3s",
            width: "250px",
            "&:hover": {
              backgroundColor: themePalette.palette.primary.dark,
            },
          },
        },
        {
          props: { variant: "secondary" },
          style: {
            color: themePalette.palette.primary.main,
            background: "none",
            fontSize: 17,
            height: 50,
            willChange: "backgroundColor",
            transition: "all ease-in-out 0.3s",
            gap: 12,
            "&:hover": {
              backgroundColor: "#E4ECF2",
            },
          },
        },
        {
          props: { variant: "ternary" },
          style: {
            color: "#000",
            background: "#fff",
            fontSize: "16px",
            padding: "18px 0",
            borderRadius: 12,
            textAlign: "center",
          },
        },
      ],
    },
  },
});
