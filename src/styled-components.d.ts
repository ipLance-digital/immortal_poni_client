import 'styled-components';
import { Theme } from '@/shared/theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: Theme['LIGHT_THEME'];
  }
}
