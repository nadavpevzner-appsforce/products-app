'use client';
import { ThemeProvider } from '@mui/material/styles';

export function ThemeClient({ children }: { children: React.ReactNode }) {
  return <ThemeProvider theme={{}}>{children}</ThemeProvider>;
}
