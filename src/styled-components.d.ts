import 'styled-components';
import { Theme } from '@/shared/theme';

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface DefaultTheme {
    colors: Theme.LIGHT_THEME;
  }
}
