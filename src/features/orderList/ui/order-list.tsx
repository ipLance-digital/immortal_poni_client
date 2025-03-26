'use client';

import { Loader } from '@/shared/ui/loader';
import { useOrderList } from '../model/useOrderList';
import { OrderItem } from './order-item';
import { VStack } from '@/shared/ui';

export const OrderList = () => {
  const { orders, isPending } = useOrderList();

  if (isPending) {
    return <Loader />;
  }

  return (
    <VStack gap={16} center>
      {[...orders, ...orders, ...orders].map((order, index) => (
        <OrderItem
          key={order.id + `-${index}`}
          order={order}
          isImidiate={index === 0}
        />
      ))}
    </VStack>
  );
};
