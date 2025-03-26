'use client';

import { useQuery } from '@tanstack/react-query';
import { OrderAPI } from '../api/order.api';

export const useOrderList = () => {
  const { data, isPending } = useQuery({
    ...OrderAPI.getList(),
  });

  return { orders: data?.orders ?? [], isPending };
};
