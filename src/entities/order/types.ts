export type OrderID = string;

export type OrderDTO = {
  id: OrderID;
  name: string;
  body: string;
  price: number;
  created_by: string;
  assign_to: string | null;
  status_id: number;
  created_at: string;
  deadline: string | null;
};
