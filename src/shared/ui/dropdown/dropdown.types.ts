type ItemLabel = string | React.ReactNode;

type DropdownItem =
  | { label: ItemLabel; onClick?: () => void; divider?: false }
  | { divider: true };

export type DropdownProps = {
  items: Array<DropdownItem>;
  trigger: React.ReactNode;
  isOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
};
