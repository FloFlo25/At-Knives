import { Button } from "@mui/material";

type Props = {
  children: React.ReactNode;
  styles?: React.CSSProperties;
  onClick?: any;
};

export const CoreButton = ({ onClick, styles, ...props }: Props) => {
  return (
    <Button
      //@ts-ignore
      variant='primary'
      style={{ marginBottom: "10px", ...styles }}
      onClick={onClick}
    >
      {props.children}
    </Button>
  );
};
