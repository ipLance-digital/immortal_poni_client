'use client';

import { useCallback, useState } from 'react';
import { TabsProps } from './tabs.types';
import { TabButton, Wrapper } from './tabs.styled';
import { Text } from '../text';

export const Tabs = <T extends string>({
  tabs,
  defaultValue,
  value: controlledValue,
  onChange,
  style,
}: TabsProps<T>) => {
  const [internalValue, setInternalValue] = useState<T>(
    defaultValue || tabs[0]?.value
  );

  const activeValue =
    controlledValue !== undefined ? controlledValue : internalValue;

  const handleChange = useCallback(
    (newValue: T) => {
      if (onChange) onChange(newValue);
      else setInternalValue(newValue);
    },
    [onChange]
  );

  return (
    <Wrapper style={style}>
      {tabs.map((tab) => (
        <TabButton
          key={tab.value}
          $isActive={activeValue === tab.value}
          onClick={() => handleChange(tab.value)}
        >
          <Text>{tab.label}</Text>
        </TabButton>
      ))}
    </Wrapper>
  );
};
