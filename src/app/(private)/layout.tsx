import { AuthorizationGuard } from '@/features/auth/authorization-guard';

export default function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AuthorizationGuard>{children}</AuthorizationGuard>;
}
