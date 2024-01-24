import { Box, BoxProps } from '@mui/material';

export const GridList = ({ ...props }: BoxProps) => {
  return (
    <Box
      display={'grid'}
      sx={{
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '10px',
      }}
      {...props}
    />
  );
};
