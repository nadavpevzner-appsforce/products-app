'use client';
import { Flex, Typography } from '@/designSystem';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import React from 'react';

export const Header = ({ title, info }: { title: string; info: string }) => {
  const { mobile } = useMediaQuery();

  return (
    <Flex
      flexGrow={0.2}
      justifyContent={'center'}
      flexDirection={'column'}
      textAlign={mobile ? 'center' : 'start'}
      paddingX={mobile ? '10px' : '90px'}
      sx={{}}
    >
      <Typography fontWeight={'bold'} fontSize={'2em'} sx={{ overflowWrap: 'break-word' }}>
        {title}
      </Typography>
      <Typography>{info}</Typography>
    </Flex>
  );
};
