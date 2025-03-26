'use client';

import { OrderList } from '@/features/orderList/ui';
import { HStack, Text, VStack } from '@/shared/ui';

export default function Home() {
  return (
    <VStack padding={24} gap={16}>
      <h2>Каталог заказов</h2>

      <HStack>
        <VStack flex={1}>
          <div
            style={{
              height: '100%',
            }}
          >
            <Text variant='heading-3'>Фильтры</Text>
          </div>
        </VStack>

        <VStack flex={3}>
          <OrderList />
        </VStack>
      </HStack>
    </VStack>
  );
}
