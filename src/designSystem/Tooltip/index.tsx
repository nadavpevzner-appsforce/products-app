import { Tooltip as MuiTooltip, TooltipProps } from '@mui/material';

export const Tooltip = ({ ...props }: TooltipProps) => {
  return <MuiTooltip {...props} />;
};
