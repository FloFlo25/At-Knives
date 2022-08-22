import { Button } from "@mui/material";

type Props = {
  children: React.ReactNode;
};

export const CoreButton = (props: Props) => {
  return (
    <Button
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      variant='primary'
    >
      {props.children}
    </Button>
  );
};
