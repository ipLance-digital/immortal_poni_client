export type PopoverProps = {
  children: React.ReactNode;
  trigger: React.ReactNode;
  isOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
};
