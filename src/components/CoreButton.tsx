import { Button } from "@mui/material";

type Props = {
  children: React.ReactNode;
  styles?: React.CSSProperties;
};

export const CoreButton = ({ styles, ...props }: Props) => {
  return (
    <Button
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      variant='primary'
      style={{ marginBottom: "10px", ...styles }}
    >
      {props.children}
    </Button>
  );
};
