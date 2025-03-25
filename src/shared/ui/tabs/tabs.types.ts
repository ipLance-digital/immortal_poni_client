import { CSSProperties } from 'react';

export type Tab<T extends string> = {
  label: string;
  value: T;
};

export type TabsProps<T extends string> = {
  tabs: Array<Tab<T>>;
  defaultValue?: T;
  value?: T;
  onChange?: (value: T) => void;
  style?: CSSProperties;
};
