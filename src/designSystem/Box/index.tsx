import { Box as MuiBox, BoxProps } from '@mui/material';

export const Box = ({ ...props }: BoxProps) => {
  return <MuiBox {...props} />;
};
