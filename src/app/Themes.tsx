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
      primary: "#ebeabb",
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
            boxShadow:
              "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
            fontSize: 17,
            height: 50,
            transition: "all ease-in-out 0.3s",
            width: "250px",
            "&:click": {
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
