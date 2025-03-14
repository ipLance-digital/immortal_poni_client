import StyledComponentsRegistry from '@/shared/lib/registry';

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
    </>
  );
};
