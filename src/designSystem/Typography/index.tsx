import { Typography as MuiTypography, Skeleton, TypographyProps } from '@mui/material';

export const Typography = ({ ...props }: TypographyProps) => {
  return <MuiTypography {...props}>{props.children}</MuiTypography>;
};
