import styled from '@emotion/styled';
import { ButtonProps, Button as MuiButton, useTheme } from '@mui/material';

const StyledButton = styled(MuiButton)``;

export const Button = ({ children, ...props }: ButtonProps) => {
  const theme = useTheme();

  return (
    <StyledButton theme={theme} {...props}>
      {children}
    </StyledButton>
  );
};
