import { AuthProtect } from '@/features/auth/auth-protect';

export default function ProtectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AuthProtect>{children}</AuthProtect>;
}
