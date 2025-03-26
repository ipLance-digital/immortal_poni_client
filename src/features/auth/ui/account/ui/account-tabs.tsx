'use client';

import { Tabs } from '@/shared/ui';

export const AccountTabs = () => {
  return (
    <Tabs
      tabs={[
        {
          label: 'Исполнитель',
          value: 'executors',
        },
        {
          label: 'Заказчик',
          value: 'customer',
        },
      ]}
    />
  );
};
