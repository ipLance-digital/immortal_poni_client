import 'styled-components';
import { ThemeShadows, ThemeColors } from '@/shared/theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: ThemeColors;
    shadows: ThemeShadows;
  }
}
