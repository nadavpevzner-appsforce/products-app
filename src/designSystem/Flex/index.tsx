import React from 'react';
import { Box } from '..';
import { BoxProps } from '@mui/material';

export const Flex = ({ ...props }: BoxProps) => {
  return <Box display={'flex'} {...props} />;
};
