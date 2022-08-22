import { Button } from "@mui/material";

type Props = {
  children: React.ReactNode;
  styles?: React.CSSProperties;
};

export const CoreButton = ({ styles, ...props }: Props) => {
  return (
    <Button
      //@ts-ignore
      variant='primary'
      style={{ marginBottom: "10px", ...styles }}
    >
      {props.children}
    </Button>
  );
};
