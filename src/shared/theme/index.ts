import { LIGHT_THEME } from './colors';
import { LIGHT_SHADOWS } from './shadows';

export const theme = {};

export type Theme = typeof theme;
export type ThemeColors = typeof LIGHT_THEME;
export type ThemeShadows = typeof LIGHT_SHADOWS;

type FlattenColors<T> = T extends Record<string, unknown>
  ? {
      [K in keyof T]: T[K] extends Record<string, unknown>
        ? `${K & string}.${FlattenColors<T[K]>}`
        : K;
    }[keyof T]
  : never;

export type DSColorsKeys = FlattenColors<ThemeColors>;
