import { useMediaQuery as useMQ } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export const useMediaQuery = () => {
  const theme = useTheme();

  const mobile = useMQ(theme.breakpoints.down('sm'));
  const md = useMQ(theme.breakpoints.down('md'));

  return { mobile, md };
};
