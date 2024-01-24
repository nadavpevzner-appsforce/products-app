import { Box, BoxProps } from '@mui/material';

export const GridItem = ({ ...props }: BoxProps) => {
  return <Box display={'flex'} justifyContent={'center'} {...props} />;
};
