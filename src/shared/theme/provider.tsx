'use client';

import {
  DefaultTheme,
  ThemeProvider as StyledComponentsThemeProvider,
} from 'styled-components';
import { theme } from './index';
import { useState } from 'react';

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [colorScheme] = useState<'light' | 'dark'>('light');

  const currentTheme: DefaultTheme = {
    colors: colorScheme === 'light' ? theme.LIGHT_THEME : theme.DARK_THEME,
  };

  return (
    <StyledComponentsThemeProvider theme={currentTheme}>
      {children}
    </StyledComponentsThemeProvider>
  );
};
