import { OrderDTO } from '@/entities/order/types';
import { ApiRequest } from '@/shared/api/api-request';
import { queryOptions } from '@tanstack/react-query';

export const OrderAPI = {
  baseKey: 'order',
  getList: () =>
    queryOptions<{ orders: Array<OrderDTO> }>({
      queryKey: [OrderAPI.baseKey, 'list'],
      queryFn: () => ApiRequest('orders'),
    }),
};
