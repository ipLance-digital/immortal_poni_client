'use client';

import {
  DefaultTheme,
  ThemeProvider as StyledComponentsThemeProvider,
} from 'styled-components';
import { theme } from './index';
import { useState } from 'react';
import { LIGHT_THEME, DARK_THEME } from './colors';
import { DARK_SHADOWS, LIGHT_SHADOWS } from './shadows';

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [colorScheme] = useState<'light' | 'dark'>('light');

  const currentTheme: DefaultTheme = {
    ...theme,
    colors: colorScheme === 'light' ? LIGHT_THEME : DARK_THEME,
    shadows: colorScheme === 'light' ? LIGHT_SHADOWS : DARK_SHADOWS,
  };

  return (
    <StyledComponentsThemeProvider theme={currentTheme}>
      {children}
    </StyledComponentsThemeProvider>
  );
};
